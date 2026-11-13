import { useRef, useState } from 'react'
import type { QuizConfig, QuizQuestion } from '../../types/section'
import s from './SectionView.module.css'

interface QuizStageProps {
  config: QuizConfig
  onFinish: (passed: boolean) => void
}

type AnswerState = 'unanswered' | 'correct' | 'wrong'

export default function QuizStage({ config, onFinish }: QuizStageProps) {
  const { questions, pass, total } = config
  const [qi, setQi]               = useState(0)
  const [correct, setCorrect]     = useState(0)
  const [answerState, setAnswerState] = useState<AnswerState>('unanswered')
  const [chosenId, setChosenId]   = useState<string | null>(null)
  const [fillValue, setFillValue] = useState('')
  const [done, setDone]           = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const q: QuizQuestion = questions[qi]
  const isLast = qi === questions.length - 1

  function checkAnswer(given: string) {
    const normalise = (v: string) => v.trim().toLowerCase()
    let isCorrect = false

    if (q.type === 'fillblank') {
      isCorrect = (q.accept ?? [q.answer]).some(a => normalise(a) === normalise(given))
    } else {
      isCorrect = normalise(given) === normalise(q.answer)
    }

    setAnswerState(isCorrect ? 'correct' : 'wrong')
    setChosenId(given)
    if (isCorrect) setCorrect(c => c + 1)
  }

  function handleNext() {
    if (isLast) {
      const finalCorrect = answerState === 'correct' ? correct : correct
      setDone(true)
      onFinish(finalCorrect >= pass)
      return
    }
    setQi(i => i + 1)
    setAnswerState('unanswered')
    setChosenId(null)
    setFillValue('')
  }

  if (done) {
    const passed = correct >= pass
    return (
      <div className={s.quiz}>
        <div className={`${s.quizResult} ${passed ? s.passed : s.failed}`}>
          <div className={s.quizResultTitle}>
            {passed ? `✓ Passed — ${correct} of ${total} correct` : `✗ Not quite — ${correct} of ${total} correct`}
          </div>
          <div className={s.quizResultSub}>
            {passed
              ? 'Comprehension gate cleared. On to the problems.'
              : `Need ${pass} to pass. Have another go — the questions may come in a different order.`}
          </div>
        </div>
        <div className={s.quizFoot} style={{ marginTop: 18 }}>
          {passed
            ? <button className="btn btn--primary" onClick={() => onFinish(true)}>Problems →</button>
            : <button className="btn btn--primary" onClick={() => { setQi(0); setCorrect(0); setAnswerState('unanswered'); setChosenId(null); setFillValue(''); setDone(false) }}>Try again</button>
          }
        </div>
      </div>
    )
  }

  const answered = answerState !== 'unanswered'

  return (
    <div className={s.quiz} key={q.id}>
      {/* Progress */}
      <div className={s.quizProgress}>
        <span>Question {qi + 1} of {total}</span>
        <div className={s.quizBar}>
          <div className={s.quizBarFill} style={{ width: `${((qi + 1) / total) * 100}%` }} />
        </div>
        <span>need {pass} to pass</span>
      </div>

      {/* Question type label */}
      <div className={s.qType}>
        {q.type === 'mcq' ? 'multiple choice' : q.type === 'truefalse' ? 'true / false' : 'fill in the blank'}
      </div>

      {/* Prompt */}
      <div className={s.qPrompt}>{q.prompt}</div>

      {/* Answer input by type */}
      {q.type === 'mcq' && q.options && (
        <div>
          {q.options.map(opt => {
            let cls = s.option
            if (answered) {
              cls += ` ${s.locked}`
              if (opt.id === q.answer) cls += ` ${s.correct}`
              else if (opt.id === chosenId) cls += ` ${s.wrong}`
            }
            return (
              <button
                key={opt.id}
                className={cls}
                onClick={() => !answered && checkAnswer(opt.id)}
                aria-pressed={chosenId === opt.id}
              >
                <span className={s.optionRadio} aria-hidden="true" />
                {opt.text}
              </button>
            )
          })}
        </div>
      )}

      {q.type === 'truefalse' && (
        <div>
          {(['true', 'false'] as const).map(val => {
            let cls = s.option
            if (answered) {
              cls += ` ${s.locked}`
              if (val === q.answer) cls += ` ${s.correct}`
              else if (val === chosenId) cls += ` ${s.wrong}`
            }
            return (
              <button
                key={val}
                className={cls}
                onClick={() => !answered && checkAnswer(val)}
                aria-pressed={chosenId === val}
              >
                <span className={s.optionRadio} aria-hidden="true" />
                {val === 'true' ? 'True' : 'False'}
              </button>
            )
          })}
        </div>
      )}

      {q.type === 'fillblank' && (
        <div className={s.fillBlankRow}>
          <input
            ref={inputRef}
            className={`${s.fillInput} ${answered ? (answerState === 'correct' ? s.correct : s.wrong) : ''}`}
            type="text"
            value={fillValue}
            onChange={e => setFillValue(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !answered && fillValue.trim()) checkAnswer(fillValue) }}
            placeholder="type here…"
            disabled={answered}
            aria-label="Fill in the blank"
            autoFocus
          />
          {!answered && (
            <button
              className="btn btn--sm"
              onClick={() => fillValue.trim() && checkAnswer(fillValue)}
              disabled={!fillValue.trim()}
            >
              Check
            </button>
          )}
        </div>
      )}

      {/* Rationale */}
      {answered && (
        <div className={s.rationale}>
          <strong>{answerState === 'correct' ? 'Correct. ' : 'Not quite. '}</strong>
          {q.rationale}
        </div>
      )}

      {/* Footer */}
      {answered && (
        <div className={s.quizFoot}>
          <button className="btn btn--primary" onClick={handleNext}>
            {isLast ? 'Finish →' : 'Next question'}
          </button>
        </div>
      )}
    </div>
  )
}
