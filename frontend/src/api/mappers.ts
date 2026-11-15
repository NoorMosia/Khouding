// ── API → frontend domain type mappers ───────────────────────────────────
// Convert raw API shapes to the types consumed by components.

import type { ApiCourse, ApiSection } from './types'
import type { SectionProgress } from './client'
import type { CourseNav, ChapterNav, SectionNav } from '../types/course'
import type { SectionData, QuizConfig, SectionProblem } from '../types/section'

// ── Course manifest → CourseNav ───────────────────────────────────────────

export function apiCourseToNav(
  course: ApiCourse,
  sectionProgress?: Record<string, SectionProgress>,
): CourseNav {
  const chapters: ChapterNav[] = course.chapters.map(ch => {
    const sections: SectionNav[] = ch.sections.map(sec => {
      const slug = slugOf(sec.id)
      const isTest = slug.includes('.T') || slug.includes('.E')
      const prog = sectionProgress?.[slug]
      return {
        id:             slug,
        number:         sec.number,
        title:          sec.title,
        isTest,
        lightsAt:       sec.lightsAt,
        totalProblems:  0,   // populated later when section is fetched
        solvedProblems: prog?.solvedProblems ?? 0,
        readingDone:    prog?.readingDone    ?? false,
        quizPassed:     prog?.quizPassed     ?? false,
      }
    })

    // Include the chapter test as a section row if present
    if (ch.test) {
      const testSlug = slugOf(ch.test.id)
      const testProg = sectionProgress?.[testSlug]
      sections.push({
        id:             testSlug,
        number:         `${ch.number}.T`,
        title:          ch.test.title,
        isTest:         true,
        lightsAt:       ch.test.lightAt,
        totalProblems:  ch.test.draw,
        solvedProblems: testProg?.solvedProblems ?? 0,
        readingDone:    testProg?.readingDone    ?? false,
        quizPassed:     testProg?.quizPassed     ?? false,
      })
    }

    return {
      id:          String(ch.number),
      number:      String(ch.number),
      title:       ch.title,
      regionTitle: ch.regionTitle,
      province:    ch.province,
      city:        ch.city,
      fact:        ch.fact,
      sections,
      isLocked:    false,
    }
  })

  // Compute overall progress: solved problems across all sections vs lightsAt sum
  const allSections = chapters.flatMap(ch => ch.sections.filter(s => !s.isTest))
  const totalLightsAt = allSections.reduce((sum, s) => sum + s.lightsAt, 0)
  const totalSolved   = allSections.reduce((sum, s) => sum + Math.min(s.solvedProblems, s.lightsAt), 0)
  const progressPct   = totalLightsAt > 0
    ? Math.round((totalSolved / totalLightsAt) * 100)
    : 0

  // Find first section with zero progress as "resume" candidate
  const firstUnfinished = allSections.find(s => s.solvedProblems < s.lightsAt)

  const resumeSection = firstUnfinished?.id ?? (chapters[0]?.sections[0]?.id ?? '')
  const resumeLabel   = firstUnfinished
    ? `${firstUnfinished.number} ${firstUnfinished.title} · ${firstUnfinished.solvedProblems}/${firstUnfinished.lightsAt}`
    : course.title

  return {
    id:            course.id,
    title:         course.title,
    progressPct,
    resumeSection,
    resumeLabel,
    chapters,
  }
}

// ── Section manifest → SectionData ───────────────────────────────────────

export function apiSectionToData(
  section: ApiSection,
  courseId: string,
  solvedProblemIds?: Set<string>,
): SectionData {
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
      status:     solvedProblemIds?.has(pSlug) ? 'solved' : 'unsolved',
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
