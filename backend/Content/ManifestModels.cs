// ── Content manifest models ───────────────────────────────────────────────
// These are the in-memory types the ingester builds and the API serialises.
// They are read-only after startup — the ingester runs once at startup and
// the results are cached for the lifetime of the process.
//
// Stable IDs (architecture §5):
//   course:   csharp-basics
//   section:  csharp-basics/1.3-number-variables
//   problem:  csharp-basics/1.3-number-variables/p07-sum-two-ints
//   test:     csharp-basics/1.T

namespace Backend.Content;

// ── Course ────────────────────────────────────────────────────────────────

public record CourseManifest(
    string Id,
    string Title,
    string Status,          // "published" | "planned"
    string Country,
    IReadOnlyList<ChapterManifest> Chapters
);

public record ChapterManifest(
    int    Number,
    string Title,
    string RegionTitle,
    string Province,
    IReadOnlyList<SectionManifest> Sections,
    ChapterTestManifest? Test
);

// ── Section ───────────────────────────────────────────────────────────────

public record SectionManifest(
    string Id,
    string Number,
    string Title,
    string Subtitle,
    int    LightsAt,
    string MapName,
    string ReadingMarkdown,
    string CheatsheetMarkdown,
    QuizManifest Quiz,
    IReadOnlyList<ProblemManifest> Problems
);

// ── Problem ───────────────────────────────────────────────────────────────

public record ProblemManifest(
    string Id,
    string Title,
    int    Difficulty,
    string Grading,          // "stdout-match" | "unit-tests"
    IReadOnlyList<string> Languages,
    // Starter files per language: { "csharp": [ { Path, Contents } ] }
    IReadOnlyDictionary<string, IReadOnlyList<CodeFileManifest>> StarterFiles,
    string StatementMarkdown,
    IReadOnlyList<TestCaseManifest> Cases
);

public record CodeFileManifest(string Path, string Contents);

public record TestCaseManifest(string Stdin, string Expected, string Note);

// ── Quiz ──────────────────────────────────────────────────────────────────

public record QuizManifest(
    string SectionId,
    int    Pass,
    bool   Shuffle,
    IReadOnlyList<QuizQuestionManifest> Questions
);

public record QuizQuestionManifest(
    string   Id,
    string   Type,            // "mcq" | "truefalse" | "fillblank"
    string   Prompt,
    IReadOnlyList<McqOption>? Options,  // mcq only
    string   Answer,
    IReadOnlyList<string>? Accept,      // fillblank only
    string   Rationale
);

public record McqOption(string Id, string Text);

// ── Chapter test ──────────────────────────────────────────────────────────

public record ChapterTestManifest(
    string   Id,
    string   Kind,            // "chapter-test" | "course-exam"
    string   Title,
    int      Draw,
    int      LightAt,
    int      WindowHours,
    bool     Shuffle,
    IReadOnlyList<string> PoolIds,
    IReadOnlyList<ProblemManifest> Pool,
    IReadOnlyList<string> CheatsheetMarkdowns
);
