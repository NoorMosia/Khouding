import mapData from '../../data/austriaMap.json'
import s from './AuthMap.module.css'

// Static decorative map — no interaction, all provinces in fog state.
// Province 1 (Oberösterreich) shown as "next" to hint at the starting point.
const STARTING_PROVINCE = 'Oberösterreich'

export default function AuthMap() {
  return (
    <div className={s.wrap}>
      <svg
        viewBox="0 0 720 480"
        className={s.svg}
        aria-hidden="true"
      >
        {mapData.provinces.map(prov => {
          const isStart = prov.name === STARTING_PROVINCE
          return (
            <path
              key={prov.name}
              className={`${s.prov} ${isStart ? s.next : s.fog}`}
              d={prov.d}
            />
          )
        })}

        {mapData.labels.map((lbl, i) => {
          const isStart = mapData.provinces.find(p => p.title === lbl.text)?.name === STARTING_PROVINCE
          return (
            <text
              key={i}
              className={`${s.label} ${isStart ? s.next : s.fog}`}
              x={lbl.x}
              y={lbl.y}
            >
              {lbl.text}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
