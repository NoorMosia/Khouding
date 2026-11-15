using System.Security.Claims;
using Backend.Content;
using Backend.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.ChapterTests;

public static class ChapterTestEndpoints
{
    public static void MapChapterTestEndpoints(this WebApplication app)
    {
        // GET /api/courses/{courseId}/tests/{testId}
        // Returns the drawn problems for the user's current attempt.
        // Pass ?redraw=true to get a fresh draw after a failed attempt.
        app.MapGet("/api/courses/{courseId}/tests/{testId}", async (
            string courseId,
            string testId,
            bool? redraw,
            ClaimsPrincipal principal,
            ContentIngester ing,
            AppDbContext db) =>
        {
            var userId = GetUserId(principal);
            if (userId is null) return Results.Unauthorized();

            var manifest = ing.GetChapterTest(courseId, testId);
            if (manifest is null) return Results.NotFound();

            var fullTestId = $"{courseId}/{testId}";

            var latestAttempt = await db.ChapterTestAttempts
                .Where(a => a.UserId == userId && a.TestId == fullTestId)
                .OrderByDescending(a => a.StartedAt)
                .FirstOrDefaultAsync();

            bool needNewAttempt = latestAttempt is null
                || (redraw == true && latestAttempt.Passed == false);

            ChapterTestAttempt attempt;
            if (needNewAttempt)
            {
                var poolIds = manifest.Pool.Select(p => p.Id).ToArray();
                Random.Shared.Shuffle(poolIds);
                var drawn = poolIds.Take(manifest.Draw).ToArray();

                attempt = new ChapterTestAttempt
                {
                    UserId          = userId,
                    TestId          = fullTestId,
                    CourseId        = courseId,
                    DrawnProblemIds = string.Join(",", drawn),
                };
                db.ChapterTestAttempts.Add(attempt);
                await db.SaveChangesAsync();
            }
            else
            {
                attempt = latestAttempt!;
            }

            // Resolve drawn problem manifests in draw order.
            var drawnIds = attempt.DrawnProblemIds
                .Split(',', StringSplitOptions.RemoveEmptyEntries);

            var poolById = manifest.Pool.ToDictionary(p => p.Id);
            var problems = drawnIds
                .Where(id => poolById.ContainsKey(id))
                .Select(id => poolById[id])
                .ToList();

            return Results.Ok(new
            {
                testId             = fullTestId,
                title              = manifest.Title,
                draw               = manifest.Draw,
                lightAt            = manifest.LightAt,
                attemptId          = attempt.Id,
                problems,
                cheatsheetMarkdowns = manifest.CheatsheetMarkdowns,
            });
        });

        // POST /api/courses/{courseId}/tests/{testId}/complete
        // Body: { attemptId, solvedCount }
        app.MapPost("/api/courses/{courseId}/tests/{testId}/complete", async (
            string courseId,
            string testId,
            CompleteAttemptRequest req,
            ClaimsPrincipal principal,
            ContentIngester ing,
            AppDbContext db) =>
        {
            var userId = GetUserId(principal);
            if (userId is null) return Results.Unauthorized();

            var manifest = ing.GetChapterTest(courseId, testId);
            if (manifest is null) return Results.NotFound();

            var attempt = await db.ChapterTestAttempts
                .FirstOrDefaultAsync(a => a.Id == req.AttemptId && a.UserId == userId);

            if (attempt is null) return Results.NotFound();

            attempt.CompletedAt = DateTimeOffset.UtcNow;
            attempt.Passed      = req.SolvedCount >= manifest.LightAt;
            await db.SaveChangesAsync();

            return Results.Ok(new
            {
                passed      = attempt.Passed,
                solvedCount = req.SolvedCount,
                lightAt     = manifest.LightAt,
            });
        });

        // GET /api/courses/{courseId}/tests/{testId}/status
        // Returns whether the user has ever passed this test.
        app.MapGet("/api/courses/{courseId}/tests/{testId}/status", async (
            string courseId,
            string testId,
            ClaimsPrincipal principal,
            AppDbContext db) =>
        {
            var userId = GetUserId(principal);
            if (userId is null) return Results.Unauthorized();

            var fullTestId = $"{courseId}/{testId}";

            var passed = await db.ChapterTestAttempts
                .AnyAsync(a => a.UserId == userId && a.TestId == fullTestId && a.Passed == true);

            return Results.Ok(new { passed });
        });
    }

    // ── Helpers ───────────────────────────────────────────────────────────

    private static string? GetUserId(ClaimsPrincipal principal) =>
        principal.Identity?.IsAuthenticated == true
            ? principal.FindFirstValue(ClaimTypes.NameIdentifier)
            : null;
}

// ── Request shapes ────────────────────────────────────────────────────────

record CompleteAttemptRequest(Guid AttemptId, int SolvedCount);
