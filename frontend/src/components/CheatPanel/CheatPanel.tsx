import ReactMarkdown from 'react-markdown'
import s from './CheatPanel.module.css'

interface CheatPanelProps {
  markdown: string
}

export default function CheatPanel({ markdown }: CheatPanelProps) {
  return (
    <div className={s.panel}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}
