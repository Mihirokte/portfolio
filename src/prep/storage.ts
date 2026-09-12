import type { Progress, ProgressEntry, Status } from './types'

const KEY = 'prep-progress-v1'

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Progress) : {}
  } catch {
    return {}
  }
}

export function saveProgress(p: Progress): void {
  localStorage.setItem(KEY, JSON.stringify(p))
}

export function updateEntry(p: Progress, id: string, patch: Partial<ProgressEntry>): Progress {
  const prev: ProgressEntry = p[id] ?? { status: 'none' as Status, notes: '', lastTouched: '' }
  const next = { ...p, [id]: { ...prev, ...patch, lastTouched: new Date().toISOString() } }
  saveProgress(next)
  return next
}

export function exportProgress(): void {
  const blob = new Blob([localStorage.getItem(KEY) ?? '{}'], { type: 'application/json' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = `prep-progress-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(a.href)
}

export function importProgress(file: File): Promise<Progress> {
  return file.text().then((text) => {
    const incoming = JSON.parse(text) as Progress
    if (typeof incoming !== 'object' || incoming === null) throw new Error('not a progress file')
    const merged = { ...loadProgress(), ...incoming }
    saveProgress(merged)
    return merged
  })
}
