import ContentsNav from '../ContentsNav/ContentsNav'
import { useCourseContext } from '../AppLayout/AppLayout'
import a from '../AppLayout/AppLayout.module.css'

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const { course, loading } = useCourseContext()

  return (
    <aside
      className={`${a.sidebar} ${collapsed ? a.collapsed : ''}`}
      aria-label="Course navigation"
      aria-expanded={!collapsed}
      onClick={collapsed ? onToggle : undefined}
    >
      <div className={a.sidebarInner}>
        {loading && (
          <div style={{ padding: '20px 16px', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)' }}>
            loading…
          </div>
        )}
        {course && <ContentsNav course={course} />}
      </div>

      <div className={a.collapsedHint} aria-hidden="true">
        <span className={a.collapsedDot} />
      </div>

      <button
        className={a.toggleBtn}
        onClick={e => { e.stopPropagation(); onToggle() }}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        title={collapsed ? 'Expand' : 'Collapse'}
      >
        <span className={a.chevron} aria-hidden="true" />
      </button>
    </aside>
  )
}
