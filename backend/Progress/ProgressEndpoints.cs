using System.Security.Claims;
using Backend.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Backend.Progress;

public static class ProgressEndpoints
{
    public static void MapProgressEndpoints(this WebApplication app)
    {
        // GET /api/progress/{courseId}
        // Returns a rollup of reading_done, quiz_passed, and problem_solved for
        // every section in the requested course, keyed by section ID.
        app.MapGet("/api/progress/{courseId}", async (
            string courseId,
            ClaimsPrincipal principal,
            UserManager<IdentityUser> userManager,
            AppDbContext db) =>
        {
            var userId = GetUserId(principal);
            if (userId is null) return Results.Unauthorized();

            var rows = await db.Progress
                .Where(p => p.UserId == userId && p.CourseId == courseId)
                .ToListAsync();

            // Group into a per-section dictionary the frontend mapper expects
            var bySection = rows
                .Where(p => p.SectionId is not null)
                .GroupBy(p => p.SectionId!)
                .ToDictionary(
                    g => g.Key,
                    g => new SectionProgress(
                        ReadingDone: g.Any(p => p.Kind == ProgressKind.ReadingDone),
                        QuizPassed:  g.Any(p => p.Kind == ProgressKind.QuizPassed),
                        SolvedProblems: g.Count(p => p.Kind == ProgressKind.ProblemSolved),
                        SolvedProblemIds: g
                            .Where(p => p.Kind == ProgressKind.ProblemSolved && p.ProblemId is not null)
                            .Select(p => p.ProblemId!)
                            .ToList()
                    ));

            return Results.Ok(new CourseProgressResponse(courseId, bySection));
        });

        // POST /api/progress/reading-done
        app.MapPost("/api/progress/reading-done", async (
            ReadingDoneRequest req,
            ClaimsPrincipal principal,
            UserManager<IdentityUser> userManager,
            AppDbContext db) =>
        {
            var userId = GetUserId(principal);
            if (userId is null) return Results.Unauthorized();

            await UpsertProgress(db, userId, req.CourseId, req.SectionId, null, ProgressKind.ReadingDone);
            return Results.Ok(new { ok = true });
        }).RequireAuthorization();

        // POST /api/progress/quiz-passed
        app.MapPost("/api/progress/quiz-passed", async (
            QuizPassedRequest req,
            ClaimsPrincipal principal,
            UserManager<IdentityUser> userManager,
            AppDbContext db) =>
        {
            var userId = GetUserId(principal);
            if (userId is null) return Results.Unauthorized();

            await UpsertProgress(db, userId, req.CourseId, req.SectionId, null, ProgressKind.QuizPassed);
            return Results.Ok(new { ok = true });
        }).RequireAuthorization();

        // GET /api/submissions/attempted/{courseId}/{sectionId}
        // Returns the slugs of problems the user has attempted but not yet passed.
        app.MapGet("/api/submissions/attempted/{courseId}/{sectionId}", async (
            string courseId,
            string sectionId,
            ClaimsPrincipal principal,
            AppDbContext db) =>
        {
            var userId = GetUserId(principal);
            if (userId is null) return Results.Unauthorized();

            var rows = await db.Submissions
                .Where(s => s.UserId == userId && s.CourseId == courseId && s.SectionId == sectionId)
                .Select(s => new { s.ProblemId, s.Status })
                .ToListAsync();

            // A problem is attempted if it has any submission, solved if any submission passed.
            var solved   = rows.Where(r => r.Status == "passed") .Select(r => r.ProblemId.Split('/').Last()).ToHashSet();
            var attempted = rows.Where(r => r.Status != "passed").Select(r => r.ProblemId.Split('/').Last()).ToHashSet();
            // Remove from attempted anything that is also solved
            attempted.ExceptWith(solved);

            return Results.Ok(new { attempted = attempted.ToList(), solved = solved.ToList() });
        }).RequireAuthorization();
        app.MapPost("/api/progress/problem-solved", async (
            ProblemSolvedRequest req,
            ClaimsPrincipal principal,
            UserManager<IdentityUser> userManager,
            AppDbContext db) =>
        {
            var userId = GetUserId(principal);
            if (userId is null) return Results.Unauthorized();

            await UpsertProgress(db, userId, req.CourseId, req.SectionId, req.ProblemId, ProgressKind.ProblemSolved);
            return Results.Ok(new { ok = true });
        }).RequireAuthorization();
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    private static string? GetUserId(ClaimsPrincipal principal) =>
        principal.Identity?.IsAuthenticated == true
            ? principal.FindFirstValue(ClaimTypes.NameIdentifier)
            : null;

    private static async Task UpsertProgress(
        AppDbContext db,
        string userId,
        string courseId,
        string? sectionId,
        string? problemId,
        string kind)
    {
        var exists = await db.Progress.AnyAsync(p =>
            p.UserId    == userId    &&
            p.CourseId  == courseId  &&
            p.SectionId == sectionId &&
            p.ProblemId == problemId &&
            p.Kind      == kind);

        if (!exists)
        {
            db.Progress.Add(new ProgressEntry
            {
                UserId    = userId,
                CourseId  = courseId,
                SectionId = sectionId,
                ProblemId = problemId,
                Kind      = kind,
            });
            await db.SaveChangesAsync();
        }
    }
}

// ── Constants ─────────────────────────────────────────────────────────────────

public static class ProgressKind
{
    public const string ReadingDone    = "reading_done";
    public const string QuizPassed     = "quiz_passed";
    public const string ProblemSolved  = "problem_solved";
}

// ── Request / response shapes ──────────────────────────────────────────────────

record ReadingDoneRequest(string CourseId, string SectionId);
record QuizPassedRequest(string CourseId, string SectionId);
record ProblemSolvedRequest(string CourseId, string SectionId, string ProblemId);
record SectionProgress(bool ReadingDone, bool QuizPassed, int SolvedProblems, List<string> SolvedProblemIds);
record CourseProgressResponse(string CourseId, Dictionary<string, SectionProgress> Sections);
