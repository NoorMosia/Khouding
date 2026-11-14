using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Backend.Execution;

/// <summary>
/// Thin HTTP client for the execution adapter.
/// The backend never talks to Judge0 directly — only through this client.
/// </summary>
public class ExecutionClient(HttpClient http)
{
    private static readonly JsonSerializerOptions JsonOpts = new()
    {
        PropertyNamingPolicy        = JsonNamingPolicy.CamelCase,
        DefaultIgnoreCondition      = JsonIgnoreCondition.WhenWritingNull,
        PropertyNameCaseInsensitive = true,
    };

    public async Task<RunResult> RunAsync(string language, CodeFile[] files, string stdin)
    {
        var request = new RunRequest(language, files, stdin);
        var json    = JsonSerializer.Serialize(request, JsonOpts);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var res = await http.PostAsync("/run", content);

        if (!res.IsSuccessStatusCode)
            throw new ExecutionException($"Execution adapter returned {(int)res.StatusCode}");

        var result = await res.Content.ReadFromJsonAsync<RunResult>(JsonOpts)
            ?? throw new ExecutionException("Empty response from execution adapter");

        return result;
    }
}

public class ExecutionException(string message) : Exception(message);

// ── Shared contract types (mirror execution/Program.cs) ──────────────────────

public record CodeFile(string Path, string Contents);

public record RunRequest(string Language, CodeFile[] Files, string? Stdin);

public record RunResult(
    string Stdout,
    string Stderr,
    int ExitCode,
    int TimeMs,
    int MemKb,
    string Status
);
