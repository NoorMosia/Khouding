import { useState } from 'react'
import type { SubmissionResult } from '../../types/coding'
import s from '../../pages/CodingScreen/CodingScreen.module.css'

interface OutputPaneProps {
  result: SubmissionResult
  onClear: () => void
}

export default function OutputPane({ result, onClear }: OutputPaneProps) {
  const [expanded, setExpanded] = useState(false)

  const isRunning = result.status === 'pending' || result.status === 'running'
  const isIdle    = result.status === 'idle'

  function dotClass() {
    if (isRunning) return ''
    if (result.status === 'passed') return s.ok
    if (result.status === 'failed' || result.status === 'compile_error' || result.status === 'error') return s.bad
    return ''
  }

  function titleText() {
    if (isRunning) return result.status === 'pending' ? 'Submitting…' : 'Running…'
    if (result.status === 'compile_error') return 'Compile error'
    if (result.status === 'error') return 'Error'
    if (result.status === 'passed' || result.status === 'failed') return 'Result'
    return 'Output'
  }

  return (
    <div className={`${s.output} ${expanded ? s.expanded : ''}`}>
      <div className={s.outHead}>
        {isRunning
          ? <span className={s.spinner} aria-label="Running" />
          : <span className={`${s.statusDot} ${dotClass()}`} />
        }
        <span className={s.outTitle}>{titleText()}</span>
        <div className={s.outActions}>
          {!isIdle && (
            <button className={s.outAction} onClick={onClear} aria-label="Clear output">
              clear
            </button>
          )}
          <button
            className={s.outAction}
            onClick={() => setExpanded(e => !e)}
            aria-label={expanded ? 'Collapse output' : 'Expand output'}
          >
            {expanded ? '↙ collapse' : '↗ expand'}
          </button>
        </div>
      </div>

      <div className={s.outBody}>
        <OutputBody result={result} />
      </div>
    </div>
  )
}

function OutputBody({ result }: { result: SubmissionResult }) {
  const { status } = result

  if (status === 'idle') {
    return <span className={s.outFaint}>Run to see output. Submit to grade against the hidden tests.</span>
  }

  if (status === 'pending' || status === 'running') {
    return <span className={s.outMuted}>compiling and running…</span>
  }

  if (status === 'compile_error') {
    return (
      <div className={s.fadeIn}>
        <div className={s.outMuted}>Compile error</div>
        {result.stderr && <pre style={{ marginTop: 6, whiteSpace: 'pre-wrap', fontSize: 12 }}>{result.stderr}</pre>}
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className={s.fadeIn}>
        <span className={s.outMuted}>{result.stderr ?? 'An unexpected error occurred.'}</span>
      </div>
    )
  }

  if (status === 'timeout') {
    return <span className={s.outMuted}>Timed out waiting for a result.</span>
  }

  // Run result (stdout only, no grading)
  if (result.stdout !== undefined && !result.testResults) {
    return (
      <div className={s.fadeIn}>
        <div className={s.outMuted} style={{ marginBottom: 6 }}>program output</div>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{result.stdout}</pre>
      </div>
    )
  }

  // Submit result
  if (status === 'passed') {
    return (
      <div className={s.fadeIn}>
        <div className={`${s.verdict} ${s.pass}`}>
          ✓ Passed {result.testResults?.length ?? 'all'} tests
        </div>
        {result.summary && <div className={s.rollup} dangerouslySetInnerHTML={{ __html: result.summary }} />}
      </div>
    )
  }

  if (status === 'failed') {
    const fc = result.failingCase
    return (
      <div className={s.fadeIn}>
        <div className={`${s.verdict} ${s.fail}`}>
          ✗ {result.summary ?? 'Failed'}
        </div>
        {fc && (
          <div className={s.failCase}>
            <div className={s.failRow}>
              <span className={s.failLabel}>input</span>
              <span><pre style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{fc.input}</pre></span>
            </div>
            <div className={s.failRow}>
              <span className={s.failLabel}>expected</span>
              <span className={s.failExpected}>{fc.expected}</span>
            </div>
            <div className={s.failRow}>
              <span className={s.failLabel}>your output</span>
              <span className={s.failActual}>{fc.actual}</span>
            </div>
          </div>
        )}
        {result.stderr && (
          <div className={s.rollup} style={{ marginTop: 8, color: 'var(--text-muted)' }}>
            {result.stderr}
          </div>
        )}
      </div>
    )
  }

  return null
}
