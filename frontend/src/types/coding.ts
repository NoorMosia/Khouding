// ── Coding screen domain types ────────────────────────────────────────────

export type ProblemState = 'unsolved' | 'attempted' | 'solved' | 'current'

export interface ProblemMeta {
  id: string
  title: string
  difficulty: 1 | 2 | 3
  statement: string
  inputSpec: string
  outputSpec: string
  starterCode: string
  /** section slug this problem belongs to */
  sectionId: string
  /** 1-based position in the section */
  position: number
  totalInSection: number
}

export interface CodeFile {
  path: string
  contents: string
}

// ── Submission types (mirrors the execution contract) ─────────────────────

export type SubmissionStatus =
  | 'idle'
  | 'pending'      // sent to backend, waiting for ID
  | 'running'      // backend is polling judge
  | 'passed'
  | 'failed'
  | 'compile_error'
  | 'timeout'
  | 'error'

export interface SubmissionResult {
  id: string
  status: SubmissionStatus
  /** For a Run: the raw stdout */
  stdout?: string
  stderr?: string
  /** For a Submit: per-test breakdown */
  testResults?: TestCaseResult[]
  /** First failing case, if any */
  failingCase?: FailingCase
  /** e.g. "3 of 5 passed" */
  summary?: string
  timeMs?: number
}

export interface TestCaseResult {
  index: number
  passed: boolean
  timeMs: number
}

export interface FailingCase {
  input: string
  expected: string
  actual: string
  caseIndex: number
}
