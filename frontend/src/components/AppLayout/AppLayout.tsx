import { createContext, useContext, useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import { useFetch, courseUrl, progress as progressApi } from '../../api/client'
import type { CourseProgress } from '../../api/client'
import { apiCourseToNav } from '../../api/mappers'
import { useAuth } from '../../context/AuthContext'
import type { ApiCourse } from '../../api/types'
import type { CourseNav } from '../../types/course'
import { NotFoundError } from '../../api/client'
import s from './AppLayout.module.css'

// ── Sidebar collapse context ──────────────────────────────────────────────────
interface SidebarCtx {
  collapsed: boolean
  toggle: () => void
}
const SidebarContext = createContext<SidebarCtx | null>(null)
export function useSidebar() {
  const ctx = useContext(SidebarContext)
  if (!ctx) throw new Error('useSidebar must be used inside AppLayout')
  return ctx
}

// ── Course data context ───────────────────────────────────────────────────────
// Fetched once at the AppLayout level and shared with CourseHome, SectionView,
// and the Sidebar — no per-child refetch.
interface CourseCtx {
  course: CourseNav | null
  loading: boolean
  error: Error | null
}
const CourseContext = createContext<CourseCtx>({ course: null, loading: true, error: null })
export function useCourseContext() {
  return useContext(CourseContext)
}

const STORAGE_KEY = 'khouding-sidebar'

export default function AppLayout() {
  const { courseId } = useParams<{ courseId: string }>()
  const { user } = useAuth()

  // Fetch the course manifest
  const { data: raw, loading, error } = useFetch<ApiCourse>(courseUrl(courseId))

  // Fetch progress when logged in and course is loaded
  const [courseProgress, setCourseProgress] = useState<CourseProgress | null>(null)

  useEffect(() => {
    if (!user || !courseId) {
      setCourseProgress(null)
      return
    }
    progressApi.get(courseId)
      .then(p => setCourseProgress(p))
      .catch(err => {
        // 401 or network error: proceed without progress
        if (!(err instanceof NotFoundError)) setCourseProgress(null)
      })
  }, [user, courseId])

  const course = raw ? apiCourseToNav(raw, courseProgress?.sections) : null

  // Sidebar collapse state
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) return true
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'true'
  })
  useEffect(() => {
    if (window.innerWidth > 768) {
      localStorage.setItem(STORAGE_KEY, String(collapsed))
    }
  }, [collapsed])
  const toggle = () => setCollapsed(c => !c)

  return (
    <CourseContext.Provider value={{ course, loading, error }}>
      <SidebarContext.Provider value={{ collapsed, toggle }}>
        <div className={s.appLayout}>
          <Sidebar collapsed={collapsed} onToggle={toggle} />
          <main className={s.main}>
            <Outlet />
          </main>
        </div>
      </SidebarContext.Provider>
    </CourseContext.Provider>
  )
}
