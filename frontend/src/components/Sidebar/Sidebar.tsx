import ContentsNav from '../ContentsNav/ContentsNav'
import { CSHARP_BASICS } from '../../data/courseFixture'
import a from '../AppLayout/AppLayout.module.css'

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  // Course data — replace with context/API once backend serves the manifest
  const course = CSHARP_BASICS

  return (
    <aside
      className={`${a.sidebar} ${collapsed ? a.collapsed : ''}`}
      aria-label="Course navigation"
      aria-expanded={!collapsed}
      onClick={collapsed ? onToggle : undefined}
    >
      {/* ── Visible content (fades out when collapsed) ─────────────── */}
      <div className={a.sidebarInner}>
        <ContentsNav course={course} />
      </div>

      {/* ── Collapsed accent dot ───────────────────────────────────── */}
      <div className={a.collapsedHint} aria-hidden="true">
        <span className={a.collapsedDot} />
      </div>

      {/* ── Toggle button ─────────────────────────────────────────── */}
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
