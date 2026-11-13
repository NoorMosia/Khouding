import { Link } from 'react-router-dom'
import s from './Landing.module.css'

const COURSES = [
  {
    id: 'csharp-basics',
    title: 'C# Basics',
    lang: 'C#',
    description: 'Variables, control flow, methods, arrays and collections. The full foundation, drilled to fluency.',
    chapters: 9,
    sections: 45,
    status: 'available' as const,
  },
  {
    id: 'java-basics',
    title: 'Java Basics',
    lang: 'Java',
    description: 'The same spine, in Java. Finishing C# tells you exactly how this will feel.',
    chapters: 9,
    sections: 45,
    status: 'soon' as const,
  },
  {
    id: 'python-basics',
    title: 'Python Basics',
    lang: 'Python',
    description: 'Variables to functions, in Python. Clean, readable, drilled until it sticks.',
    chapters: 9,
    sections: 45,
    status: 'soon' as const,
  },
]

export default function Landing() {
  return (
    <div className={`${s.page} page-enter`}>
      <section className={s.hero}>
        <p className="eyebrow">khouding</p>
        <h1 className={s.slogan}>Learn to code like it&apos;s 2016.</h1>
        <p className={s.sub}>
          University-standard courses with a built-in editor that grades your work
          the way a professor would. No AI writing it for you. You actually learn the craft.
        </p>
        <div className={s.cta}>
          <Link to="/courses" className="btn btn--primary">Start C# Basics</Link>
          <Link to="/courses" className="btn">Browse courses</Link>
        </div>
      </section>

      <section className={s.thesis} aria-label="Why khouding">
        <div className={s.card}>
          <h4>A real standard</h4>
          <p>Textbook-depth content, not video skimming. Finish a course and you actually know it.</p>
        </div>
        <div className={s.card}>
          <h4>It grades your code</h4>
          <p>Hidden tests run your work like a judge. The map only fills if you can really do it.</p>
        </div>
        <div className={s.card}>
          <h4>Your pace</h4>
          <p>Self-paced, nothing locked. Jump around, come back, pick up where you left off.</p>
        </div>
      </section>

      {/* Course catalog section */}
      <section className={s.coursesSection} aria-label="Courses">
        <div className={s.coursesSectionHead}>
          <h2 className={s.sectionTitle}>Courses</h2>
          <p className={s.sectionSub}>One idea, drilled to fluency. Pick a language and start.</p>
        </div>
        <div className={s.courseGrid}>
          {COURSES.map(course => (
            course.status === 'available' ? (
              <Link key={course.id} to={`/courses/${course.id}`} className={s.courseCard}>
                <div className={s.courseCardTop}>
                  <span className={s.courseLangBadge}>{course.lang}</span>
                </div>
                <h3 className={s.courseCardTitle}>{course.title}</h3>
                <p className={s.courseCardDesc}>{course.description}</p>
                <div className={s.courseCardMeta}>
                  <span>{course.chapters} chapters</span>
                  <span>·</span>
                  <span>{course.sections} sections</span>
                  <span className={s.courseCardCta}>Start free →</span>
                </div>
              </Link>
            ) : (
              <div key={course.id} className={`${s.courseCard} ${s.courseCardSoon}`} aria-hidden="true">
                <div className={s.courseCardTop}>
                  <span className={s.courseLangBadgeSoon}>{course.lang}</span>
                  <span className={s.soonBadge}>soon</span>
                </div>
                <h3 className={s.courseCardTitle}>{course.title}</h3>
                <p className={s.courseCardDesc}>{course.description}</p>
              </div>
            )
          ))}
        </div>
      </section>
    </div>
  )
}
