import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import type * as MonacoType from 'monaco-editor'
import OutputPane from '../../components/OutputPane/OutputPane'
import StdinFields, { stdinToValues, valuesToStdin } from '../../components/StdinFields/StdinFields'
import { useSubmission } from '../../hooks/useSubmission'
import { useTheme } from '../../context/ThemeContext'
import { useAuth } from '../../context/AuthContext'
import { chapterTestsApi, NotFoundError } from '../../api/client'
import type { ChapterTestData, CompleteResult } from '../../api/client'
import type { ApiProblem } from '../../api/types'
import s from './ChapterTestScreen.module.css'

const MonacoEditor = lazy(() => import('@monaco-editor/react'))

type ChipState = 'unsolved' | 'attempted' | 'solved' | 'current'

export default function ChapterTestScreen() {
  const { courseId, testId } = useParams<{ courseId: string; testId: string }>()
  const { theme }  = useTheme()
  const { user }   = useAuth()
  const navigate   = useNavigate()

  const [testData, setTestData]       = useState<ChapterTestData | null>(null)
  const [loading, setLoading]         = useState(true)
  const [error, setError]             = useState<string | null>(null)
  const [currentIdx, setCurrentIdx]   = useState(0)
  const [chipStates, setChipStates]   = useState<ChipState[]>([])
  const [code, setCode]               = useState('')
  const [stdinValues, setStdinValues] = useState<string[]>([''])
  const [result, setResultState]      = useState<CompleteResult | null>(null)
  const [finishing, setFinishing]     = useState(false)

  // Load the test attempt on mount
  useEffect(() => {
    if (!courseId || !testId) return
    setLoading(true)
    chapterTestsApi.get(courseId, testId)
      .then(data => {
        setTestData(data)
        setChipStates(data.problems.map((_, i) => i === 0 ? 'current' : 'unsolved'))
        const first = data.problems[0]
        if (first) setCode(first.starterFiles?.csharp?.[0]?.contents ?? '')
        setLoading(false)
      })
      .catch(err => {
        setError(err instanceof NotFoundError ? 'Test not found.' : 'Failed to load test.')
        setLoading(false)
      })
  }, [courseId, testId])

  const currentProblem: ApiProblem | null = testData?.problems[currentIdx] ?? null

  // Update code when problem changes
  useEffect(() => {
    if (!currentProblem) return
    setCode(currentProblem.starterFiles?.csharp?.[0]?.contents ?? '')
    setStdinValues(stdinToValues(currentProblem.cases[0]?.stdin ?? ''))
  }, [currentProblem?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  const editorRef = useRef<MonacoType.editor.IStandaloneCodeEditor | null>(null)
  const { result: subResult, submit, reset } = useSubmission()

  // Update chips on submission result
  useEffect(() => {
    if (subResult.status === 'passed') {
      setChipStates(prev => prev.map((st, i) => i === currentIdx ? 'solved' : st))
    } else if (subResult.status === 'failed' || subResult.status === 'compile_error') {
      setChipStates(prev => prev.map((st, i) =>
        i === currentIdx && st !== 'solved' ? 'attempted' : st
      ))
    }
  }, [subResult.status, currentIdx])

  const handleEditorMount = useCallback(
    (editor: MonacoType.editor.IStandaloneCodeEditor) => { editorRef.current = editor }, []
  )

  function navigateToProblem(idx: number) {
    if (!testData) return
    setCurrentIdx(idx)
    setChipStates(prev => prev.map((st, i) => {
      if (i === idx) return st === 'solved' ? 'solved' : 'current'
      if (i === currentIdx && st === 'current') return 'unsolved'
      return st
    }))
    reset()
  }

  const handleRun = () => {
    if (!currentProblem || !courseId || !testId) return
    submit({
      kind: 'run',
      language: 'csharp',
      files: [{ path: 'starter.cs', contents: code }],
      stdin: valuesToStdin(stdinValues),
      problemId: currentProblem.id,
      courseId,
      sectionId: testId,
    })
  }

  const handleSubmit = () => {
    if (!currentProblem || !courseId || !testId) return
    submit({
      kind: 'submit',
      language: 'csharp',
      files: [{ path: 'starter.cs', contents: code }],
      problemId: currentProblem.id,
      courseId,
      sectionId: testId,
    })
  }

  async function handleFinish() {
    if (!testData || !courseId || !testId || finishing) return
    setFinishing(true)
    const solvedCount = chipStates.filter(s => s === 'solved').length
    try {
      const res = await chapterTestsApi.complete(courseId, testId, testData.attemptId, solvedCount)
      setResultState(res)
    } catch {
      setResultState({ passed: false, solvedCount, lightAt: testData.lightAt })
    } finally {
      setFinishing(false)
    }
  }

  async function handleRedraw() {
    if (!courseId || !testId) return
    setLoading(true)
    setResultState(null)
    try {
      const data = await chapterTestsApi.get(courseId, testId, true)
      setTestData(data)
      setChipStates(data.problems.map((_, i) => i === 0 ? 'current' : 'unsolved'))
      setCurrentIdx(0)
      const first = data.problems[0]
      if (first) setCode(first.starterFiles?.csharp?.[0]?.contents ?? '')
      reset()
    } catch {
      setError('Failed to get a new draw.')
    } finally {
      setLoading(false)
    }
  }

  const isRunning     = subResult.status === 'pending' || subResult.status === 'running'
  const solvedCount   = chipStates.filter(s => s === 'solved').length
  const allAttempted  = testData ? chipStates.every(s => s !== 'unsolved') : false
  const starterFile   = currentProblem?.starterFiles?.csharp?.[0]?.path ?? 'starter.cs'

  if (loading) return (
    <div className={s.screen}>
      <div className={s.center}>loading test…</div>
    </div>
  )

  if (error || !testData || !currentProblem) return (
    <div className={s.screen}>
      <div className={s.center}>{error ?? 'test not found'}</div>
    </div>
  )

  // Result overlay
  if (result) {
    if (result.passed) {
      return (
        <div className={s.screen}>
          <div className={s.resultOverlay}>
            <div className={`${s.resultCard} ${s.passed}`}>
              <div className={s.resultTitle}>✓ Chapter unlocked</div>
              <div className={s.resultScore}>
                {result.solvedCount} of {testData.draw} solved · need {result.lightAt} to pass
              </div>
              <Link to={`/courses/${courseId}?unlocked=${testId?.split('.')[0]}`} className="btn btn--primary">
                See it on the map →
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className={s.screen}>
        <div className={s.resultOverlay}>
          <div className={`${s.resultCard} ${s.failed}`}>
            <div className={s.resultTitle}>✗ Not quite</div>
            <div className={s.resultScore}>
              {result.solvedCount} of {testData.draw} solved · need {result.lightAt} to pass
            </div>
            <div className={s.resultActions}>
              <button className="btn btn--primary" onClick={handleRedraw}>
                Try again (new draw)
              </button>
              <Link to={`/courses/${courseId}`} className="btn">
                Back to map
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={s.screen}>
      <div className={s.workbench}>

        {/* Problem panel */}
        <div className={s.problemPanel}>
          <div className={s.panelHead}>
            <span className={s.panelTag}>Chapter Test</span>
            <Link to={`/courses/${courseId}`} className={s.backLink} aria-label="Back to map">
              ← map
            </Link>
          </div>

          <div className={s.rail}>
            <div className={s.railTop}>
              <span className={s.railLabel}>{currentIdx + 1} of {testData.draw}</span>
              <span className={s.railSteppers}>
                <button
                  className={s.stepper}
                  onClick={() => navigateToProblem(currentIdx - 1)}
                  disabled={currentIdx === 0}
                  aria-label="Previous problem"
                >◀</button>
                <button
                  className={s.stepper}
                  onClick={() => navigateToProblem(currentIdx + 1)}
                  disabled={currentIdx >= testData.draw - 1}
                  aria-label="Next problem"
                >▶</button>
              </span>
            </div>

            <div className={s.chips} role="list">
              {chipStates.map((state, i) => (
                <button
                  key={i}
                  className={`${s.chip} ${i === currentIdx ? s.current : ''} ${state === 'solved' ? s.solved : ''} ${state === 'attempted' ? s.attempted : ''}`}
                  onClick={() => navigateToProblem(i)}
                  aria-label={`Problem ${i + 1}, ${state}`}
                  aria-current={i === currentIdx}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <div className={s.railMeta}>
              <span>Need {testData.lightAt} of {testData.draw} to pass</span>
              <span className={s.solvedCount}>{solvedCount} solved</span>
            </div>
          </div>

          <div className={s.problemBody}>
            <h2 className={s.problemTitle}>{currentProblem.title}</h2>
            {currentProblem.instruction && (
              <p className={s.problemStatement}>{currentProblem.instruction}</p>
            )}
            <div className={s.difficulty}>
              Difficulty{' '}
              {Array.from({ length: 3 }).map((_, i) => (
                <span key={i} className={i < currentProblem.difficulty ? s.diffDot : s.diffDotFaint}>●</span>
              ))}
            </div>
          </div>

          <div className={s.panelFoot}>
            <button
              className="btn btn--primary"
              onClick={handleFinish}
              disabled={!allAttempted || finishing}
              title={allAttempted ? undefined : 'Answer all problems to finish'}
            >
              {finishing ? 'Submitting…' : 'Finish test →'}
            </button>
          </div>
        </div>

        {/* Editor column */}
        <div className={s.editorCol}>
          <div className={s.tabs}>
            <span className={s.tab}>{starterFile}</span>
            <span className={s.tabHint}>no autocomplete · syntax highlight only</span>
          </div>

          <div className={s.monacoWrapper}>
            <Suspense fallback={<div className={s.monacoLoader}>loading editor…</div>}>
              <MonacoEditor
                height="100%"
                language="csharp"
                theme={theme === 'light' ? 'vs' : 'vs-dark'}
                value={code}
                onChange={v => setCode(v ?? '')}
                onMount={handleEditorMount}
                options={{
                  fontSize: 13,
                  fontFamily: "'JetBrains Mono', monospace",
                  lineHeight: 22,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  renderLineHighlight: 'line',
                  overviewRulerLanes: 0,
                  folding: false,
                  glyphMargin: false,
                  lineDecorationsWidth: 6,
                  lineNumbersMinChars: 3,
                  quickSuggestions: false,
                  suggestOnTriggerCharacters: false,
                  acceptSuggestionOnEnter: 'off',
                  tabCompletion: 'off',
                  wordBasedSuggestions: 'off',
                  parameterHints: { enabled: false },
                  hover: { enabled: false },
                  occurrencesHighlight: 'off',
                  selectionHighlight: false,
                  codeLens: false,
                  contextmenu: false,
                  renderValidationDecorations: 'off',
                  scrollbar: { verticalScrollbarSize: 6, horizontalScrollbarSize: 6 },
                }}
              />
            </Suspense>
          </div>

          <div className={s.toolbar}>
            <button className="btn" onClick={handleRun} disabled={isRunning}>Run</button>
            <button className="btn btn--primary" onClick={handleSubmit} disabled={isRunning}>Submit</button>
          </div>

          <StdinFields values={stdinValues} onChange={setStdinValues} disabled={isRunning} />
          <OutputPane result={subResult} onClear={reset} />
        </div>
      </div>
    </div>
  )
}
