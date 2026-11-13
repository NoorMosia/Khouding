import { Link } from 'react-router-dom'
import s from './Catalog.module.css'

export default function Catalog() {
  return (
    <div className={`${s.page} page-enter`}>
      <p className="eyebrow">My courses</p>
      <h1 className={s.heading}>Keep going</h1>
      <p className={s.lead}>Self-paced. Nothing locked. Pick up where you left off.</p>

      {/* C# Basics — in progress, whole card is a link */}
      <Link to="/courses/csharp-basics" className={s.card}>
        <div className={s.cardTop}>
          <h3>C# Basics</h3>
          <span className={s.langBadge}>C#</span>
          <span className={s.continueArrow}>Continue →</span>
        </div>
        <p>Variables, control flow, methods. Built from the logic of the language, drilled with lots of practice.</p>
        <div className={s.progressRow}>
          <div
            className={s.meter}
            role="progressbar"
            aria-valuenow={22}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="22% complete"
          >
            <span className={s.meterFill} style={{ width: '22%' }} />
          </div>
          <span className={s.pct}>22% · Chapter 1</span>
        </div>
      </Link>

      {/* Java Basics — coming soon */}
      <div className={`${s.card} ${s.locked}`} aria-hidden="true">
        <div className={s.cardTop}>
          <h3>Java Basics</h3>
          <span className={s.lockedBadge}>soon</span>
        </div>
        <p>The same spine, in Java. Finishing C# tells you exactly how this will feel.</p>
      </div>
    </div>
  )
}
