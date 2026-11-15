import { Link } from 'react-router-dom'
import { useFetch, progress as progressApi } from '../../api/client'
import { useAuth } from '../../context/AuthContext'
import { useEffect, useState } from 'react'
import type { ApiCourseSummary } from '../../api/types'
import s from './Catalog.module.css'

const COURSE_META: Record<string, {
  lang: string; domain: string; level: string; color: string;
  description: string
}> = {
  'csharp-basics': {
    lang: 'C#', domain: 'Systems', level: 'Beginner', color: '#c8f135',
    description: 'Variables, control flow, methods, arrays and collections. The full foundation.',
  },
  'csharp-classes': {
    lang: 'C#', domain: 'Systems', level: 'Intermediate', color: '#a78bfa',
    description: 'Object-oriented design in C#. Classes, inheritance, interfaces, and patterns.',
  },
  'java-basics': {
    lang: 'Java', domain: 'Systems', level: 'Beginner', color: '#fbbf24',
    description: 'The same spine as C# Basics, in Java.',
  },
  'python-basics': {
    lang: 'Python', domain: 'Scripting', level: 'Beginner', color: '#34d399',
    description: 'Variables to functions in Python. Clean, readable, drilled until it sticks.',
  },
}

type Filter = 'All' | 'Systems' | 'Scripting' | 'Web' | 'Beginner' | 'Intermediate'

export default function Catalog() {
  const { user } = useAuth()
  const { data: courses, loading } = useFetch<ApiCourseSummary[]>('/api/courses')
  const [filter, setFilter] = useState<Filter>('All')
  const [progressMap, setProgressMap] = useState<Record<string, number>>({})

  // Fetch progress pct for each available course when logged in
  useEffect(() => {
    if (!user || !courses) return
    courses.filter(c => c.status === 'published').forEach(c => {
      progressApi.get(c.id)
        .then(p => {
          const sections = Object.values(p.sections)
          if (sections.length === 0) return
          const solved = sections.reduce((sum, s) => sum + s.solvedProblems, 0)
          const total  = sections.reduce((sum, s) => sum + s.solvedProblems, 0) // placeholder
          setProgressMap(prev => ({ ...prev, [c.id]: Math.min(100, Math.round((solved / Math.max(total, 1)) * 100)) }))
        })
        .catch(() => {})
    })
  }, [user, courses]) // eslint-disable-line react-hooks/exhaustive-deps

  const filters: Filter[] = ['All', 'Systems', 'Scripting', 'Web', 'Beginner', 'Intermediate']

  const activeCourses = courses?.filter(c => {
    const meta = COURSE_META[c.id]
    if (!meta) return true
    if (filter === 'All') return true
    return meta.domain === filter || meta.level === filter
  }) ?? []

  const myCourses   = activeCourses.filter(c => c.status === 'published' && user && (progressMap[c.id] ?? 0) > 0)
  const allCourses  = activeCourses

  return (
    <div className={s.page}>
      <div className={s.inner}>

        {/* Header */}
        <div className={s.header}>
          <h1 className={s.heading}>Courses</h1>
          <p className={s.lead}>One idea, drilled to fluency. Pick a language and start.</p>
        </div>

        {/* Filters */}
        <div className={s.filters} role="group" aria-label="Filter courses">
          {filters.map(f => (
            <button
              key={f}
              className={`${s.filterBtn} ${filter === f ? s.active : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {loading && (
          <div className={s.loading}>loading…</div>
        )}

        {/* My courses — only shown when logged in and has progress */}
        {user && myCourses.length > 0 && (
          <div className={s.section}>
            <h2 className={s.sectionTitle}>Continue learning</h2>
            <div className={s.grid}>
              {myCourses.map(c => (
                <CourseCard key={c.id} course={c} pct={progressMap[c.id] ?? 0} />
              ))}
            </div>
          </div>
        )}

        {/* All courses */}
        <div className={s.section}>
          {user && myCourses.length > 0 && (
            <h2 className={s.sectionTitle}>All courses</h2>
          )}
          <div className={s.grid}>
            {allCourses.map(c => (
              <CourseCard key={c.id} course={c} pct={progressMap[c.id] ?? 0} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

function CourseCard({ course, pct }: { course: ApiCourseSummary; pct: number }) {
  const meta      = COURSE_META[course.id]
  const available = course.status === 'published'
  const color     = meta?.color ?? '#6c47d9'
  const lang      = meta?.lang ?? course.id
  const domain    = meta?.domain ?? ''
  const level     = meta?.level ?? ''
  const desc      = meta?.description ?? ''

  const inner = (
    <>
      {/* Cover */}
      <div className={s.cover} style={{ opacity: available ? 1 : 0.45 }}>
        <img src={`/images/${course.id}.svg`} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {pct > 0 && (
          <div className={s.coverBar}>
            <div className={s.coverBarFill} style={{ width: `${pct}%` }} />
          </div>
        )}
      </div>

      {/* Body */}
      <div className={s.cardBody}>
        <div className={s.cardMeta}>
          {domain && <span className={s.domainBadge}>{domain}</span>}
          {level  && <span className={s.levelLabel}>{level}</span>}
          {!available && <span className={s.soonBadge}>soon</span>}
        </div>
        <h3 className={s.cardTitle}>{course.title}</h3>
        {desc && <p className={s.cardDesc}>{desc}</p>}
        {available && (
          <div className={s.cardFoot}>
            <span className={s.cardStats}>{course.chapterCount} ch · {course.sectionCount} sec</span>
            <span className={s.cardCta}>{pct > 0 ? 'Continue →' : 'Start free →'}</span>
          </div>
        )}
      </div>
    </>
  )

  if (available) {
    return <Link to={`/courses/${course.id}`} className={s.card}>{inner}</Link>
  }
  return <div className={`${s.card} ${s.cardMuted}`}>{inner}</div>
}
