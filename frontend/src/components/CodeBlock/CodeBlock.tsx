import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import s from './CodeBlock.module.css'

// Custom <pre> renderer for react-markdown + rehype-highlight.
//
// Mirrors the section-view-1.1 mockup structure exactly:
//   .codeblock > .code > [.gutter | .src]   — highlighted code with line numbers
//   .outblock                                — plain output (dashed border)
//   .errblock                                — compiler error output (red tint)

type PreProps = ComponentPropsWithoutRef<'pre'> & { children?: ReactNode }

export default function CodeBlock({ children }: PreProps) {
  const codeEl = children as React.ReactElement<
    ComponentPropsWithoutRef<'code'> & { children?: ReactNode }
  > | null

  if (!codeEl) return null

  const className = (codeEl.props.className ?? '') as string
  const isHighlighted = className.includes('language-') || className.includes('hljs')

  if (!isHighlighted) {
    // Plain block — decide: error output or regular output
    const text = extractText(codeEl.props.children)
    if (isErrorBlock(text)) {
      return <ErrorBlock text={text} />
    }
    return (
      <div className={s.outblock}>
        {codeEl.props.children}
      </div>
    )
  }

  // Highlighted code block with line number gutter
  const text = extractText(codeEl.props.children)
  const lineCount = text.split('\n').length
  const visibleLines = text.endsWith('\n') ? lineCount - 1 : lineCount
  const gutterText = Array.from({ length: visibleLines }, (_, i) => i + 1).join('\n')

  return (
    <div className={s.codeblock}>
      <div className={s.code}>
        <div className={s.gutter} aria-hidden="true">
          {gutterText}
        </div>
        <div className={`${s.src} ${className}`}>
          {codeEl.props.children}
        </div>
      </div>
    </div>
  )
}

// ── Error block — red tint with coloured location prefix ──────────────────

function ErrorBlock({ text }: { text: string }) {
  // Colour the "File.cs(line,col): error CSxxxx:" prefix in --danger
  // Pattern: anything ending in ): on the first part of a line
  const parts = text.split(/^((?:\S+\.cs\(\d+,\d+\):\s*))/m)

  if (parts.length === 1) {
    // No location prefix found — still render as error block
    return <div className={s.errblock}>{text}</div>
  }

  return (
    <div className={s.errblock}>
      {parts.map((part, i) =>
        // Every odd-indexed part is the captured location prefix
        i % 2 === 1
          ? <span key={i} style={{ color: 'var(--danger)' }}>{part}</span>
          : part
      )}
    </div>
  )
}

// ── Helpers ───────────────────────────────────────────────────────────────

function isErrorBlock(text: string): boolean {
  // Compiler errors start with a file path pattern or contain "error CS"
  return (
    /^\S+\.cs\(\d+,\d+\):/.test(text.trim()) ||
    /error CS\d{4}/.test(text) ||
    /warning CS\d{4}/.test(text)
  )
}

function extractText(node: ReactNode): string {
  if (node === null || node === undefined) return ''
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (typeof node === 'object' && 'props' in (node as object)) {
    const el = node as React.ReactElement<{ children?: ReactNode }>
    return extractText(el.props.children)
  }
  return ''
}
