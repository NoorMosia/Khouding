import { lazy, Suspense, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Stage } from '../../types/section'
import QuizStage from './QuizStage'
import ProblemsStage from './ProblemsStage'
import { SECTION_1_3 } from './fixture'
import s from './SectionView.module.css'

// Lazy-load react-markdown — only used in Reading stage
const ReactMarkdown = lazy(() => import('react-markdown'))

// Fixture: use the real 1.3 data regardless of URL params for now.
// Replace with an API fetch keyed on sectionId once the backend serves content.
function useSection() {
  return SECTION_1_3
}

type StageState = 'default' | 'done' | 'active'

export default function SectionView() {
  const { courseId, sectionId } = useParams()
  const section = useSection()

  const [stage, setStage]           = useState<Stage>('reading')
  const [readingDone, setReadingDone] = useState(false)
  const [quizDone, setQuizDone]     = useState(false)
  const [quizPassed, setQuizPassed] = useState(false)

  function goTo(next: Stage) {
    if (next === 'quiz' && !readingDone) setReadingDone(true)
    setStage(next)
  }

  function handleQuizFinish(passed: boolean) {
    setQuizDone(true)
    setQuizPassed(passed)
    if (passed) setStage('problems')
  }

  function stageState(target: Stage): StageState {
    if (stage === target) return 'active'
    if (target === 'reading' && readingDone) return 'done'
    if (target === 'quiz' && quizDone && quizPassed) return 'done'
    return 'default'
  }

  const stageLabels: Record<Stage, string> = {
    reading: 'Concept, one analogy, a worked example.',
    quiz: 'Comprehension checkpoint before you drill.',
    problems: 'Fifteen reps. Wax on, wax off.',
  }

  return (
    <div className={`${s.page} page-enter`}>
      {/* ── Section header ─────────────────────────────────────────── */}
      <div className={s.shead}>
        <p className="eyebrow">Section {section.number}</p>
        <h1 className={s.title}>{section.title}</h1>
        <p className={s.subtitle}>{stageLabels[stage]}</p>

        {/* Stage switcher */}
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

      {/* ── Stage body ─────────────────────────────────────────────── */}
      <div className={s.body}>

        {stage === 'reading' && (
          <div className={`${s.pane} ${s.reading}`} role="tabpanel">
            <Suspense fallback={<span style={{ color: 'var(--text-faint)', fontSize: 13 }}>loading…</span>}>
              <ReactMarkdown>{section.readingMarkdown}</ReactMarkdown>
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
              key={`quiz-${quizDone}`} // remount on retry
              config={section.quiz}
              onFinish={handleQuizFinish}
            />
          </div>
        )}

        {stage === 'problems' && (
          <div className={s.pane} role="tabpanel">
            <ProblemsStage
              courseId={courseId ?? section.courseId}
              sectionId={sectionId ?? section.id}
              problems={section.problems}
              lightsAt={section.lightsAt}
            />
          </div>
        )}

      </div>
    </div>
  )
}
