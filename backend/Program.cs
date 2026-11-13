using System.Collections.Concurrent;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();

// CORS: allow the Vite dev server to reach the API directly (Vite proxy also works)
builder.Services.AddCors(options =>
{
    options.AddPolicy("LocalDev", policy =>
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials());
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseCors("LocalDev");
}

// ── Health check ──────────────────────────────────────────────────────────────
app.MapGet("/api/health", () => Results.Ok(new { status = "ok", service = "backend" }))
   .WithName("HealthCheck");

// ── Submission store (in-memory stub — replace with Postgres later) ───────────
var submissions = new ConcurrentDictionary<string, SubmissionRecord>();

// POST /api/submissions — accept a run or submit, return an ID immediately
app.MapPost("/api/submissions", (SubmissionRequest req) =>
{
    var id = Guid.NewGuid().ToString("N")[..12];

    // Store with "running" status; a real backend would forward to the execution service here
    var record = new SubmissionRecord(id, req.Kind, "running", req);
    submissions[id] = record;

    // Simulate async processing: flip to result after a short delay
    _ = Task.Run(async () =>
    {
        await Task.Delay(1200); // simulate execution time

        // Stub verdict logic — alternates pass/fail so you can see both states
        var pass = DateTime.UtcNow.Second % 2 == 0;

        SubmissionResult result = req.Kind == "run"
            ? new SubmissionResult(
                id, "passed",
                Stdout: "7\n",
                Stderr: null,
                TestResults: null,
                FailingCase: null,
                Summary: null)
            : pass
                ? new SubmissionResult(
                    id, "passed",
                    Stdout: null,
                    Stderr: null,
                    TestResults: Enumerable.Range(0, 5)
                        .Select(i => new TestResult(i, true, 42))
                        .ToArray(),
                    FailingCase: null,
                    Summary: "Passed 5 of 5 tests")
                : new SubmissionResult(
                    id, "failed",
                    Stdout: null,
                    Stderr: null,
                    TestResults: Enumerable.Range(0, 5)
                        .Select(i => new TestResult(i, i != 3, 42))
                        .ToArray(),
                    FailingCase: new FailingCase("-5\n2", "-3", "7", 3),
                    Summary: "Failed on case 4 of 5");

        submissions[id] = record with { Status = result.Status, Result = result };
    });

    return Results.Ok(new { id });
})
.WithName("CreateSubmission");

// GET /api/submissions/{id} — poll for verdict
app.MapGet("/api/submissions/{id}", (string id) =>
{
    if (!submissions.TryGetValue(id, out var record))
        return Results.NotFound();

    if (record.Result is not null)
        return Results.Ok(record.Result);

    // Still running
    return Results.Ok(new { id, status = record.Status });
})
.WithName("GetSubmission");

app.Run();

// ── Types ─────────────────────────────────────────────────────────────────────

record CodeFile(string Path, string Contents);

record SubmissionRequest(
    string Kind,       // "run" | "submit"
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
