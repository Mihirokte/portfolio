import { useEffect, useRef } from 'react'
import { EditorView, basicSetup } from 'codemirror'
import { python } from '@codemirror/lang-python'
import { oneDark } from '@codemirror/theme-one-dark'

interface Props {
  initial: string
  onChange: (code: string) => void
}

/** CodeMirror 6 Python editor. Remount (via key) to reset contents. */
export default function Editor({ initial, onChange }: Props) {
  const host = useRef<HTMLDivElement>(null)
  const cbRef = useRef(onChange)
  cbRef.current = onChange

  useEffect(() => {
    if (!host.current) return
    const view = new EditorView({
      doc: initial,
      parent: host.current,
      extensions: [
        basicSetup,
        python(),
        oneDark,
        EditorView.updateListener.of((u) => {
          if (u.docChanged) cbRef.current(u.state.doc.toString())
        }),
        EditorView.theme({
          '&': { fontSize: '14px', backgroundColor: 'transparent' },
          '.cm-scroller': { fontFamily: "'IBM Plex Mono', ui-monospace, monospace" },
          '&.cm-focused': { outline: 'none' },
        }),
      ],
    })
    return () => view.destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div className="editor-host" ref={host} />
}
