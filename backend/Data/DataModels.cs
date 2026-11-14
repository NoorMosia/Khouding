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
