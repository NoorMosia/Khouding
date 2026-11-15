using System.Security.Claims;
using Backend.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.Drafts;

public static class DraftEndpoints
{
    public static void MapDraftEndpoints(this WebApplication app)
    {
        // GET /api/drafts/{courseId}/{sectionId}/{problemId}
        // Returns the saved draft code, or 404 if none exists.
        app.MapGet("/api/drafts/{courseId}/{sectionId}/{problemId}", async (
            string courseId,
            string sectionId,
            string problemId,
            ClaimsPrincipal principal,
            AppDbContext db) =>
        {
            var userId = GetUserId(principal);
            if (userId is null) return Results.Unauthorized();

            var fullProblemId = $"{courseId}/{sectionId}/{problemId}";
            var draft = await db.Drafts.FirstOrDefaultAsync(d =>
                d.UserId    == userId &&
                d.ProblemId == fullProblemId &&
                d.Language  == "csharp");

            return draft is null
                ? Results.NotFound()
                : Results.Ok(new { code = draft.Code });
        }).RequireAuthorization();

        // PUT /api/drafts/{courseId}/{sectionId}/{problemId}
        // Upserts the draft code for the given problem. Returns 204.
        app.MapPut("/api/drafts/{courseId}/{sectionId}/{problemId}", async (
            string courseId,
            string sectionId,
            string problemId,
            DraftSaveRequest req,
            ClaimsPrincipal principal,
            AppDbContext db) =>
        {
            var userId = GetUserId(principal);
            if (userId is null) return Results.Unauthorized();

            var fullProblemId = $"{courseId}/{sectionId}/{problemId}";
            var draft = await db.Drafts.FirstOrDefaultAsync(d =>
                d.UserId    == userId &&
                d.ProblemId == fullProblemId &&
                d.Language  == "csharp");

            if (draft is null)
            {
                db.Drafts.Add(new DraftRow
                {
                    UserId    = userId,
                    ProblemId = fullProblemId,
                    Language  = "csharp",
                    Code      = req.Code,
                    UpdatedAt = DateTimeOffset.UtcNow,
                });
            }
            else
            {
                draft.Code      = req.Code;
                draft.UpdatedAt = DateTimeOffset.UtcNow;
            }

            await db.SaveChangesAsync();
            return Results.NoContent();
        }).RequireAuthorization();
    }

    private static string? GetUserId(ClaimsPrincipal principal) =>
        principal.Identity?.IsAuthenticated == true
            ? principal.FindFirstValue(ClaimTypes.NameIdentifier)
            : null;
}

record DraftSaveRequest(string Code);
