import mapData from '../../data/austriaMap.json'
import type { ChapterNav } from '../../types/course'
import s from './CourseMap.module.css'

// Province name → chapter number (1-based)
// Matches the mapping in map-build/gen-austria.mjs
const PROVINCE_TO_CHAPTER: Record<string, number> = {
  'Oberösterreich':   1,
  'Niederösterreich': 2,
  'Steiermark':       3,
  'Tirol':            4,
  'Kärnten':          5,
  'Salzburg':         6,
  'Burgenland':       7,
  'Vorarlberg':       8,
  'Wien':             9, // exam province
}

type ProvinceState = 'done' | 'next' | 'fog'

interface CourseMapProps {
  chapters: ChapterNav[]
  /** Called when user clicks a province */
  onChapterClick?: (chapterId: string) => void
}

export default function CourseMap({ chapters, onChapterClick }: CourseMapProps) {
  // Determine state for each province based on chapter progress
  function provinceState(provinceName: string): ProvinceState {
    const chapterNum = PROVINCE_TO_CHAPTER[provinceName]
    if (!chapterNum) return 'fog'

    // Exam province = Wien
    if (provinceName === 'Wien') return 'fog'

    const chapter = chapters.find(ch => parseInt(ch.number) === chapterNum)
    if (!chapter) return 'fog'

    const nonTestSections = chapter.sections.filter(sec => !sec.isTest)
    const litCount = nonTestSections.filter(sec => sec.solvedProblems >= sec.lightsAt).length
    const totalCount = nonTestSections.length

    if (litCount === totalCount && totalCount > 0) return 'done'  // all sections lit
    if (litCount > 0) return 'next'                                 // some progress
    // Ch.1 is always 'next' (starting province, always visible)
    if (chapterNum === 1) return 'next'
    return 'fog'
  }

  function handleProvinceClick(provinceName: string) {
    const chapterNum = PROVINCE_TO_CHAPTER[provinceName]
    if (!chapterNum || !onChapterClick) return
    const chapter = chapters.find(ch => parseInt(ch.number) === chapterNum)
    if (chapter) onChapterClick(chapter.id)
  }

  return (
    <div className={s.wrap}>
      <div className={s.mapWrap}>
        <svg
          viewBox="0 0 720 480"
          className={s.svg}
          role="img"
          aria-label="C# Basics course map — Austria"
        >
          {/* Province paths */}
          {mapData.provinces.map(prov => {
            const state = provinceState(prov.name)
            return (
              <path
                key={prov.name}
                className={`${s.prov} ${s[state]}`}
                d={prov.d}
                onClick={() => handleProvinceClick(prov.name)}
                role="button"
                tabIndex={state !== 'fog' ? 0 : undefined}
                aria-label={`${prov.name} — ${prov.title} (${state})`}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleProvinceClick(prov.name) }}
              />
            )
          })}

          {/* Landmark pins — computed from province centroids, stored in map data */}
          {mapData.pins.map((pin, i) => (
            <circle
              key={i}
              className={`${s.pin} ${s[pin.type as 'done' | 'part']}`}
              cx={pin.cx}
              cy={pin.cy}
              r={4}
              aria-hidden="true"
            />
          ))}

          {/* Province labels */}
          {mapData.labels.map((lbl, i) => {
            // Find the province state for this label
            const matchedProv = mapData.provinces.find(p => {
              // Match by chapter title (labels use chapter titles)
              return p.title === lbl.text
            })
            const state = matchedProv ? provinceState(matchedProv.name) : 'fog'
            return (
              <text
                key={i}
                className={`${s.label} ${s[state]}`}
                x={lbl.x}
                y={lbl.y}
                aria-hidden="true"
              >
                {lbl.text}
              </text>
            )
          })}
        </svg>
      </div>

      {/* Legend */}
      <div className={s.legend} aria-label="Map legend">
        <span className={s.legendItem}>
          <span className={`${s.legendSwatch} ${s.swatchDone}`} aria-hidden="true" />
          chapter complete
        </span>
        <span className={s.legendItem}>
          <span className={`${s.legendSwatch} ${s.swatchNext}`} aria-hidden="true" />
          in progress
        </span>
        <span className={s.legendItem}>
          <span className={`${s.legendSwatch} ${s.swatchFog}`} aria-hidden="true" />
          not yet
        </span>
      </div>
    </div>
  )
}
