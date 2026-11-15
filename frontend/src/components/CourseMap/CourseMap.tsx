import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import mapData from '../../data/austriaMap.json'
import type { ChapterNav } from '../../types/course'
import { chapterTestsApi } from '../../api/client'
import { useAuth } from '../../context/AuthContext'
import s from './CourseMap.module.css'

// Province name → chapter number
const PROVINCE_TO_CHAPTER: Record<string, number> = {
  'Oberösterreich':   1,
  'Niederösterreich': 2,
  'Steiermark':       3,
  'Tirol':            4,
  'Kärnten':          5,
  'Salzburg':         6,
  'Burgenland':       7,
  'Vorarlberg':       8,
  'Wien':             9,
}

type ProvinceState = 'done' | 'next' | 'fog'

interface CourseMapProps {
  chapters: ChapterNav[]
  courseId: string
  /** Called after a chapter test is confirmed passed — triggers sidebar refresh */
  onChapterUnlocked?: (chapterNum: number) => void
}

export default function CourseMap({ chapters, courseId, onChapterUnlocked }: CourseMapProps) {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  // Track which chapters have passed their test (server-side)
  const [passedTests, setPassedTests] = useState<Set<number>>(new Set())
  const [selectedChapter, setSelectedChapter] = useState<ChapterNav | null>(null)
  const [infoOpen, setInfoOpen] = useState(false)

  // Auto-open panel for a just-unlocked chapter (?unlocked=1)
  useEffect(() => {
    const unlocked = searchParams.get('unlocked')
    if (!unlocked) return
    const chNum = parseInt(unlocked)
    const chapter = chapters.find(ch => parseInt(ch.number) === chNum)
    if (chapter) setSelectedChapter(chapter)
    setSearchParams({}, { replace: true })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Fetch test status for all chapters on mount (when logged in)
  useEffect(() => {
    if (!user || !courseId) return
    Promise.all(
      chapters
        .filter(ch => ch.sections.some(s => s.isTest))
        .map(ch =>
          chapterTestsApi.status(courseId, `${ch.number}.T`)
            .then(r => ({ num: parseInt(ch.number), passed: r.passed }))
            .catch(() => ({ num: parseInt(ch.number), passed: false }))
        )
    ).then(results => {
      setPassedTests(new Set(results.filter(r => r.passed).map(r => r.num)))
    })
  }, [user, courseId]) // eslint-disable-line react-hooks/exhaustive-deps

  function provinceState(provinceName: string): ProvinceState {
    const chapterNum = PROVINCE_TO_CHAPTER[provinceName]
    if (!chapterNum || provinceName === 'Wien') return 'fog'

    const chapter = chapters.find(ch => parseInt(ch.number) === chapterNum)
    if (!chapter) return 'fog'

    // Done = chapter test passed
    if (passedTests.has(chapterNum)) return 'done'

    const nonTestSections = chapter.sections.filter(sec => !sec.isTest)
    const litCount = nonTestSections.filter(sec => sec.solvedProblems >= sec.lightsAt).length
    if (litCount > 0 || chapterNum === 1) return 'next'
    return 'fog'
  }

  function handleProvinceClick(provinceName: string) {
    const chapterNum = PROVINCE_TO_CHAPTER[provinceName]
    if (!chapterNum) return
    const chapter = chapters.find(ch => parseInt(ch.number) === chapterNum)
    if (!chapter) return
    setSelectedChapter(chapter)
  }

  const selectedState = selectedChapter
    ? provinceState(selectedChapter.province)
    : null

  return (
    <div className={s.wrap}>
      <div className={s.mapRow}>
        <div className={s.mapWrap}>          <svg
            viewBox="0 0 720 480"
            className={s.svg}
            role="img"
            aria-label="C# Basics course map — Austria"
          >
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
                  aria-label={`${prov.name} (${state})`}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') handleProvinceClick(prov.name)
                  }}
                />
              )
            })}

            {mapData.labels.map((lbl, i) => {
              const matchedProv = mapData.provinces.find(p => p.title === lbl.text)
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

        {/* Side panel */}
        {selectedChapter && (
          <div className={`${s.panel} ${selectedState === 'done' ? s.panelDone : ''}`}>
            <div className={s.panelHead}>
              <div>
                <div className={s.panelRegion}>{selectedChapter.regionTitle}</div>
                <div className={s.panelTitle}>{selectedChapter.title}</div>
              </div>
              <div className={s.panelHeadRight}>
                <div className={s.infoWrap}>
                  <button
                    className={s.infoBtn}
                    onClick={() => setInfoOpen(o => !o)}
                    aria-label="How the map works"
                  >
                    i
                  </button>
                  {infoOpen && (
                    <div className={s.infoPopover}>
                      <strong>How the map fills in</strong>
                      <p>Each province represents a chapter. Complete its sections and pass the chapter test to light it up and reveal the city.</p>
                    </div>
                  )}
                </div>
                <button className={s.panelClose} onClick={() => setSelectedChapter(null)} aria-label="Close">×</button>
              </div>
            </div>

            {selectedState === 'done' ? (
              <div className={s.panelReveal}>
                <div className={s.panelCity}>{selectedChapter.city}</div>
                <div className={s.panelProvince}>{selectedChapter.province}</div>
                <p className={s.panelFact}>{selectedChapter.fact}</p>
                <span className={s.panelUnlocked}>✓ Unlocked</span>
              </div>
            ) : (
              <div className={s.panelLocked}>
                <p className={s.panelHint}>
                  Complete all sections and pass the chapter test to unlock this city.
                </p>
                {selectedState === 'next' && (() => {
                  const firstIncomplete = selectedChapter.sections
                    .filter(sec => !sec.isTest)
                    .find(sec => sec.solvedProblems < sec.lightsAt)
                  const target = firstIncomplete
                    ? `/courses/${courseId}/sections/${firstIncomplete.id}`
                    : `/courses/${courseId}/tests/${selectedChapter.number}.T`
                  return (
                    <button
                      className="btn btn--primary"
                      onClick={() => navigate(target)}
                    >
                      Continue →
                    </button>
                  )
                })()}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className={s.legendRow}>
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
    </div>
  )
}
