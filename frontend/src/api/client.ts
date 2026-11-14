// ── API client ────────────────────────────────────────────────────────────
// Thin typed wrapper around fetch. No external dependency.
// All paths are relative — the Vite proxy forwards /api/* to :5050.

import { useEffect, useRef, useState } from 'react'

// ── Core fetch helper ─────────────────────────────────────────────────────

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(path, { credentials: 'include' })
  if (res.status === 404) throw new NotFoundError(path)
  if (!res.ok) throw new Error(`API ${res.status} on ${path}`)
  return res.json() as Promise<T>
}

export class NotFoundError extends Error {
  constructor(path: string) {
    super(`Not found: ${path}`)
    this.name = 'NotFoundError'
  }
}

// ── useFetch hook ─────────────────────────────────────────────────────────
// Generic loading/error wrapper. Re-fetches whenever the url changes.

export interface FetchState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

export function useFetch<T>(url: string | null): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: url !== null,
    error: null,
  })

  // Track the url in a ref so the effect only re-runs when it actually changes
  const urlRef = useRef<string | null>(null)

  useEffect(() => {
    if (url === null) {
      setState({ data: null, loading: false, error: null })
      return
    }

    // Skip if URL hasn't changed (prevents double-fetch in StrictMode)
    if (url === urlRef.current && state.data !== null) return
    urlRef.current = url

    let cancelled = false
    setState(s => ({ ...s, loading: true, error: null }))

    apiFetch<T>(url)
      .then(data => {
        if (!cancelled) setState({ data, loading: false, error: null })
      })
      .catch(err => {
        if (!cancelled) setState({ data: null, loading: false, error: err })
      })

    return () => { cancelled = true }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return state
}

// ── Typed endpoint helpers ────────────────────────────────────────────────
// Import these in hooks to call specific endpoints.

import type {
  ApiCourseSummary,
  ApiCourse,
  ApiSection,
  ApiProblem,
} from './types'

export const api = {
  courses: () =>
    apiFetch<ApiCourseSummary[]>('/api/courses'),

  course: (courseId: string) =>
    apiFetch<ApiCourse>(`/api/courses/${courseId}`),

  section: (courseId: string, sectionId: string) =>
    apiFetch<ApiSection>(`/api/courses/${courseId}/sections/${sectionId}`),

  problem: (courseId: string, sectionId: string, problemId: string) =>
    apiFetch<ApiProblem>(
      `/api/courses/${courseId}/sections/${sectionId}/problems/${problemId}`
    ),
}

// ── Progress API ──────────────────────────────────────────────────────────

export interface SectionProgress {
  readingDone:    boolean
  quizPassed:     boolean
  solvedProblems: number
}

export interface CourseProgress {
  courseId:  string
  sections:  Record<string, SectionProgress>
}

async function apiPost(path: string, body: unknown): Promise<void> {
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body),
  })
  if (res.status === 401) return  // not logged in — silently skip
  if (!res.ok) throw new Error(`API ${res.status} on ${path}`)
}

export const progress = {
  get: (courseId: string) =>
    apiFetch<CourseProgress>(`/api/progress/${courseId}`),

  markReadingDone: (courseId: string, sectionId: string) =>
    apiPost('/api/progress/reading-done', { courseId, sectionId }),

  markQuizPassed: (courseId: string, sectionId: string) =>
    apiPost('/api/progress/quiz-passed', { courseId, sectionId }),

  markProblemSolved: (courseId: string, sectionId: string, problemId: string) =>
    apiPost('/api/progress/problem-solved', { courseId, sectionId, problemId }),
}

// ── URL-building helpers (used in useFetch calls) ─────────────────────────

export function courseUrl(courseId: string | undefined) {
  return courseId ? `/api/courses/${courseId}` : null
}

export function sectionUrl(courseId: string | undefined, sectionId: string | undefined) {
  return courseId && sectionId
    ? `/api/courses/${courseId}/sections/${sectionId}`
    : null
}

export function problemUrl(
  courseId: string | undefined,
  sectionId: string | undefined,
  problemId: string | undefined,
) {
  return courseId && sectionId && problemId
    ? `/api/courses/${courseId}/sections/${sectionId}/problems/${problemId}`
    : null
}
