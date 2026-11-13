// ── Section view domain types ─────────────────────────────────────────────

export type Stage = 'reading' | 'quiz' | 'problems'
export type StageStatus = 'done' | 'active' | 'default'

// ── Quiz ──────────────────────────────────────────────────────────────────

export type QuestionType = 'mcq' | 'truefalse' | 'fillblank'

export interface McqOption {
  id: string
  text: string
}

export interface QuizQuestion {
  id: string
  type: QuestionType
  prompt: string
  /** mcq only */
  options?: McqOption[]
  /** mcq: option id; truefalse: 'true'|'false'; fillblank: first accepted answer */
  answer: string
  /** fillblank: all accepted answers (case-insensitive, trimmed) */
  accept?: string[]
  rationale: string
}

export interface QuizConfig {
  pass: number       // questions needed to pass
  total: number      // total questions
  questions: QuizQuestion[]
}

// ── Problems ──────────────────────────────────────────────────────────────

export type ProblemStatus = 'unsolved' | 'attempted' | 'solved'

export interface SectionProblem {
  id: string          // e.g. p07-sum-two-ints
  slug: string        // e.g. p07
  title: string
  difficulty: 1 | 2 | 3
  status: ProblemStatus
}

// ── Section ───────────────────────────────────────────────────────────────

export interface SectionData {
  id: string            // e.g. 1.3-number-variables
  courseId: string
  chapterId: string
  number: string        // e.g. "1.3"
  title: string
  subtitle: string
  readingMarkdown: string
  quiz: QuizConfig
  problems: SectionProblem[]
  lightsAt: number      // solved count threshold to light the section
}
