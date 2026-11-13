import { Link } from 'react-router-dom'
import CourseMap from '../../components/CourseMap/CourseMap'
import { CSHARP_BASICS } from '../../data/courseFixture'
import s from './CourseHome.module.css'

export default function CourseHome() {
  const course = CSHARP_BASICS

  return (
    <div className={`${s.page} page-enter`}>
      {/* Course hero header */}
      <div className={s.hero}>
        <p className="eyebrow">Course</p>
        <h1>{course.title}</h1>
        <div className={s.headline}>
          <span>Chapter 1 in progress</span>
          <span>·</span>
          <span>{course.progressPct}%</span>
          <span>·</span>
          <Link to={`/courses/${course.id}/sections/${course.resumeSection}`} className={s.resumeLink}>
            resume 1.3 →
          </Link>
        </div>
      </div>

      {/* Map view — sidebar holds Contents nav, main area holds the province map */}
      <CourseMap
        chapters={course.chapters}
        onChapterClick={chapterId => {
          // Future: scroll ContentsNav to this chapter
          console.log('chapter clicked', chapterId)
        }}
      />
    </div>
  )
}
