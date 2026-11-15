import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import s from './Landing.module.css'

const COURSES = [
  {
    id:          'csharp-basics',
    title:       'C# Basics',
    lang:        'C#',
    domain:      'Systems',
    level:       'Beginner',
    description: 'Variables, control flow, methods, arrays and collections. The full foundation, drilled to fluency.',
    chapters:    9,
    sections:    47,
    color:       '#c8f135',   // vivid yellow-green
    status:      'available' as const,
  },
  {
    id:          'csharp-classes',
    title:       'C# Classes & Objects',
    lang:        'C#',
    domain:      'Systems',
    level:       'Intermediate',
    description: 'Object-oriented design in C#. Classes, inheritance, interfaces, and patterns.',
    chapters:    8,
    sections:    40,
    color:       '#a78bfa',   // violet
    status:      'soon' as const,
  },
  {
    id:          'java-basics',
    title:       'Java Basics',
    lang:        'Java',
    domain:      'Systems',
    level:       'Beginner',
    description: 'The same spine as C# Basics, in Java. Finishing C# tells you exactly how this will feel.',
    chapters:    9,
    sections:    45,
    color:       '#fbbf24',   // amber
    status:      'soon' as const,
  },
  {
    id:          'python-basics',
    title:       'Python Basics',
    lang:        'Python',
    domain:      'Scripting',
    level:       'Beginner',
    description: 'Variables to functions in Python. Clean, readable, drilled until it sticks.',
    chapters:    9,
    sections:    45,
    color:       '#34d399',   // emerald
    status:      'soon' as const,
  },
]

export default function Landing() {
  const { user } = useAuth()

  return (
    <div className={s.page}>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className={s.hero}>
        <div className={s.heroOverlay} />
        <div className={s.heroContent}>
          <p className={s.heroEyebrow}>khouding</p>
          <h1 className={s.heroSlogan}>
            Learn to code<br />like it&apos;s 2016.
          </h1>
          <p className={s.heroSub}>
            University-standard courses. A built-in editor that grades your work
            the way a professor would. No AI writing it for you.
          </p>
          <div className={s.heroCta}>
            <Link to={user ? '/courses/csharp-basics' : '/auth/register'} className={s.ctaPrimary}>
              {user ? 'Continue learning' : 'Start for free'}
            </Link>
            <Link to="/courses" className={s.ctaSecondary}>
              Browse courses
            </Link>
          </div>
        </div>
      </section>

      {/* ── Three pillars ─────────────────────────────────────────────── */}
      <section className={s.pillars}>
        <div className={s.pillarsInner}>
          <div className={s.pillar}>
            <div className={s.pillarImg}>
              <img src="/images/readingTextbook.jpg" alt="Student reading a programming textbook" />
            </div>
            <h3 className={s.pillarTitle}>A real standard</h3>
            <p className={s.pillarDesc}>
              Textbook-depth content, not video skimming. Finish a course and you actually know it.
            </p>
          </div>

          <div className={s.pillar}>
            <div className={s.pillarImg}>
              <img src="/images/grading.jpg" alt="Exam paper being graded" />
            </div>
            <h3 className={s.pillarTitle}>It grades your code</h3>
            <p className={s.pillarDesc}>
              Hidden tests run your work like a judge. The map only fills in if you can really do it.
            </p>
          </div>

          <div className={s.pillar}>
            <div className={s.pillarImg}>
              <img src="/images/man coding.jpg" alt="Developer coding at a laptop" />
            </div>
            <h3 className={s.pillarTitle}>Your pace</h3>
            <p className={s.pillarDesc}>
              Self-paced, nothing locked. Jump around, come back, pick up where you left off.
            </p>
          </div>
        </div>
      </section>

      {/* ── Courses ───────────────────────────────────────────────────── */}
      <section className={s.courses}>
        <div className={s.coursesInner}>
          <div className={s.coursesHead}>
            <h2 className={s.coursesTitle}>Courses</h2>
            <p className={s.coursesSub}>One idea, drilled to fluency. Pick a language and start.</p>
          </div>

          <div className={s.courseGrid}>
            {COURSES.map(course => (
              course.status === 'available' ? (
                <Link key={course.id} to={`/courses/${course.id}`} className={s.courseCard}>
                  <CourseCover id={course.id} title={course.title} lang={course.lang} color={course.color} />
                  <div className={s.courseCardBody}>
                    <div className={s.courseCardMeta}>
                      <span className={s.courseDomain}>{course.domain}</span>
                      <span className={s.courseLevel}>{course.level}</span>
                    </div>
                    <h3 className={s.courseCardTitle}>{course.title}</h3>
                    <p className={s.courseCardDesc}>{course.description}</p>
                    <div className={s.courseCardFoot}>
                      <span className={s.courseCardStats}>{course.chapters} ch · {course.sections} sec</span>
                      <span className={s.courseCardCta}>Start free →</span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div key={course.id} className={`${s.courseCard} ${s.courseCardSoon}`}>
                  <CourseCover id={course.id} title={course.title} lang={course.lang} color={course.color} muted />
                  <div className={s.courseCardBody}>
                    <div className={s.courseCardMeta}>
                      <span className={s.courseDomain}>{course.domain}</span>
                      <span className={s.courseLevel}>{course.level}</span>
                      <span className={s.soonBadge}>soon</span>
                    </div>
                    <h3 className={s.courseCardTitle}>{course.title}</h3>
                    <p className={s.courseCardDesc}>{course.description}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

// ── Course cover card ─────────────────────────────────────────────────────

function CourseCover({ id, title, lang, color, muted = false }: {
  id: string
  title: string
  lang: string
  color: string
  muted?: boolean
}) {
  return (
    <div className={s.cover} style={{ opacity: muted ? 0.45 : 1 }}>
      <img src={`/images/${id}.svg`} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  )
}
