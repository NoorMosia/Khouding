import { lazy, Suspense, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import rehypeHighlight from 'rehype-highlight'
import CodeBlock from '../../components/CodeBlock/CodeBlock'
import type { Stage, SectionData } from '../../types/section'
import QuizStage from './QuizStage'
import ProblemsStage from './ProblemsStage'
import { useFetch, sectionUrl, progress as progressApi, NotFoundError } from '../../api/client'
import type { CourseProgress } from '../../api/client'
import { apiSectionToData } from '../../api/mappers'
import type { ApiSection } from '../../api/types'
import { useAuth } from '../../context/AuthContext'
import s from './SectionView.module.css'

const ReactMarkdown = lazy(() => import('react-markdown'))

// Stable references — defined outside components to avoid recreating on every render
const rehypePlugins = [rehypeHighlight] as const
const mdComponents = { pre: CodeBlock } as const

export default function SectionView() {
  const { courseId, sectionId } = useParams<{ courseId: string; sectionId: string }>()
  const { user } = useAuth()

  const { data: raw, loading, error } = useFetch<ApiSection>(
    sectionUrl(courseId, sectionId)
  )

  const [courseProgress, setCourseProgress] = useState<CourseProgress | null>(null)

  useEffect(() => {
    if (!user || !courseId) { setCourseProgress(null); return }
    progressApi.get(courseId)
      .then(p => setCourseProgress(p))
      .catch(err => { if (!(err instanceof NotFoundError)) setCourseProgress(null) })
  }, [user, courseId])

  const section: SectionData | null = raw && courseId
    ? apiSectionToData(
        raw,
        courseId,
        courseProgress && sectionId
          ? new Set(courseProgress.sections[sectionId]?.solvedProblemIds ?? [])
          : undefined,
      )
    : null

  if (loading) return <Loading />
  if (error || !section) return <Error />

  const secProgress = courseProgress?.sections[sectionId ?? '']

  return <SectionContent
    section={section}
    courseId={courseId!}
    sectionId={sectionId!}
    initialReadingDone={secProgress?.readingDone ?? false}
    initialQuizPassed={secProgress?.quizPassed ?? false}
  />
}

// ── SectionContent (only renders when section data is ready) ──────────────

function SectionContent({
  section,
  courseId,
  sectionId,
  initialReadingDone,
  initialQuizPassed,
}: {
  section: SectionData
  courseId: string
  sectionId: string
  initialReadingDone: boolean
  initialQuizPassed: boolean
}) {
  const { user } = useAuth()

  const initialStage: Stage = initialQuizPassed ? 'problems' : initialReadingDone ? 'quiz' : 'reading'

  const [stage, setStage]             = useState<Stage>(initialStage)
  const [readingDone, setReadingDone] = useState(initialReadingDone)
  const [quizDone, setQuizDone]       = useState(initialQuizPassed)
  const [quizPassed, setQuizPassed]   = useState(initialQuizPassed)

  function goTo(next: Stage) {
    if (next === 'quiz' && !readingDone) {
      setReadingDone(true)
      if (user) progressApi.markReadingDone(courseId, sectionId).catch(() => {})
    }
    setStage(next)
  }

  function handleQuizFinish(passed: boolean) {
    setQuizDone(true)
    setQuizPassed(passed)
    if (passed) {
      if (user) progressApi.markQuizPassed(courseId, sectionId).catch(() => {})
      setStage('problems')
    }
  }

  type StageStatus = 'default' | 'done' | 'active'
  function stageState(target: Stage): StageStatus {
    if (stage === target) return 'active'
    if (target === 'reading' && readingDone) return 'done'
    if (target === 'quiz' && quizDone && quizPassed) return 'done'
    return 'default'
  }

  const stageLabels: Record<Stage, string> = {
    reading:  'Concept, one analogy, a worked example.',
    quiz:     'Comprehension checkpoint before you drill.',
    problems: 'Fifteen reps. Wax on, wax off.',
  }

  return (
    <div className={`${s.page} page-enter`}>
      <div className={s.shead}>
        <p className="eyebrow">
          <Link to={`/courses/${courseId}`} style={{ color: 'var(--text-faint)', textDecoration: 'none', fontSize: 12 }}>
            ← map
          </Link>
          {' · '}Section {section.number}
        </p>
        <h1 className={s.title}>{section.title}</h1>
        <p className={s.subtitle}>
          {stage === 'reading' ? section.subtitle : stageLabels[stage]}
        </p>

        <div className={s.stages} role="tablist">
          {(['reading', 'quiz', 'problems'] as Stage[]).map((id, i) => {
            const state = stageState(id)
            return (
              <button
                key={id}
                className={`${s.stageBtn} ${state === 'active' ? s.active : ''} ${state === 'done' ? s.done : ''}`}
                onClick={() => goTo(id)}
                role="tab"
                aria-selected={stage === id}
              >
                <span className={s.stageBadge}>
                  {state === 'done' ? '✓' : i + 1}
                </span>
                {id.charAt(0).toUpperCase() + id.slice(1)}
                {id === 'quiz' && (
                  <span className={s.stageMeta}>
                    {quizDone ? (quizPassed ? 'passed' : 'failed') : `need ${section.quiz.pass}`}
                  </span>
                )}
                {id === 'problems' && (
                  <span className={s.stageMeta}>
                    {section.problems.filter(p => p.status === 'solved').length}/{section.problems.length}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      <div className={s.body}>
        {stage === 'reading' && (
          <div className={`${s.pane} ${s.reading}`} role="tabpanel">
            <Suspense fallback={<span style={{ color: 'var(--text-faint)', fontSize: 13 }}>loading…</span>}>
              <ReactMarkdown rehypePlugins={rehypePlugins} components={mdComponents}>{section.readingMarkdown}</ReactMarkdown>
            </Suspense>
            <div className={s.readingFoot}>
              <button className="btn btn--primary" onClick={() => goTo('quiz')}>
                Got it → Quiz
              </button>
              <span className={s.nudge}>
                or{' '}
                <button className={s.nudgeLink} onClick={() => goTo('problems')}>
                  jump to the problems
                </button>
                , your call
              </span>
            </div>
          </div>
        )}

        {stage === 'quiz' && (
          <div className={s.pane} role="tabpanel">
            <QuizStage
              key={`quiz-${quizDone}`}
              config={section.quiz}
              onFinish={handleQuizFinish}
            />
          </div>
        )}

        {stage === 'problems' && (
          <div className={s.pane} role="tabpanel">
            <ProblemsStage
              courseId={courseId}
              sectionId={sectionId}
              problems={section.problems}
              lightsAt={section.lightsAt}
            />
          </div>
        )}
      </div>
    </div>
  )
}

function Loading() {
  return (
    <div style={{ flex: 1, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' }}>
      loading section…
    </div>
  )
}

function Error() {
  return (
    <div style={{ flex: 1, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' }}>
      section not found
    </div>
  )
}
