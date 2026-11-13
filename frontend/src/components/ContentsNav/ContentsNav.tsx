import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { CourseNav, SectionNav } from '../../types/course'
import s from './ContentsNav.module.css'

interface ContentsNavProps {
  course: CourseNav
}

export default function ContentsNav({ course }: ContentsNavProps) {
  const location = useLocation()

  // Which chapters are open — default: open the chapter containing the resume section
  const resumeChapterId = course.chapters.find(ch =>
    ch.sections.some(sec => sec.id === course.resumeSection)
  )?.id ?? course.chapters[0]?.id

  const [openChapters, setOpenChapters] = useState<Set<string>>(
    new Set([resumeChapterId])
  )

  function toggleChapter(id: string) {
    setOpenChapters(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  // Derive active section from URL path
  // URL shape: /courses/:courseId/sections/:sectionId
  const pathParts = location.pathname.split('/')
  const activeSectionId = pathParts[4] ?? null // index after /courses/csharp-basics/sections/

  return (
    <>
      {/* ── Resume bar ─────────────────────────────────────────────── */}
      <div className={s.resume}>
        <span className={s.resumeLabel}>resume</span>
        <span className={s.resumeWhat}>{course.resumeLabel}</span>
        <Link
          to={`/courses/${course.id}/sections/${course.resumeSection}`}
          className={s.resumeBtn}
          aria-label={`Continue ${course.resumeLabel}`}
        >
          →
        </Link>
      </div>

      {/* ── Chapter accordion ──────────────────────────────────────── */}
      <div className={s.toc}>
        {course.chapters.map(chapter => {
          const isOpen   = openChapters.has(chapter.id)
          const litCount = chapter.sections.filter(
            sec => !sec.isTest && sec.solvedProblems >= sec.lightsAt
          ).length
          const totalNonTest = chapter.sections.filter(s => !s.isTest).length
          const chapterLit = litCount === totalNonTest && totalNonTest > 0

          const solvedSections = chapter.sections.filter(
            sec => !sec.isTest && sec.solvedProblems >= sec.lightsAt
          ).length

          return (
            <div
              key={chapter.id}
              className={`${s.chapter} ${isOpen ? s.open : ''} ${chapter.isLocked ? s.locked : ''}`}
            >
              <button
                className={s.chHead}
                onClick={() => !chapter.isLocked && toggleChapter(chapter.id)}
                aria-expanded={isOpen}
                aria-label={`Chapter ${chapter.number}: ${chapter.title}`}
              >
                <span className={`${s.regionBadge} ${chapterLit ? s.lit : ''}`}>
                  {chapter.number}
                </span>

                <div className={s.chMeta}>
                  <div className={s.chLabel}>
                    Ch.{chapter.number} · {chapter.regionTitle}
                  </div>
                  <div className={s.chTitle}>{chapter.title}</div>
                </div>

                <span className={s.chProg}>
                  {chapter.isLocked
                    ? 'soon'
                    : `${solvedSections}/${totalNonTest}`}
                </span>

                <span className={s.chCaret} aria-hidden="true">▶</span>
              </button>

              <div className={s.sectionsWrap}>
                <div className={s.sectionsInner}>
                  {chapter.sections.map(sec => (
                    <SectionRow
                      key={sec.id}
                      section={sec}
                      courseId={course.id}
                      isActive={activeSectionId === sec.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

// ── Section row ───────────────────────────────────────────────────────────

interface SectionRowProps {
  section: SectionNav
  courseId: string
  isActive: boolean
}

function SectionRow({ section, courseId, isActive }: SectionRowProps) {
  const isLit = !section.isTest && section.solvedProblems >= section.lightsAt

  const url = `/courses/${courseId}/sections/${section.id}`

  return (
    <Link
      to={url}
      className={`${s.sRow} ${isActive ? s.active : ''} ${section.isTest ? s.isTest : ''}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {/* Lit dot */}
      <span className={`${s.litDot} ${isLit ? s.on : ''}`} aria-hidden="true" />

      {/* Section name */}
      <span className={s.sName}>
        <span className={s.sNum}>{section.number}</span>
        {section.isTest ? <strong>{section.title}</strong> : section.title}
      </span>


    </Link>
  )
}


