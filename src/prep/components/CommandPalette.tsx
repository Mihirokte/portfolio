import { useEffect, useMemo, useState } from 'react'
import { COURSES } from '../content'
import { COMPANIES } from '../content/companies'
import { AREAS } from '../data/drills'
import { HOME_AREAS } from '../areas'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command'

// Global navigation lives here, so no page needs visible chrome.
// Built on shadcn's Command (cmdk) + Dialog primitives.

interface Entry {
  id: string
  label: string
  group: string
  href: string
}

function buildIndex(): Entry[] {
  const out: Entry[] = []
  for (const a of HOME_AREAS) out.push({ id: `a-${a.key}`, label: a.label, group: 'Areas', href: a.href })
  for (const c of COURSES)
    for (const ch of c.chapters)
      for (const l of ch.lessons)
        out.push({ id: `l-${l.id}`, label: l.title, group: c.label, href: `#/study/${c.key}/${l.id}` })
  for (const a of AREAS)
    for (const d of a.drills)
      out.push({ id: `d-${d.id}`, label: d.title, group: `${a.label} problems`, href: `#/drill/${d.id}` })
  for (const co of COMPANIES)
    out.push({ id: `c-${co.key}`, label: co.name, group: 'Companies', href: `#/company/${co.key}` })
  return out
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const index = useMemo(buildIndex, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // group entries, keeping Areas first
  const groups = useMemo(() => {
    const m = new Map<string, Entry[]>()
    for (const e of index) {
      if (!m.has(e.group)) m.set(e.group, [])
      m.get(e.group)!.push(e)
    }
    return [...m.entries()].sort(([a], [b]) => (a === 'Areas' ? -1 : b === 'Areas' ? 1 : 0))
  }, [index])

  const go = (href: string) => {
    window.location.hash = href.replace(/^#/, '')
    setOpen(false)
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen} title="Search" description="Jump to anything">
      <CommandInput placeholder="Search…" />
      <CommandList className="max-h-[60vh]">
        <CommandEmpty>No match.</CommandEmpty>
        {groups.map(([group, entries]) => (
          <CommandGroup key={group} heading={group}>
            {entries.map((e) => (
              <CommandItem key={e.id} value={`${e.label} ${e.group}`} onSelect={() => go(e.href)}>
                {e.label}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
