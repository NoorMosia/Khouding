import { createContext, useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import s from './AppLayout.module.css'

// ── Sidebar context — lets child pages know the current width ─────────────
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

const STORAGE_KEY = 'khouding-sidebar'

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    // On mobile default to collapsed; on desktop respect stored preference
    if (typeof window !== 'undefined' && window.innerWidth <= 768) return true
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'true'
  })

  // Persist preference (desktop only — mobile is always auto-collapsed)
  useEffect(() => {
    if (window.innerWidth > 768) {
      localStorage.setItem(STORAGE_KEY, String(collapsed))
    }
  }, [collapsed])

  const toggle = () => setCollapsed(c => !c)

  return (
    <SidebarContext.Provider value={{ collapsed, toggle }}>
      <div className={s.appLayout}>
        <Sidebar collapsed={collapsed} onToggle={toggle} />
        <main className={s.main}>
          <Outlet />
        </main>
      </div>
    </SidebarContext.Provider>
  )
}
