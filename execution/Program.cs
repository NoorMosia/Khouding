// Execution adapter — the ONLY component that knows Judge0 exists.
// Internal contract: POST /run  { language, files[], stdin }
//                             → { stdout, stderr, exitCode, timeMs, memKb, status }
//
// Phase 1: proxies to hosted Judge0 CE (ce.judge0.com).
// Phase 2: change Judge0:BaseUrl in config. Nothing else moves.

using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddHttpClient("judge0", (sp, client) =>
{
    var config = sp.GetRequiredService<IConfiguration>();
    var baseUrl = config["Judge0:BaseUrl"]
        ?? throw new InvalidOperationException("Missing Judge0:BaseUrl");
    var apiKey = config["Judge0:ApiKey"] ?? "";

    client.BaseAddress = new Uri(baseUrl.TrimEnd('/') + "/");
    if (!string.IsNullOrEmpty(apiKey))
        client.DefaultRequestHeaders.Add("X-Auth-Token", apiKey);
});

builder.Services.ConfigureHttpJsonOptions(o =>
{
    o.SerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower;
    o.SerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
    app.MapOpenApi();

// ── Health check ──────────────────────────────────────────────────────────────
app.MapGet("/health", () => Results.Ok(new { status = "ok", service = "execution" }))
   .WithName("HealthCheck");

// ── Run endpoint ──────────────────────────────────────────────────────────────
app.MapPost("/run", async (RunRequest req, IHttpClientFactory factory, ILogger<Program> log) =>
{
    var languageId = LanguageId(req.Language);
    if (languageId is null)
        return Results.BadRequest(new { error = $"Unsupported language: {req.Language}" });

    // For single-file programs, use source_code directly.
    // Multi-file support can be added later via Judge0's additional_files.
    var source = req.Files.FirstOrDefault()?.Contents ?? "";

    var judge0Request = new Judge0Request(
        SourceCode:    source,
        LanguageId:    languageId.Value,
        Stdin:         req.Stdin ?? "",
        CpuTimeLimit:  5.0,   // seconds
        MemoryLimit:   128_000 // KB
    );

    var http = factory.CreateClient("judge0");

    // POST with wait=true — Judge0 runs the code and returns the result directly.
    // No polling needed; acceptable latency for a learning platform.
    var json = JsonSerializer.Serialize(judge0Request, new JsonSerializerOptions
    {
        PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower,
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
    });

    HttpResponseMessage res;
    try
    {
        res = await http.PostAsync(
            "submissions?wait=true&base64_encoded=false",
            new StringContent(json, Encoding.UTF8, "application/json"));
    }
    catch (Exception ex)
    {
        log.LogError(ex, "Failed to reach Judge0");
        return Results.StatusCode(502);
    }

    if (!res.IsSuccessStatusCode)
    {
        var body = await res.Content.ReadAsStringAsync();
        log.LogError("Judge0 returned {Status}: {Body}", res.StatusCode, body);
        return Results.StatusCode(502);
    }

    Judge0Response? verdict;
    try
    {
        verdict = await res.Content.ReadFromJsonAsync<Judge0Response>(new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower,
        });
    }
    catch (Exception ex)
    {
        log.LogError(ex, "Failed to deserialise Judge0 response");
        return Results.StatusCode(502);
    }

    if (verdict is null)
        return Results.StatusCode(502);

    var result = MapVerdict(verdict);
    return Results.Ok(result);
})
.WithName("Run");

app.Run();

// ── Judge0 language ID map ────────────────────────────────────────────────────

static int? LanguageId(string language) => language.ToLowerInvariant() switch
{
    "csharp" or "cs" or "c#" => 51,  // C# (Mono 6.6.0)
    _ => null,
};

// ── Judge0 status ID → our status string ─────────────────────────────────────
// Judge0 status IDs: 1=In Queue, 2=Processing, 3=Accepted, 4=Wrong Answer,
// 5=Time Limit Exceeded, 6=Compilation Error, 7-12=Runtime Errors, 13=Internal Error
static RunResult MapVerdict(Judge0Response v)
{
    var stdout  = v.Stdout  ?? "";
    var stderr  = v.Stderr  ?? v.CompileOutput ?? v.Message ?? "";
    var exitCode = v.ExitCode ?? (v.Status?.Id == 3 ? 0 : 1);
    var timeMs  = (int)((double.TryParse(v.Time, out var t) ? t : 0) * 1000);
    var memKb   = v.Memory ?? 0;

    var status = v.Status?.Id switch
    {
        3  => "accepted",       // Accepted
        4  => "wrong_answer",   // Wrong Answer — grading logic above the adapter handles this
        5  => "time_limit",
        6  => "compile_error",
        _  => "error",
    };

    // Normalise line endings (CRLF → LF) — Windows sandbox artifact, not a student error
    stdout = stdout.Replace("\r\n", "\n");

    return new RunResult(stdout, stderr, exitCode, timeMs, memKb, status);
}

// ── Contract types ────────────────────────────────────────────────────────────

record CodeFile(string Path, string Contents);

record RunRequest(
    string Language,
    CodeFile[] Files,
    string? Stdin
);

record RunResult(
    string Stdout,
    string Stderr,
    int ExitCode,
    int TimeMs,
    int MemKb,
    string Status
);

// ── Judge0 request / response shapes ─────────────────────────────────────────

record Judge0Request(
    string SourceCode,
    int LanguageId,
    string Stdin,
    double CpuTimeLimit,
    int MemoryLimit
);

record Judge0Response(
    string? Stdout,
    string? Stderr,
    string? CompileOutput,
    string? Message,
    string? Time,
    int? Memory,
    int? ExitCode,
    Judge0Status? Status
);

record Judge0Status(int Id, string Description);
