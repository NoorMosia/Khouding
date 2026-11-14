import { Link } from 'react-router-dom'
import { useFetch } from '../../api/client'
import type { ApiCourseSummary } from '../../api/types'
import s from './Catalog.module.css'

// Language badge label per course ID — extend as more courses ship
const LANG_LABEL: Record<string, string> = {
  'csharp-basics': 'C#',
  'java-basics':   'Java',
  'python-basics': 'Python',
}

export default function Catalog() {
  const { data: courses, loading, error } = useFetch<ApiCourseSummary[]>('/api/courses')

  return (
    <div className={`${s.page} page-enter`}>
      <p className="eyebrow">My courses</p>
      <h1 className={s.heading}>Keep going</h1>
      <p className={s.lead}>Self-paced. Nothing locked. Pick up where you left off.</p>

      {loading && (
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)', padding: '12px 0' }}>
          loading…
        </div>
      )}

      {error && (
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--danger)', padding: '12px 0' }}>
          could not load courses
        </div>
      )}

      {courses?.map(course => {
        const lang = LANG_LABEL[course.id] ?? course.id
        const isAvailable = course.status === 'published'

        if (isAvailable) {
          return (
            <Link key={course.id} to={`/courses/${course.id}`} className={s.card}>
              <div className={s.cardTop}>
                <h3>{course.title}</h3>
                <span className={s.langBadge}>{lang}</span>
                <span className={s.continueArrow}>Open →</span>
              </div>
              <p>
                {course.chapterCount} chapters · {course.sectionCount} sections
              </p>
              <div className={s.progressRow}>
                <div
                  className={s.meter}
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="0% complete"
                >
                  <span className={s.meterFill} style={{ width: '0%' }} />
                </div>
                <span className={s.pct}>not started</span>
              </div>
            </Link>
          )
        }

        return (
          <div key={course.id} className={`${s.card} ${s.locked}`} aria-hidden="true">
            <div className={s.cardTop}>
              <h3>{course.title}</h3>
              <span className={s.lockedBadge}>soon</span>
            </div>
            <p>{course.chapterCount} chapters · {course.sectionCount} sections</p>
          </div>
        )
      })}
    </div>
  )
}
