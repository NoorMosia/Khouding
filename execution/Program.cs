// Execution adapter — the ONLY component that knows Judge0 exists.
// Internal contract: POST /run  { language, files[], stdin }
//                             → { stdout, stderr, exitCode, timeMs, memKb, status }
//
// Phase 1: proxies to hosted Judge0.
// Phase 2: change the configured URL. Nothing else moves.

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddHttpClient();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// ── Health check ─────────────────────────────────────────────────────────────
app.MapGet("/health", () => Results.Ok(new { status = "ok", service = "execution" }))
   .WithName("HealthCheck");

// ── Run endpoint (stub — Judge0 integration wired in next phase) ─────────────
app.MapPost("/run", (RunRequest req) =>
{
    // TODO: translate to Judge0 API, poll for result, return normalised response.
    // For now, return a placeholder so the backend can call this without crashing.
    return Results.Ok(new RunResult(
        Stdout: "(execution adapter not yet wired to Judge0)",
        Stderr: "",
        ExitCode: 0,
        TimeMs: 0,
        MemKb: 0,
        Status: "stub"
    ));
})
.WithName("Run");

app.Run();

// ── Contract types ────────────────────────────────────────────────────────────

record CodeFile(string Path, string Contents);

record RunRequest(
    string Language,
    CodeFile[] Files,
    string Stdin
);

record RunResult(
    string Stdout,
    string Stderr,
    int ExitCode,
    int TimeMs,
    int MemKb,
    string Status
);
