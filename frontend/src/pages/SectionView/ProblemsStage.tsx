import { Link } from 'react-router-dom'
import type { SectionProblem } from '../../types/section'
import s from './SectionView.module.css'

interface ProblemsStageProps {
  courseId: string
  sectionId: string
  problems: SectionProblem[]
  lightsAt: number
}

export default function ProblemsStage({
  courseId,
  sectionId,
  problems,
  lightsAt,
}: ProblemsStageProps) {
  const solvedCount = problems.filter(p => p.status === 'solved').length
  const isLit = solvedCount >= lightsAt

  return (
    <div className={s.problems}>
      {/* Header: lights-at indicator */}
      <div className={s.problemsHead}>
        <span className={s.lightsLabel}>
          Section lights at {lightsAt} of {problems.length} · <b>{solvedCount} solved</b>
        </span>
        {isLit && (
          <span className={s.lit}>
            <span className={s.litDot} aria-hidden="true" />
            lit
          </span>
        )}
      </div>

      {/* Problem rows */}
      {problems.map((p, i) => {
        const url = `/courses/${courseId}/sections/${sectionId}/problems/${p.id}`
        return (
          <Link key={p.id} to={url} className={s.problemRow}>
            <span className={`${s.pState} ${p.status !== 'unsolved' ? s[p.status] : ''}`}>
              {p.status === 'solved'
                ? '✓'
                : p.status === 'attempted'
                ? '…'
                : i + 1}
            </span>
            <span className={s.pName}>
              {p.title}
              <span className={s.pSlug}>{p.slug}</span>
            </span>
            <span className={s.pDiff} aria-label={`Difficulty ${p.difficulty} of 3`}>
              {Array.from({ length: 3 }).map((_, di) => (
                <span key={di} className={di < p.difficulty ? s.pDiffDot : ''}>●</span>
              ))}
            </span>
            <span className={s.pGo}>open →</span>
          </Link>
        )
      })}
    </div>
  )
}
