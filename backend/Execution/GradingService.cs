using Backend.Content;

namespace Backend.Execution;

/// <summary>
/// Grading logic lives here — above the execution adapter, which stays dumb.
/// The adapter runs code; this service decides pass/fail.
/// </summary>
public class GradingService(ExecutionClient execution)
{
    /// <summary>
    /// Run mode: execute with the provided stdin and return raw stdout.
    /// No pass/fail judgment — the student just sees what their code prints.
    /// Falls back to cases[0].stdin if no stdin is provided.
    /// </summary>
    public async Task<RunVerdict> RunAsync(
        string language,
        CodeFile[] files,
        ProblemManifest problem,
        string? stdin = null)
    {
        var effectiveStdin = stdin ?? problem.Cases.FirstOrDefault()?.Stdin ?? "";
        var result = await execution.RunAsync(language, files, effectiveStdin);

        return new RunVerdict(
            Status:       MapStatus(result.Status),
            Stdout:       result.Stdout,
            Stderr:       result.Stderr,
            TestResults:  null,
            FailingCase:  null,
            Summary:      null
        );
    }

    /// <summary>
    /// Submit mode: run all test cases, compare output to oracle, return verdict.
    /// Stops at the first failure and returns that case's details.
    /// </summary>
    public async Task<RunVerdict> SubmitAsync(
        string language,
        CodeFile[] files,
        ProblemManifest problem)
    {
        var results  = new List<CaseResult>();
        int caseCount = problem.Cases.Count;

        for (int i = 0; i < caseCount; i++)
        {
            var tc     = problem.Cases[i];
            var result = await execution.RunAsync(language, files, tc.Stdin);

            // Non-accepted from Judge0 (compile error, TLE, runtime error)
            if (result.Status != "accepted")
            {
                results.Add(new CaseResult(i, false, result.TimeMs));

                var failStatus = result.Status == "compile_error"
                    ? "compile_error"
                    : "error";

                return new RunVerdict(
                    Status:      failStatus,
                    Stdout:      null,
                    Stderr:      result.Stderr,
                    TestResults: results.ToArray(),
                    FailingCase: new FailingCase(tc.Stdin, tc.Expected, result.Stdout, i),
                    Summary:     $"Error on case {i + 1} of {caseCount}: {result.Status}"
                );
            }

            var passed = OutputMatches(result.Stdout, tc.Expected);
            results.Add(new CaseResult(i, passed, result.TimeMs));

            if (!passed)
            {
                return new RunVerdict(
                    Status:      "failed",
                    Stdout:      null,
                    Stderr:      null,
                    TestResults: results.ToArray(),
                    FailingCase: new FailingCase(tc.Stdin, tc.Expected, result.Stdout, i),
                    Summary:     $"Failed on case {i + 1} of {caseCount}"
                );
            }
        }

        return new RunVerdict(
            Status:      "passed",
            Stdout:      null,
            Stderr:      null,
            TestResults: results.ToArray(),
            FailingCase: null,
            Summary:     $"Passed {caseCount} of {caseCount} tests"
        );
    }

    // ── Grading semantics (architecture §5) ───────────────────────────────
    // Exact match after CRLF → LF normalisation.
    // Trailing whitespace is significant — a stray space fails.
    private static bool OutputMatches(string actual, string expected)
    {
        var a = actual.Replace("\r\n", "\n");
        var e = expected.Replace("\r\n", "\n");
        return a == e;
    }

    private static string MapStatus(string adapterStatus) => adapterStatus switch
    {
        "accepted"      => "passed",
        "compile_error" => "compile_error",
        "time_limit"    => "error",
        _               => "error",
    };
}

// ── Verdict types (returned from grading, serialised to the frontend) ─────────

public record RunVerdict(
    string        Status,
    string?       Stdout,
    string?       Stderr,
    CaseResult[]? TestResults,
    FailingCase?  FailingCase,
    string?       Summary
);

public record CaseResult(int Index, bool Passed, int TimeMs);

public record FailingCase(string Input, string Expected, string Actual, int CaseIndex);
