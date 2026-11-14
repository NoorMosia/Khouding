import { createContext, useContext, useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import { useFetch, courseUrl } from '../../api/client'
import { apiCourseToNav } from '../../api/mappers'
import type { ApiCourse } from '../../api/types'
import type { CourseNav } from '../../types/course'
import s from './AppLayout.module.css'

// ── Sidebar collapse context ──────────────────────────────────────────────

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

// ── Course data context ────────────────────────────────────────────────────
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

  // Fetch the course manifest
  const { data: raw, loading, error } = useFetch<ApiCourse>(courseUrl(courseId))
  const course = raw ? apiCourseToNav(raw) : null

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
