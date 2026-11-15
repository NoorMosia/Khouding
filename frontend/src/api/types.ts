// ── API response types ────────────────────────────────────────────────────
// Mirror the C# ManifestModels records (camelCase JSON serialisation).
// These are what the backend actually returns — not the same as the frontend
// domain types in src/types/. The mapping happens in the hooks.

// ── Catalog ───────────────────────────────────────────────────────────────

export interface ApiCourseSummary {
  id: string
  title: string
  status: 'published' | 'planned'
  country: string
  chapterCount: number
  sectionCount: number
}

// ── Course manifest ───────────────────────────────────────────────────────

export interface ApiCourse {
  id: string
  title: string
  status: 'published' | 'planned'
  country: string
  chapters: ApiChapter[]
}

export interface ApiChapter {
  number: number
  title: string
  regionTitle: string
  province: string
  city: string
  fact: string
  sections: ApiSectionSummary[]
  test: ApiChapterTest | null
}

// A section as it appears inside the course manifest (no reading/quiz/problems)
export interface ApiSectionSummary {
  id: string        // "csharp-basics/1.3-number-variables"
  number: string    // "1.3"
  title: string
  subtitle: string
  lightsAt: number
  mapName: string
  // reading/quiz/problems are absent in the course-level listing
  // (they come from GET /sections/:id)
}

// ── Section manifest (full) ───────────────────────────────────────────────

export interface ApiSection {
  id: string
  number: string
  title: string
  subtitle: string
  lightsAt: number
  mapName: string
  readingMarkdown: string
  cheatsheetMarkdown: string
  quiz: ApiQuiz
  problems: ApiProblem[]
}

export interface ApiQuiz {
  sectionId: string
  pass: number
  shuffle: boolean
  questions: ApiQuizQuestion[]
}

export interface ApiQuizQuestion {
  id: string
  type: 'mcq' | 'truefalse' | 'fillblank'
  prompt: string
  options?: ApiMcqOption[]
  answer: string
  accept?: string[]
  rationale: string
}

export interface ApiMcqOption {
  id: string
  text: string
}

// ── Problem manifest ──────────────────────────────────────────────────────

export interface ApiProblem {
  id: string        // "csharp-basics/1.3-number-variables/p07-sum-two-ints"
  title: string
  difficulty: number
  grading: 'stdout-match' | 'unit-tests'
  languages: string[]
  starterFiles: Record<string, ApiCodeFile[]>
  statementMarkdown: string
  instruction: string
  cases: ApiTestCase[]
}

export interface ApiCodeFile {
  path: string
  contents: string
}

export interface ApiTestCase {
  stdin: string
  expected: string
  note: string
}

// ── Chapter test ──────────────────────────────────────────────────────────

export interface ApiChapterTest {
  id: string
  kind: 'chapter-test' | 'course-exam'
  title: string
  draw: number
  lightAt: number
  windowHours: number
  shuffle: boolean
  poolIds: string[]
  pool: ApiProblem[]
  cheatsheetMarkdowns: string[]
}
