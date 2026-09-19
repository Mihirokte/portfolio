export interface Drill {
  id: string
  title: string
  topic: string
  difficulty: string
  prompt: string
  link: string
  notes: string
  /** Detailed markdown walkthrough, revealed on demand. Only uses concepts
   *  taught in the area's lessons; may reference them by name. */
  solution?: string
}

export interface Area {
  key: string
  label: string
  drills: Drill[]
}

export interface TestCase {
  input: unknown[]
  expected: unknown
  kind: string
  source?: string
}

export interface Signature {
  name: string
  type?: string // 'class' for design problems
  params: { name: string; kind?: string }[]
  returns?: { kind?: string }
}

export interface Problem {
  id: string
  slug: string
  title: string
  difficulty: string
  topic?: string
  link: string
  description_md: string
  signature: Signature
  starter_code: string
  reference_solution?: string
  solution_source?: string
  mode?: string // 'inplace'
  inplace_arg?: number
  compare?: string // exact | unordered | unordered_deep | float | custom
  checker_code?: string
  tests: TestCase[]
}

export type Status = 'none' | 'attempted' | 'solved' | 'revisit'

export interface ProgressEntry {
  status: Status
  notes: string
  code?: string
  lastTouched: string
}

export type Progress = Record<string, ProgressEntry>

export interface TestResult {
  passed: boolean
  error: string | null
  output: unknown
  expected: unknown
  stdout: string
  time_ms: number
}

export type RunOutcome =
  | { status: 'ok'; results: TestResult[] }
  | { status: 'timeout' }
  | { status: 'error'; message: string }
