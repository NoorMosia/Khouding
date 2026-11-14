import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type * as MonacoType from 'monaco-editor'
import CheatPanel from '../../components/CheatPanel/CheatPanel'
import OutputPane from '../../components/OutputPane/OutputPane'
import StdinFields, { stdinToValues, valuesToStdin } from '../../components/StdinFields/StdinFields'
import { useSubmission } from '../../hooks/useSubmission'
import { useTheme } from '../../context/ThemeContext'
import { useAuth } from '../../context/AuthContext'
import { useFetch, sectionUrl, progress as progressApi } from '../../api/client'
import type { ApiSection } from '../../api/types'
import s from './CodingScreen.module.css'

const MonacoEditor = lazy(() => import('@monaco-editor/react'))

type ChipState = 'unsolved' | 'attempted' | 'solved' | 'current'
type TabId = 'starter' | 'cheatsheet'

export default function CodingScreen() {
  const { courseId, sectionId, problemId } = useParams<{
    courseId: string
    sectionId: string
    problemId: string
  }>()
  const { theme } = useTheme()
  const { user } = useAuth()
  const navigate = useNavigate()

  // Fetch the full section so we have all problems + cheatsheet
  const { data: section, loading, error } = useFetch<ApiSection>(
    sectionUrl(courseId, sectionId)
  )

  // Derive the current problem from the URL param
  const problems = section?.problems ?? []
  const currentProblemFull = problems.find(p => {
    const slug = p.id.split('/').pop() ?? ''
    return slug === problemId || p.id === problemId
  }) ?? problems[0] ?? null

  const currentIdx = currentProblemFull
    ? problems.indexOf(currentProblemFull)
    : 0

  // Chip state — initialised once problems are known
  const [chipStates, setChipStates] = useState<ChipState[]>([])
  const [activeTab, setActiveTab]   = useState<TabId>('starter')
  const [collapsed, setCollapsed]   = useState(false)
  const [code, setCode]             = useState('')
  const [stdinValues, setStdinValues] = useState<string[]>([''])

  // Initialise chip states and starter code when section loads
  useEffect(() => {
    if (!section) return
    const chips: ChipState[] = section.problems.map((p, i) => {
      if (i === currentIdx) return 'current'
      return 'unsolved'
    })
    setChipStates(chips)
  }, [section?.id, currentIdx]) // eslint-disable-line react-hooks/exhaustive-deps

  // Update starter code and stdin when problem changes
  useEffect(() => {
    if (!currentProblemFull) return
    const starter = currentProblemFull.starterFiles?.csharp?.[0]?.contents ?? ''
    setCode(starter)
    setStdinValues(stdinToValues(currentProblemFull.cases[0]?.stdin ?? ''))
  }, [currentProblemFull?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  const editorRef = useRef<MonacoType.editor.IStandaloneCodeEditor | null>(null)
  const { result, submit, reset } = useSubmission()

  // Update chips when submission resolves; record progress on pass
  useEffect(() => {
    if (result.status === 'passed') {
      setChipStates(prev => {
        const next = [...prev]
        next[currentIdx] = 'solved'
        return next
      })
      // Record problem solved — fire-and-forget, only when logged in
      if (user && currentProblemFull && courseId && sectionId) {
        const problemSlug = currentProblemFull.id.split('/').pop() ?? currentProblemFull.id
        progressApi.markProblemSolved(courseId, sectionId, problemSlug).catch(() => {})
      }
    } else if (result.status === 'failed' || result.status === 'compile_error') {
      setChipStates(prev => {
        const next = [...prev]
        if (next[currentIdx] !== 'solved') next[currentIdx] = 'attempted'
        return next
      })
    }
  }, [result.status, currentIdx]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleEditorMount = useCallback(
    (editor: MonacoType.editor.IStandaloneCodeEditor) => {
      editorRef.current = editor
    }, []
  )

  // Navigate to a different problem in the same section
  function navigateToProblem(idx: number) {
    if (!section || !courseId || !sectionId) return
    const p = section.problems[idx]
    if (!p) return
    const pSlug = p.id.split('/').pop() ?? p.id
    navigate(`/courses/${courseId}/sections/${sectionId}/problems/${pSlug}`)
    // Update current chip
    setChipStates(prev => prev.map((st, i) => {
      if (i === idx) return st === 'solved' ? 'solved' : 'current'
      if (i === currentIdx && st === 'current') return 'unsolved'
      return st
    }))
    reset()
  }

  const handleRun = () => {
    if (!currentProblemFull || !courseId || !sectionId || !problemId) return
    submit({
      kind: 'run',
      language: 'csharp',
      files: [{ path: 'starter.cs', contents: code }],
      stdin: valuesToStdin(stdinValues),
      problemId: currentProblemFull.id,
      courseId,
      sectionId,
    })
  }

  const handleSubmit = () => {
    if (!currentProblemFull || !courseId || !sectionId || !problemId) return
    submit({
      kind: 'submit',
      language: 'csharp',
      files: [{ path: 'starter.cs', contents: code }],
      problemId: currentProblemFull.id,
      courseId,
      sectionId,
    })
  }

  const isRunning     = result.status === 'pending' || result.status === 'running'
  const totalProblems = problems.length
  const solvedCount   = chipStates.filter(s => s === 'solved').length

  // ── Loading / error states ───────────────────────────────────────────────
  if (loading) {
    return (
      <div className={s.screen}>
        <div style={{ flex: 1, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' }}>
          loading…
        </div>
      </div>
    )
  }

  if (error || !section || !currentProblemFull) {
    return (
      <div className={s.screen}>
        <div style={{ flex: 1, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' }}>
          problem not found
        </div>
      </div>
    )
  }

  const starterFileName = currentProblemFull.starterFiles?.csharp?.[0]?.path ?? 'starter.cs'

  return (
    <div className={s.screen}>
      <div className={`${s.workbench} ${collapsed ? s.collapsed : ''}`}>

        {/* ── Col 1: collapsed strip ──────────────────────────────── */}
        <div className={`${s.col} ${s.strip}`} aria-hidden={!collapsed}>
          <button
            className={s.stripBtn}
            onClick={() => setCollapsed(false)}
            aria-label="Show problem panel"
          >
            ☰
          </button>
        </div>

        {/* ── Col 2: problem panel ────────────────────────────────── */}
        <div className={`${s.col} ${s.problemPanel}`} aria-hidden={collapsed}>
          <div className={s.panelHead}>
            <span className={s.panelTag}>Problem</span>
            <button
              className={s.iconBtn}
              onClick={() => setCollapsed(true)}
              aria-label="Collapse problem panel"
            >◀</button>
          </div>

          {/* Rail */}
          <div className={s.rail}>
            <div className={s.railTop}>
              <span className={s.railLabel}>{currentIdx + 1} of {totalProblems}</span>
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
                  disabled={currentIdx >= totalProblems - 1}
                  aria-label="Next problem"
                >▶</button>
              </span>
            </div>

            <div className={s.chips} role="list" aria-label="Problems">
              {chipStates.map((state, i) => (
                <button
                  key={i}
                  className={`${s.chip} ${i === currentIdx ? s.current : state !== 'unsolved' ? s[state] : ''}`}
                  onClick={() => navigateToProblem(i)}
                  role="listitem"
                  aria-label={`Problem ${i + 1}, ${state}`}
                  aria-current={i === currentIdx}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <div className={s.railLegend}>
              <span className={s.legendItem}><span className={`${s.swatch} ${s.solved}`} /> solved</span>
              <span className={s.legendItem}><span className={`${s.swatch} ${s.attempted}`} /> tried</span>
              <span className={s.legendItem}><span className={s.swatch} /> not yet</span>
            </div>
          </div>

          {/* Problem body */}
          <div className={s.problemBody}>
            <h2 className={s.problemTitle}>{currentProblemFull.title}</h2>
            <p className={s.problemStatement}>
              {/* statementMarkdown is design.md content — render as plain text for now */}
              {currentProblemFull.statementMarkdown
                .replace(/^#.*\n/m, '')   // strip h1
                .replace(/\*\*/g, '')     // strip bold markers
                .trim()
                .split('\n\n')[0]}
            </p>

            <div className={s.difficulty}>
              Difficulty{' '}
              {Array.from({ length: 3 }).map((_, i) => (
                <span key={i} className={i < currentProblemFull.difficulty ? s.diffDot : s.diffDotFaint}>●</span>
              ))}
            </div>

            <div className={s.problemMeta}>
              <div className={s.sectionProgress}>
                <span>Section {section.number}</span>
                <div className={s.miniBar}
                  role="progressbar"
                  aria-valuenow={solvedCount}
                  aria-valuemax={totalProblems}
                >
                  <div className={s.miniBarFill} style={{ width: `${(solvedCount / totalProblems) * 100}%` }} />
                </div>
                <span>{solvedCount}/{totalProblems}</span>
              </div>
              <div className={s.helpSlot}>ask for help · coming soon</div>
            </div>
          </div>
        </div>

        {/* ── Col 3: editor + output ──────────────────────────────── */}
        <div className={`${s.col} ${s.editorCol}`}>
          <div className={s.tabs} role="tablist">
            <button
              className={`${s.tab} ${activeTab === 'starter' ? s.active : ''}`}
              onClick={() => setActiveTab('starter')}
              role="tab"
              aria-selected={activeTab === 'starter'}
            >
              {starterFileName}
            </button>
            <button
              className={`${s.tab} ${activeTab === 'cheatsheet' ? s.active : ''}`}
              onClick={() => setActiveTab('cheatsheet')}
              role="tab"
              aria-selected={activeTab === 'cheatsheet'}
            >
              cheatsheet.md
              <span className={s.tabBadge}>reference</span>
            </button>
            <span className={s.tabHint} aria-hidden="true">
              {activeTab === 'cheatsheet' ? 'rendered reference · read only' : 'no autocomplete · syntax highlight only'}
            </span>
          </div>

          <div
            className={s.monacoWrapper}
            role="tabpanel"
            style={{ display: activeTab === 'starter' ? 'block' : 'none' }}
          >
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
                  hideCursorInOverviewRuler: true,
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

          <div
            className={s.cheatPanel}
            role="tabpanel"
            style={{ display: activeTab === 'cheatsheet' ? 'flex' : 'none', flexDirection: 'column' }}
          >
            <Suspense fallback={<span style={{ color: 'var(--text-faint)', fontSize: 12 }}>loading…</span>}>
              <CheatPanel markdown={section.cheatsheetMarkdown} />
            </Suspense>
          </div>

          {activeTab === 'starter' && (
            <div className={s.toolbar}>
              <button className="btn" onClick={handleRun} disabled={isRunning}>Run</button>
              <button className="btn btn--primary" onClick={handleSubmit} disabled={isRunning}>Submit</button>
              <span className={s.toolbarStat}>
                <span className={s.saveDot} aria-hidden="true" />
                saved · csharp
              </span>
            </div>
          )}

          {activeTab === 'starter' && (
            <StdinFields
              values={stdinValues}
              onChange={setStdinValues}
              disabled={isRunning}
            />
          )}

          <OutputPane result={result} onClear={reset} />
        </div>
      </div>
    </div>
  )
}
