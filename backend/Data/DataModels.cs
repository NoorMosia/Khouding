namespace Backend.Data;

/// <summary>
/// One row per user/content/kind combination.
/// kind: "reading_done" | "quiz_passed" | "problem_solved"
/// section_id and problem_id are nullable:
///   course-level entry  → both null
///   section-level entry → section_id set, problem_id null
///   problem-level entry → both set
/// </summary>
public class ProgressEntry
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public required string UserId { get; set; }
    public required string CourseId { get; set; }
    public string? SectionId { get; set; }
    public string? ProblemId { get; set; }
    public required string Kind { get; set; }
    public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;
}

/// <summary>
/// One row per user/problem/language combination. Stores the last in-progress code.
/// Upserted on every debounced save from the editor.
/// </summary>
public class DraftRow
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public required string UserId { get; set; }
    /// <summary>Fully-qualified problem id, e.g. "csharp-basics/1.3-number-variables/p03-add-two-ints"</summary>
    public required string ProblemId { get; set; }
    public required string Language { get; set; }
    public required string Code { get; set; }
    public DateTimeOffset UpdatedAt { get; set; } = DateTimeOffset.UtcNow;
}

/// <summary>
/// One row per submission attempt. Stores the student's code and the verdict.
/// result_json holds the full serialised verdict for diagnostics / later replay.
/// </summary>
public class SubmissionRow
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public required string UserId { get; set; }
    public required string ProblemId { get; set; }
    public required string CourseId { get; set; }
    public required string SectionId { get; set; }
    public required string Language { get; set; }
    public required string Code { get; set; }
    /// <summary>"run" | "submit"</summary>
    public required string Kind { get; set; }
    /// <summary>"passed" | "failed" | "compile_error" | "error"</summary>
    public required string Status { get; set; }
    public string? ResultJson { get; set; }
    public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;
}

/// <summary>
/// Optional display name for a user. One row per user, created on first save.
/// If absent, the frontend falls back to the part of the email before the @.
/// </summary>
public class UserProfile
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public required string UserId { get; set; }
    public required string DisplayName { get; set; }
    public DateTimeOffset UpdatedAt { get; set; } = DateTimeOffset.UtcNow;
}

/// <summary>
/// One active or completed chapter test attempt per user per test.
/// The drawn problem IDs are stored as a comma-separated string.
/// A new attempt is only created when the student starts fresh (first time or after failing and requesting redraw).
/// </summary>
public class ChapterTestAttempt
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public required string UserId { get; set; }
    public required string TestId { get; set; }
    public required string CourseId { get; set; }
    public required string DrawnProblemIds { get; set; } // comma-separated ordered list
    public DateTimeOffset StartedAt { get; set; } = DateTimeOffset.UtcNow;
    public DateTimeOffset? CompletedAt { get; set; }
    public bool? Passed { get; set; }
}
