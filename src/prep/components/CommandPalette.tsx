import { useEffect, useMemo, useRef, useState } from 'react'
import { COURSES } from '../content'
import { COMPANIES } from '../content/companies'
import { AREAS } from '../data/drills'
import { HOME_AREAS } from '../areas'

// Command palette — the 21st.dev / shadcn `Command` pattern, reimplemented in
// this project's tokens. It carries all navigation so no page needs a visible
// menu, breadcrumb trail, or descriptive index text.

interface Item {
  id: string
  label: string
  group: string
  href: string
}

function buildIndex(): Item[] {
  const items: Item[] = []
  for (const a of HOME_AREAS) {
    items.push({ id: `area-${a.key}`, label: a.label, group: 'Areas', href: a.href })
  }
  for (const c of COURSES) {
    for (const ch of c.chapters) {
      for (const l of ch.lessons) {
        items.push({
          id: `l-${l.id}`,
          label: l.title,
          group: c.label,
          href: `#/study/${c.key}/${l.id}`,
        })
      }
    }
  }
  for (const a of AREAS) {
    for (const d of a.drills) {
      items.push({ id: `d-${d.id}`, label: d.title, group: `${a.label} problems`, href: `#/drill/${d.id}` })
    }
  }
  for (const co of COMPANIES) {
    items.push({ id: `co-${co.key}`, label: co.name, group: 'Companies', href: `#/company/${co.key}` })
  }
  return items
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const index = useMemo(buildIndex, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open) {
      setQ('')
      setActive(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  const results = useMemo(() => {
    if (!q.trim()) return index.filter((i) => i.group === 'Areas')
    const needle = q.toLowerCase()
    return index.filter((i) => i.label.toLowerCase().includes(needle)).slice(0, 40)
  }, [q, index])

  useEffect(() => setActive(0), [q])

  if (!open) return null

  const go = (href: string) => {
    window.location.hash = href.replace(/^#/, '')
    setOpen(false)
  }

  return (
    <div className="cmdk-scrim" onMouseDown={() => setOpen(false)}>
      <div
        className="cmdk"
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <label className="sr-only" htmlFor="cmdk-input">
          Search lessons, problems and areas
        </label>
        <input
          id="cmdk-input"
          ref={inputRef}
          className="cmdk-input"
          value={q}
          placeholder="Search…"
          autoComplete="off"
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setActive((i) => Math.min(i + 1, results.length - 1))
            } else if (e.key === 'ArrowUp') {
              e.preventDefault()
              setActive((i) => Math.max(i - 1, 0))
            } else if (e.key === 'Enter' && results[active]) {
              e.preventDefault()
              go(results[active].href)
            }
          }}
        />
        <ul className="cmdk-list" role="listbox" aria-label="Results">
          {results.map((r, i) => (
            <li key={r.id}>
              <button
                type="button"
                role="option"
                aria-selected={i === active}
                className={`cmdk-item ${i === active ? 'on' : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => go(r.href)}
              >
                <span className="cmdk-label">{r.label}</span>
                <span className="cmdk-group">{r.group}</span>
              </button>
            </li>
          ))}
          {results.length === 0 && <li className="cmdk-empty">No match</li>}
        </ul>
      </div>
    </div>
  )
}
