import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SequenceDiagram from './SequenceDiagram'

// Lesson prose. Tailwind classes are applied per element so the markdown
// inherits the same tokens as the rest of the app.
export default function Markdown({ body }: { body: string }) {
  return (
    <div className="text-[1.0625rem] leading-[1.7] [&>*+*]:mt-4">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => <h2 className="mt-10 mb-3 text-xl">{children}</h2>,
          h3: ({ children }) => <h3 className="mt-8 mb-2">{children}</h3>,
          p: ({ children }) => <p className="my-4">{children}</p>,
          ul: ({ children }) => <ul className="my-4 pl-6 list-disc marker:text-muted-foreground">{children}</ul>,
          ol: ({ children }) => <ol className="my-4 pl-6 list-decimal marker:text-muted-foreground">{children}</ol>,
          li: ({ children }) => <li className="my-2">{children}</li>,
          strong: ({ children }) => <strong className="font-medium">{children}</strong>,
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener" className="text-brand underline">{children}</a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-6 pl-4 border-l border-brand text-muted-foreground">{children}</blockquote>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto"><table className="w-full border-collapse text-[0.9375rem]">{children}</table></div>
          ),
          th: ({ children }) => (
            <th className="border-b border-foreground px-3 py-2 text-left text-[0.6875rem] font-medium uppercase tracking-wider text-muted-foreground">{children}</th>
          ),
          td: ({ children }) => <td className="border-b border-border px-3 py-2 text-left">{children}</td>,
          code({ className, children, ...props }) {
            const text = String(children).replace(/\n$/, '')
            if (className === 'language-mermaid') return <SequenceDiagram chart={text} />
            if (!className) return <code className="font-mono text-[0.875em] bg-secondary px-1.5 py-0.5">{children}</code>
            return (
              <pre className="my-6 overflow-x-auto bg-secondary border-l border-border p-4 font-mono text-[0.8125rem] leading-relaxed">
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
