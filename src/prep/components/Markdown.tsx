import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SequenceDiagram from './SequenceDiagram'

export default function Markdown({ body }: { body: string }) {
  return (
    <div className="md">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            const text = String(children).replace(/\n$/, '')
            if (className === 'language-mermaid') return <SequenceDiagram chart={text} />
            const inline = !className
            if (inline) return <code className="inline-code">{children}</code>
            return (
              <pre className="md-pre">
                <code {...props}>{children}</code>
              </pre>
            )
          },
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  )
}
