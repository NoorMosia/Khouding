// ── API → frontend domain type mappers ───────────────────────────────────
// Convert raw API shapes to the types consumed by components.
// Progress fields (solvedProblems, readingDone, quizPassed) default to zero /
// false until a user-progress API exists.

import type { ApiCourse, ApiSection } from './types'
import type { CourseNav, ChapterNav, SectionNav } from '../types/course'
import type { SectionData, QuizConfig, SectionProblem } from '../types/section'

// ── Course manifest → CourseNav ───────────────────────────────────────────

export function apiCourseToNav(course: ApiCourse): CourseNav {
  const chapters: ChapterNav[] = course.chapters.map(ch => {
    const sections: SectionNav[] = ch.sections.map(sec => {
      const slug = slugOf(sec.id)
      const isTest = slug.includes('.T') || slug.includes('.E')
      return {
        id:             slug,
        number:         sec.number,
        title:          sec.title,
        isTest,
        lightsAt:       sec.lightsAt,
        totalProblems:  0,   // populated later when section is fetched
        solvedProblems: 0,   // user progress — not yet served by backend
        readingDone:    false,
        quizPassed:     false,
      }
    })

    // Include the chapter test as a section row if present
    if (ch.test) {
      const testSlug = slugOf(ch.test.id)
      sections.push({
        id:             testSlug,
        number:         `${ch.number}.T`,
        title:          ch.test.title,
        isTest:         true,
        lightsAt:       ch.test.lightAt,
        totalProblems:  ch.test.draw,
        solvedProblems: 0,
        readingDone:    false,
        quizPassed:     false,
      })
    }

    return {
      id:          String(ch.number),
      number:      String(ch.number),
      title:       ch.title,
      regionTitle: ch.regionTitle,
      sections,
      isLocked:    false,
    }
  })

  // Find first section with zero progress as "resume" candidate
  const firstUnfinished = chapters
    .flatMap(ch => ch.sections.filter(s => !s.isTest))
    .find(s => s.solvedProblems < s.lightsAt)

  const resumeSection = firstUnfinished?.id ?? (chapters[0]?.sections[0]?.id ?? '')
  const resumeLabel   = firstUnfinished
    ? `${firstUnfinished.number} ${firstUnfinished.title}`
    : course.title

  return {
    id:            course.id,
    title:         course.title,
    progressPct:   0,       // computed from progress data once available
    resumeSection,
    resumeLabel,
    chapters,
  }
}

// ── Section manifest → SectionData ───────────────────────────────────────

export function apiSectionToData(section: ApiSection, courseId: string): SectionData {
  const slug = slugOf(section.id)

  const quiz: QuizConfig = {
    pass:      section.quiz.pass,
    total:     section.quiz.questions.length,
    questions: section.quiz.questions.map(q => ({
      id:        q.id,
      type:      q.type,
      prompt:    q.prompt,
      options:   q.options,
      answer:    q.answer,
      accept:    q.accept,
      rationale: q.rationale,
    })),
  }

  const problems: SectionProblem[] = section.problems.map((p, i) => {
    const pSlug = slugOf(p.id)
    return {
      id:         pSlug,
      slug:       shortSlug(pSlug),
      title:      p.title,
      difficulty: clampDifficulty(p.difficulty),
      status:     'unsolved',   // user progress — not yet from backend
    }
  })

  // Extract chapter id from section number e.g. "1.3" → "1"
  const chapterId = section.number.split('.')[0] ?? '1'

  return {
    id:              slug,
    courseId,
    chapterId,
    number:          section.number,
    title:           section.title,
    subtitle:        section.subtitle,
    readingMarkdown: section.readingMarkdown,
    quiz,
    problems,
    lightsAt:        section.lightsAt,
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────

/** "csharp-basics/1.3-number-variables" → "1.3-number-variables" */
function slugOf(fullId: string): string {
  const parts = fullId.split('/')
  return parts[parts.length - 1] ?? fullId
}

/** "p07-sum-two-ints" → "p07" */
function shortSlug(slug: string): string {
  const dash = slug.indexOf('-')
  return dash > 0 ? slug.slice(0, dash) : slug
}

function clampDifficulty(n: number): 1 | 2 | 3 {
  if (n <= 1) return 1
  if (n >= 3) return 3
  return 2
}
