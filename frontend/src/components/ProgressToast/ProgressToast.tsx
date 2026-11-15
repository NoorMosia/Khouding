import { useEffect, useState } from 'react'
import s from './ProgressToast.module.css'

interface ProgressToastProps {
  message: string | null
  onDone: () => void
}

export default function ProgressToast({ message, onDone }: ProgressToastProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!message) return
    setVisible(true)
    const hide = setTimeout(() => setVisible(false), 3500)
    const clear = setTimeout(() => onDone(), 4000)
    return () => { clearTimeout(hide); clearTimeout(clear) }
  }, [message]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!message) return null

  return (
    <div className={`${s.toast} ${visible ? s.show : s.hide}`} role="status" aria-live="polite">
      {message}
    </div>
  )
}
