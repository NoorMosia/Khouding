import s from './StdinFields.module.css'

interface StdinFieldsProps {
  values: string[]
  onChange: (values: string[]) => void
  disabled?: boolean
  hasInput?: boolean
}

const ORDINALS = ['1st', '2nd', '3rd', '4th', '5th']

export default function StdinFields({ values, onChange, disabled, hasInput }: StdinFieldsProps) {
  if (!hasInput || values.length === 0) return null

  function update(i: number, val: string) {
    const next = [...values]
    next[i] = val
    onChange(next)
  }

  return (
    <div className={s.wrap}>
      <span className={s.label}>
        input <span className={s.hint}>· Run only</span>
      </span>
      <div className={s.fields}>
        {values.map((val, i) => (
          <div key={i} className={s.row}>
            <span className={s.ordinal}>{ORDINALS[i] ?? `${i + 1}th`}</span>
            <input
              className={s.input}
              type="text"
              value={val}
              onChange={e => update(i, e.target.value)}
              disabled={disabled}
              spellCheck={false}
              aria-label={`${ORDINALS[i] ?? `input ${i + 1}`} input`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/** Split a raw stdin string into per-line values */
export function stdinToValues(stdin: string): string[] {
  if (!stdin) return ['']
  return stdin.split('\n')
}

/** Join per-line values back into a stdin string */
export function valuesToStdin(values: string[]): string {
  return values.join('\n')
}
