import { Link } from 'react-router-dom'
import CourseMap from '../../components/CourseMap/CourseMap'
import { useCourseContext } from '../../components/AppLayout/AppLayout'
import s from './CourseHome.module.css'

export default function CourseHome() {
  const { course, loading, error } = useCourseContext()

  if (loading) return <div className={s.page}><Placeholder text="loading course…" /></div>
  if (error || !course) return <div className={s.page}><Placeholder text="course not found" /></div>

  return (
    <div className={`${s.page} page-enter`}>
      <div className={s.hero}>
        <p className="eyebrow">Course</p>
        <h1>{course.title}</h1>
        <div className={s.headline}>
          <span>{course.progressPct}% complete</span>
          <span>·</span>
          <Link
            to={`/courses/${course.id}/sections/${course.resumeSection}`}
            className={s.resumeLink}
          >
            {course.resumeLabel} →
          </Link>
        </div>
      </div>

      <CourseMap
        chapters={course.chapters}
        onChapterClick={chapterId => {
          console.log('chapter clicked', chapterId)
        }}
      />
    </div>
  )
}

function Placeholder({ text }: { text: string }) {
  return (
    <div style={{ display: 'grid', placeItems: 'center', flex: 1, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' }}>
      {text}
    </div>
  )
}
