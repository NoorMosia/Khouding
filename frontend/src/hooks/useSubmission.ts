import { useCallback, useRef, useState } from 'react'
import type { SubmissionResult, SubmissionStatus, CodeFile } from '../types/coding'

const POLL_INTERVAL_MS = 800
const MAX_POLLS = 30 // 24s timeout

interface RunPayload {
  kind: 'run'
  language: string
  files: CodeFile[]
  stdin?: string
  problemId: string
  courseId: string
  sectionId: string
}

interface SubmitPayload {
  kind: 'submit'
  language: string
  files: CodeFile[]
  problemId: string
  courseId: string
  sectionId: string
}

type Payload = RunPayload | SubmitPayload

export function useSubmission() {
  const [result, setResult] = useState<SubmissionResult>({ id: '', status: 'idle' })
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearPoll = () => {
    if (pollRef.current) {
      clearInterval(pollRef.current)
      pollRef.current = null
    }
  }

  const submit = useCallback(async (payload: Payload) => {
    clearPoll()
    setResult({ id: '', status: 'pending' })

    try {
      // POST — backend returns a submission ID immediately
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const { id } = (await res.json()) as { id: string }

      setResult({ id, status: 'running' })

      // Poll until terminal status
      let polls = 0
      pollRef.current = setInterval(async () => {
        polls++
        if (polls > MAX_POLLS) {
          clearPoll()
          setResult(r => ({ ...r, status: 'timeout' }))
          return
        }

        try {
          const poll = await fetch(`/api/submissions/${id}`)
          if (!poll.ok) return
          const data = (await poll.json()) as SubmissionResult

          const terminal: SubmissionStatus[] = [
            'passed', 'failed', 'compile_error', 'timeout', 'error',
          ]
          if (terminal.includes(data.status)) {
            clearPoll()
            setResult(data)
          } else {
            setResult(r => ({ ...r, status: data.status }))
          }
        } catch {
          // transient network error — keep polling
        }
      }, POLL_INTERVAL_MS)
    } catch (e) {
      setResult({ id: '', status: 'error', stderr: String(e) })
    }
  }, [])

  const reset = useCallback(() => {
    clearPoll()
    setResult({ id: '', status: 'idle' })
  }, [])

  return { result, submit, reset }
}
