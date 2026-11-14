using System.Collections.Concurrent;
using System.Text.Json;
using System.Text.Json.Serialization;
using Backend.Content;

var builder = WebApplication.CreateBuilder(args);

// ── JSON: use camelCase, ignore nulls ─────────────────────────────────────────
builder.Services.ConfigureHttpJsonOptions(o =>
{
    o.SerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
    o.SerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
});

builder.Services.AddOpenApi();

// CORS: allow the Vite dev server in local dev
builder.Services.AddCors(options =>
{
    options.AddPolicy("LocalDev", policy =>
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials());
});

// ── Content ingester — singleton, runs at startup ─────────────────────────────
builder.Services.AddSingleton<ContentIngester>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseCors("LocalDev");
}

// Run the ingester at startup (synchronously — fast, no I/O-heavy ops)
var ingester = app.Services.GetRequiredService<ContentIngester>();
ingester.IngestAll();

// ── Health check ──────────────────────────────────────────────────────────────
app.MapGet("/api/health", () => Results.Ok(new { status = "ok", service = "backend" }))
   .WithName("HealthCheck");

// ── Content endpoints ─────────────────────────────────────────────────────────

// GET /api/courses — list all courses (catalog)
app.MapGet("/api/courses", (ContentIngester ing) =>
    Results.Ok(ing.AllCourses.Select(c => new
    {
        c.Id,
        c.Title,
        c.Status,
        c.Country,
        ChapterCount = c.Chapters.Count,
        SectionCount = c.Chapters.Sum(ch => ch.Sections.Count),
    })))
   .WithName("ListCourses");

// GET /api/courses/{courseId} — full course manifest (chapters + section list)
app.MapGet("/api/courses/{courseId}", (string courseId, ContentIngester ing) =>
{
    var course = ing.GetCourse(courseId);
    return course is null ? Results.NotFound() : Results.Ok(course);
})
.WithName("GetCourse");

// GET /api/courses/{courseId}/sections/{sectionId} — full section including problems
app.MapGet("/api/courses/{courseId}/sections/{sectionId}", (
    string courseId, string sectionId, ContentIngester ing) =>
{
    var section = ing.GetSection(courseId, sectionId);
    return section is null ? Results.NotFound() : Results.Ok(section);
})
.WithName("GetSection");

// GET /api/courses/{courseId}/sections/{sectionId}/problems/{problemId}
app.MapGet("/api/courses/{courseId}/sections/{sectionId}/problems/{problemId}", (
    string courseId, string sectionId, string problemId, ContentIngester ing) =>
{
    var problem = ing.GetProblem(courseId, sectionId, problemId);
    return problem is null ? Results.NotFound() : Results.Ok(problem);
})
.WithName("GetProblem");

// ── Submission endpoints (stub — real grading wired once execution service is ready) ──

var submissions = new ConcurrentDictionary<string, SubmissionRecord>();

app.MapPost("/api/submissions", (SubmissionRequest req, ContentIngester ing) =>
{
    var id = Guid.NewGuid().ToString("N")[..12];
    var record = new SubmissionRecord(id, req.Kind, "running", req);
    submissions[id] = record;

    _ = Task.Run(async () =>
    {
        await Task.Delay(1200);

        // Stub: load real test cases from the manifest when available
        int caseCount = 5;
        if (req.ProblemId is not null && req.CourseId is not null && req.SectionId is not null)
        {
            // Extract the slug segments from the full stable IDs
            var courseSlug  = req.CourseId;
            var sectionSlug = req.SectionId.Contains('/')
                ? req.SectionId.Split('/').Last()
                : req.SectionId;
            var problemSlug = req.ProblemId.Contains('/')
                ? req.ProblemId.Split('/').Last()
                : req.ProblemId;

            var problem = ing.GetProblem(courseSlug, sectionSlug, problemSlug);
            if (problem is not null) caseCount = problem.Cases.Count;
        }

        var pass = DateTime.UtcNow.Second % 2 == 0;

        SubmissionResult result = req.Kind == "run"
            ? new SubmissionResult(id, "passed",
                Stdout: "7\n", Stderr: null, TestResults: null,
                FailingCase: null, Summary: null)
            : pass
                ? new SubmissionResult(id, "passed",
                    Stdout: null, Stderr: null,
                    TestResults: Enumerable.Range(0, caseCount)
                        .Select(i => new TestResult(i, true, 42)).ToArray(),
                    FailingCase: null,
                    Summary: $"Passed {caseCount} of {caseCount} tests")
                : new SubmissionResult(id, "failed",
                    Stdout: null, Stderr: null,
                    TestResults: Enumerable.Range(0, caseCount)
                        .Select(i => new TestResult(i, i != caseCount - 2, 42)).ToArray(),
                    FailingCase: new FailingCase("-5\n2", "-3", "7", caseCount - 2),
                    Summary: $"Failed on case {caseCount - 1} of {caseCount}");

        submissions[id] = record with { Status = result.Status, Result = result };
    });

    return Results.Ok(new { id });
})
.WithName("CreateSubmission");

app.MapGet("/api/submissions/{id}", (string id) =>
{
    if (!submissions.TryGetValue(id, out var record)) return Results.NotFound();
    if (record.Result is not null) return Results.Ok(record.Result);
    return Results.Ok(new { id, status = record.Status });
})
.WithName("GetSubmission");

app.Run();

// ── Types ─────────────────────────────────────────────────────────────────────

record CodeFile(string Path, string Contents);

record SubmissionRequest(
    string Kind,
    string Language,
    CodeFile[] Files,
    string? Stdin,
    string? ProblemId,
    string? CourseId,
    string? SectionId);

record SubmissionRecord(
    string Id,
    string Kind,
    string Status,
    SubmissionRequest Request,
    SubmissionResult? Result = null);

record SubmissionResult(
    string Id,
    string Status,
    string? Stdout,
    string? Stderr,
    TestResult[]? TestResults,
    FailingCase? FailingCase,
    string? Summary);

record TestResult(int Index, bool Passed, int TimeMs);

record FailingCase(string Input, string Expected, string Actual, int CaseIndex);
