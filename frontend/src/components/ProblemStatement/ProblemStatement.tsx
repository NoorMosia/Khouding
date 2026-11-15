import { lazy, Suspense } from 'react'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import s from './ProblemStatement.module.css'

const ReactMarkdown = lazy(() => import('react-markdown'))

const remarkPlugins = [remarkGfm] as const
const rehypePlugins = [rehypeHighlight] as const

interface ProblemStatementProps {
  markdown: string
}

export default function ProblemStatement({ markdown }: ProblemStatementProps) {
  return (
    <Suspense fallback={null}>
      <div className={s.statement}>
        <ReactMarkdown remarkPlugins={remarkPlugins} rehypePlugins={rehypePlugins}>
          {markdown}
        </ReactMarkdown>
      </div>
    </Suspense>
  )
}
