import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import CodeBlock from '../CodeBlock/CodeBlock'
import s from './CheatPanel.module.css'

interface CheatPanelProps {
  markdown: string
}

// Stable references — outside the component to avoid re-creation on every render
const rehypePlugins = [rehypeHighlight] as const
const mdComponents  = { pre: CodeBlock } as const

export default function CheatPanel({ markdown }: CheatPanelProps) {
  return (
    <div className={s.panel}>
      <ReactMarkdown rehypePlugins={rehypePlugins} components={mdComponents}>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
