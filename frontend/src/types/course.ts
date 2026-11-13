// ── Course navigation types ───────────────────────────────────────────────

export type MarkerStatus = 'default' | 'partial' | 'done'

export interface SectionNav {
  id: string            // e.g. "1.3-number-variables"
  number: string        // e.g. "1.3"
  title: string
  isTest: boolean
  lightsAt: number
  totalProblems: number
  solvedProblems: number
  readingDone: boolean
  quizPassed: boolean
}

export interface ChapterNav {
  id: string            // e.g. "1"
  number: string        // e.g. "1"
  title: string
  regionTitle: string   // map region label
  sections: SectionNav[]
  isLocked: boolean
}

export interface CourseNav {
  id: string
  title: string
  progressPct: number
  resumeSection: string   // section id to resume
  resumeLabel: string     // human label e.g. "1.3 Number variables · Problems 8/15"
  chapters: ChapterNav[]
}
