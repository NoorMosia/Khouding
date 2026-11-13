import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import type * as MonacoType from 'monaco-editor'
import CheatPanel from '../../components/CheatPanel/CheatPanel'
import OutputPane from '../../components/OutputPane/OutputPane'
import { useSubmission } from '../../hooks/useSubmission'
import { useTheme } from '../../context/ThemeContext'
import s from './CodingScreen.module.css'

// ── Lazy-load Monaco — never in the initial bundle ────────────────────────
const MonacoEditor = lazy(() => import('@monaco-editor/react'))

// ── Fixture data (replace with API fetch once backend serves content) ─────
const FIXTURE_PROBLEM = {
  id: 'p07-sum-two-ints',
  title: 'Sum two ints',
  difficulty: 2 as const,
  statement: 'Read two whole numbers (one per line), store each in a variable, and print their sum.',
  inputSpec: 'two lines, each a whole number',
  outputSpec: 'their sum on a single line',
  starterCode: `using System;

class Program
{
    static void Main()
    {
        // Read two whole numbers (one per line), store each in a variable,
        // and print their sum.
    }
}
`,
  sectionId: '1.3-number-variables',
  position: 7,
  totalInSection: 15,
}

const FIXTURE_CHEATSHEET = `# Cheatsheet, 1.3 Number variables

*This section only. Forgotten something older? Look it up, be resourceful — that is part of the craft.*

## Declare and initialise
\`\`\`csharp
int    age   = 19;      // whole number
double price = 4.99;    // can be fractional
\`\`\`

\`type name = value;\`

> **\`=\` means "put this value into the variable", not equality.**
> Read \`age = 19\` as *"age gets 19"*, not *"age equals 19"*.

## Reassign (no type the second time)
\`\`\`csharp
int score = 10;
score = 25;   // score now holds 25; the 10 is gone
\`\`\`

## const (a value that never changes)
\`\`\`csharp
const int DaysInWeek = 7;
\`\`\`

## Choosing the type

| Can it be fractional? | Use | Examples |
|---|---|---|
| no, a whole count | \`int\` | students, days, clicks |
| yes, decimals matter | \`double\` | price, height, average |

## Combine with + - *
\`\`\`csharp
int total = apples + oranges;
int area  = width * height;
\`\`\`
`

// Mock rail states — 15 problems, p07 is current
type ChipState = 'unsolved' | 'attempted' | 'solved' | 'current'
const INITIAL_STATES: ChipState[] = [
  'solved', 'solved', 'solved', 'solved', 'solved', 'solved',
  'current',
  'unsolved', 'unsolved', 'unsolved', 'unsolved', 'unsolved', 'unsolved', 'unsolved', 'unsolved',
]

type TabId = 'starter' | 'cheatsheet'

// ── Component ─────────────────────────────────────────────────────────────
export default function CodingScreen() {
  const { courseId, sectionId, problemId } = useParams()
  const { theme } = useTheme()

  const [collapsed, setCollapsed]   = useState(false)
  const [activeTab, setActiveTab]   = useState<TabId>('starter')
  const [chipStates, setChipStates] = useState<ChipState[]>(INITIAL_STATES)
  const [currentIdx, setCurrentIdx] = useState(6) // 0-based, p07 = index 6
  const [code, setCode]             = useState(FIXTURE_PROBLEM.starterCode)

  const editorRef = useRef<MonacoType.editor.IStandaloneCodeEditor | null>(null)
  const { result, submit, reset } = useSubmission()

  // Update chip when submission resolves
  useEffect(() => {
    if (result.status === 'passed') {
      setChipStates(prev => {
        const next = [...prev]
        next[currentIdx] = 'solved'
        return next
      })
    } else if (result.status === 'failed' || result.status === 'compile_error') {
      setChipStates(prev => {
        const next = [...prev]
        if (next[currentIdx] !== 'solved') next[currentIdx] = 'attempted'
        return next
      })
    }
  }, [result.status, currentIdx])

  const handleEditorMount = useCallback(
    (editor: MonacoType.editor.IStandaloneCodeEditor) => {
      editorRef.current = editor
    },
    [],
  )

  const handleRun = () => {
    submit({
      kind: 'run',
      language: 'csharp',
      files: [{ path: 'starter.cs', contents: code }],
      stdin: '3\n4',
    })
  }

  const handleSubmit = () => {
    submit({
      kind: 'submit',
      language: 'csharp',
      files: [{ path: 'starter.cs', contents: code }],
      problemId: problemId ?? FIXTURE_PROBLEM.id,
      courseId: courseId ?? 'csharp-basics',
      sectionId: sectionId ?? FIXTURE_PROBLEM.sectionId,
    })
  }

  const isRunning = result.status === 'pending' || result.status === 'running'
  const solvedCount = chipStates.filter(s => s === 'solved').length

  return (
    <div className={s.screen}>
      <div className={`${s.workbench} ${collapsed ? s.collapsed : ''}`}>

        {/* ── Col 1: collapsed strip ──────────────────────────────────── */}
        <div className={`${s.col} ${s.strip}`} aria-hidden={!collapsed}>
          <button
            className={s.stripBtn}
            onClick={() => setCollapsed(false)}
            aria-label="Show problem panel"
            title="Show problem"
          >
            ☰
          </button>
        </div>

        {/* ── Col 2: problem panel ────────────────────────────────────── */}
        <div
          className={`${s.col} ${s.problemPanel}`}
          aria-hidden={collapsed}
        >
          {/* Header */}
          <div className={s.panelHead}>
            <span className={s.panelTag}>Problem</span>
            <button
              className={s.iconBtn}
              onClick={() => setCollapsed(true)}
              aria-label="Collapse problem panel"
              title="Collapse"
            >
              ◀
            </button>
          </div>

          {/* Rail */}
          <div className={s.rail}>
            <div className={s.railTop}>
              <span className={s.railLabel}>{currentIdx + 1} of {FIXTURE_PROBLEM.totalInSection}</span>
              <span className={s.railSteppers}>
                <button
                  className={s.stepper}
                  onClick={() => setCurrentIdx(i => Math.max(0, i - 1))}
                  disabled={currentIdx === 0}
                  aria-label="Previous problem"
                >◀</button>
                <button
                  className={s.stepper}
                  onClick={() => setCurrentIdx(i => Math.min(FIXTURE_PROBLEM.totalInSection - 1, i + 1))}
                  disabled={currentIdx === FIXTURE_PROBLEM.totalInSection - 1}
                  aria-label="Next problem"
                >▶</button>
              </span>
            </div>

            <div className={s.chips} role="list" aria-label="Problems">
              {chipStates.map((state, i) => (
                <button
                  key={i}
                  className={`${s.chip} ${i === currentIdx ? s.current : state !== 'unsolved' ? s[state] : ''}`}
                  onClick={() => setCurrentIdx(i)}
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
            <h2 className={s.problemTitle}>{FIXTURE_PROBLEM.title}</h2>
            <p className={s.problemStatement}>{FIXTURE_PROBLEM.statement}</p>

            <div className={s.ioBox}>
              <div className={s.ioRow}>
                <span className={s.ioKey}>in</span>
                <span>{FIXTURE_PROBLEM.inputSpec}</span>
              </div>
              <div className={s.ioRow}>
                <span className={s.ioKey}>out</span>
                <span>{FIXTURE_PROBLEM.outputSpec}</span>
              </div>
            </div>

            <div className={s.difficulty}>
              Difficulty{' '}
              {Array.from({ length: 3 }).map((_, i) => (
                <span key={i} className={i < FIXTURE_PROBLEM.difficulty ? s.diffDot : s.diffDotFaint}>
                  ●
                </span>
              ))}
            </div>

            <div className={s.problemMeta}>
              <div className={s.sectionProgress}>
                <span>Section 1.3</span>
                <div className={s.miniBar} role="progressbar" aria-valuenow={solvedCount} aria-valuemax={15}>
                  <div className={s.miniBarFill} style={{ width: `${(solvedCount / 15) * 100}%` }} />
                </div>
                <span>{solvedCount}/{FIXTURE_PROBLEM.totalInSection}</span>
              </div>
              <div className={s.helpSlot}>ask for help · coming soon</div>
            </div>
          </div>
        </div>

        {/* ── Col 3: editor + output ──────────────────────────────────── */}
        <div className={`${s.col} ${s.editorCol}`}>

          {/* Tab bar */}
          <div className={s.tabs} role="tablist">
            <button
              className={`${s.tab} ${activeTab === 'starter' ? s.active : ''}`}
              onClick={() => setActiveTab('starter')}
              role="tab"
              aria-selected={activeTab === 'starter'}
              aria-controls="panel-starter"
            >
              starter.cs
            </button>
            <button
              className={`${s.tab} ${activeTab === 'cheatsheet' ? s.active : ''}`}
              onClick={() => setActiveTab('cheatsheet')}
              role="tab"
              aria-selected={activeTab === 'cheatsheet'}
              aria-controls="panel-cheatsheet"
            >
              cheatsheet.md
              <span className={s.tabBadge}>reference</span>
            </button>
            <span className={s.tabHint} aria-hidden="true">
              {activeTab === 'cheatsheet'
                ? 'rendered reference · read only'
                : 'no autocomplete · syntax highlight only'}
            </span>
          </div>

          {/* Editor / cheatsheet panels */}
          <div
            className={s.monacoWrapper}
            id="panel-starter"
            role="tabpanel"
            aria-hidden={activeTab !== 'starter'}
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
                  // No IntelliSense, no autocomplete, no squiggles
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
                  scrollbar: {
                    verticalScrollbarSize: 6,
                    horizontalScrollbarSize: 6,
                  },
                }}
              />
            </Suspense>
          </div>

          <div
            className={s.cheatPanel}
            id="panel-cheatsheet"
            role="tabpanel"
            aria-hidden={activeTab !== 'cheatsheet'}
            style={{ display: activeTab === 'cheatsheet' ? 'flex' : 'none', flexDirection: 'column' }}
          >
            <Suspense fallback={<span style={{ color: 'var(--text-faint)', fontSize: 12 }}>loading…</span>}>
              <CheatPanel markdown={FIXTURE_CHEATSHEET} />
            </Suspense>
          </div>

          {/* Toolbar — hidden when cheatsheet is active */}
          {activeTab === 'starter' && (
            <div className={s.toolbar}>
              <button
                className="btn"
                onClick={handleRun}
                disabled={isRunning}
                aria-label="Run code"
              >
                Run
              </button>
              <button
                className="btn btn--primary"
                onClick={handleSubmit}
                disabled={isRunning}
                aria-label="Submit code for grading"
              >
                Submit
              </button>
              <span className={s.toolbarStat}>
                <span className={s.saveDot} aria-hidden="true" />
                saved · csharp
              </span>
            </div>
          )}

          {/* Output pane */}
          <OutputPane result={result} onClear={reset} />
        </div>

      </div>
    </div>
  )
}
