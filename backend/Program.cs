using System.Collections.Concurrent;
using System.Text.Json;
using System.Text.Json.Serialization;
using Backend.Auth;
using Backend.Content;
using Backend.Data;
using Backend.Execution;
using Backend.Progress;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// ── JSON: camelCase, ignore nulls ──────────────────────────────────────────────
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

// ── Database + Identity ────────────────────────────────────────────────────────
var connectionString = builder.Configuration.GetConnectionString("Postgres")
    ?? throw new InvalidOperationException(
        "Missing 'ConnectionStrings:Postgres'. Set it via .NET User Secrets (local) or an environment variable (prod).");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

builder.Services.AddIdentity<IdentityUser, IdentityRole>(options =>
{
    // Relaxed for dev; tighten in prod via config if needed
    options.Password.RequireDigit = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
    options.Password.RequiredLength = 8;
    options.User.RequireUniqueEmail = true;
})
.AddEntityFrameworkStores<AppDbContext>()
.AddDefaultTokenProviders();

// Cookie auth: SPA-friendly — return 401/403 JSON rather than redirecting to a login page
builder.Services.ConfigureApplicationCookie(options =>
{
    options.Cookie.HttpOnly = true;
    options.Cookie.SameSite = SameSiteMode.Lax;
    options.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
    options.ExpireTimeSpan = TimeSpan.FromDays(30);
    options.SlidingExpiration = true;
    options.Events.OnRedirectToLogin = ctx =>
    {
        ctx.Response.StatusCode = StatusCodes.Status401Unauthorized;
        return Task.CompletedTask;
    };
    options.Events.OnRedirectToAccessDenied = ctx =>
    {
        ctx.Response.StatusCode = StatusCodes.Status403Forbidden;
        return Task.CompletedTask;
    };
});

// ── OAuth providers (only registered when secrets are present) ────────────────
var authBuilder = builder.Services.AddAuthentication(options =>
{
    options.DefaultScheme          = IdentityConstants.ApplicationScheme;
    options.DefaultSignInScheme    = IdentityConstants.ApplicationScheme;
    options.DefaultChallengeScheme = IdentityConstants.ApplicationScheme;
});

var googleClientId     = builder.Configuration["Authentication:Google:ClientId"];
var googleClientSecret = builder.Configuration["Authentication:Google:ClientSecret"];
if (!string.IsNullOrEmpty(googleClientId) && !string.IsNullOrEmpty(googleClientSecret))
{
    authBuilder.AddGoogle(options =>
    {
        options.ClientId     = googleClientId;
        options.ClientSecret = googleClientSecret;
    });
}

var githubClientId     = builder.Configuration["Authentication:GitHub:ClientId"];
var githubClientSecret = builder.Configuration["Authentication:GitHub:ClientSecret"];
if (!string.IsNullOrEmpty(githubClientId) && !string.IsNullOrEmpty(githubClientSecret))
{
    authBuilder.AddGitHub(options =>
    {
        options.ClientId     = githubClientId;
        options.ClientSecret = githubClientSecret;
        options.Scope.Add("user:email");
    });
}

builder.Services.AddAuthorization();

// ── Content ingester — singleton, runs at startup ──────────────────────────────
builder.Services.AddSingleton<ContentIngester>();

// ── Execution adapter client + grading service ────────────────────────────────
var executionBaseUrl = builder.Configuration["ExecutionService:BaseUrl"]
    ?? "http://localhost:5051";

builder.Services.AddHttpClient<ExecutionClient>(client =>
{
    client.BaseAddress = new Uri(executionBaseUrl);
    client.Timeout     = TimeSpan.FromSeconds(30);
});
builder.Services.AddScoped<GradingService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseCors("LocalDev");
}

app.UseAuthentication();
app.UseAuthorization();

// ── Run EF Core migrations on startup ─────────────────────────────────────────
// Migrations are applied manually via: dotnet ef database update
// Do not auto-migrate here — it requires an advisory lock that the Neon pooler
// does not support, and auto-migrating in prod is risky anyway.

// ── Run the content ingester at startup ───────────────────────────────────────
var ingester = app.Services.GetRequiredService<ContentIngester>();
ingester.IngestAll();

// ── Health check ──────────────────────────────────────────────────────────────
app.MapGet("/api/health", () => Results.Ok(new { status = "ok", service = "backend" }))
   .WithName("HealthCheck");

// ── Content endpoints ─────────────────────────────────────────────────────────

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

app.MapGet("/api/courses/{courseId}", (string courseId, ContentIngester ing) =>
{
    var course = ing.GetCourse(courseId);
    return course is null ? Results.NotFound() : Results.Ok(course);
})
.WithName("GetCourse");

app.MapGet("/api/courses/{courseId}/sections/{sectionId}", (
    string courseId, string sectionId, ContentIngester ing) =>
{
    var section = ing.GetSection(courseId, sectionId);
    return section is null ? Results.NotFound() : Results.Ok(section);
})
.WithName("GetSection");

app.MapGet("/api/courses/{courseId}/sections/{sectionId}/problems/{problemId}", (
    string courseId, string sectionId, string problemId, ContentIngester ing) =>
{
    var problem = ing.GetProblem(courseId, sectionId, problemId);
    return problem is null ? Results.NotFound() : Results.Ok(problem);
})
.WithName("GetProblem");

// ── Auth endpoints ────────────────────────────────────────────────────────────
app.MapAuthEndpoints();

// ── Progress endpoints ────────────────────────────────────────────────────────
app.MapProgressEndpoints();

// ── Submission endpoints ───────────────────────────────────────────────────────

var submissions = new ConcurrentDictionary<string, SubmissionRecord>();

app.MapPost("/api/submissions", async (SubmissionRequest req, ContentIngester ing, GradingService grading) =>
{
    // Resolve the problem from the manifest
    ProblemManifest? problem = null;
    if (req.ProblemId is not null && req.CourseId is not null && req.SectionId is not null)
    {
        var sectionSlug = req.SectionId.Contains('/') ? req.SectionId.Split('/').Last() : req.SectionId;
        var problemSlug = req.ProblemId.Contains('/')  ? req.ProblemId.Split('/').Last()  : req.ProblemId;
        problem = ing.GetProblem(req.CourseId, sectionSlug, problemSlug);
    }

    if (problem is null)
        return Results.BadRequest(new { error = "Problem not found in manifest." });

    var id     = Guid.NewGuid().ToString("N")[..12];
    var record = new SubmissionRecord(id, req.Kind, "running", req);
    submissions[id] = record;

    var files = req.Files.Select(f => new Backend.Execution.CodeFile(f.Path, f.Contents)).ToArray();

    // Run asynchronously so the client can poll
    _ = Task.Run(async () =>
    {
        try
        {
            RunVerdict verdict = req.Kind == "run"
                ? await grading.RunAsync(req.Language, files, problem, req.Stdin)
                : await grading.SubmitAsync(req.Language, files, problem);

            var result = new SubmissionResult(
                id,
                verdict.Status,
                verdict.Stdout,
                verdict.Stderr,
                verdict.TestResults?.Select(r => new TestResult(r.Index, r.Passed, r.TimeMs)).ToArray(),
                verdict.FailingCase is null ? null
                    : new FailingCase(verdict.FailingCase.Input, verdict.FailingCase.Expected,
                                      verdict.FailingCase.Actual, verdict.FailingCase.CaseIndex),
                verdict.Summary
            );

            submissions[id] = record with { Status = result.Status, Result = result };
        }
        catch (Exception ex)
        {
            var errResult = new SubmissionResult(id, "error",
                null, ex.Message, null, null, "Execution service error");
            submissions[id] = record with { Status = "error", Result = errResult };
        }
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

// ── Types ──────────────────────────────────────────────────────────────────────

record SubmissionRequest(
    string Kind,
    string Language,
    Backend.Execution.CodeFile[] Files,
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
