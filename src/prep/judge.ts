import type { Problem, RunOutcome, TestResult } from './types'

export type JudgeState = 'booting' | 'ready' | 'failed'

type Pending = {
  resolve: (o: RunOutcome) => void
  timer: ReturnType<typeof setTimeout>
}

const BOOT_BUDGET_MS = 120_000 // first visit downloads the Python runtime (~10 MB)

/** Wraps the Pyodide worker. The execution timeout only starts AFTER the
 * runtime is booted; timeout = terminate + respawn (works even when user
 * code is stuck in an infinite loop — no SharedArrayBuffer needed). */
export class Judge {
  private worker: Worker | null = null
  private pending = new Map<string, Pending>()
  private seq = 0
  private ready: Promise<void> = Promise.resolve()
  private readyOk: (() => void) | null = null
  private readyFail: ((e: Error) => void) | null = null
  state: JudgeState = 'booting'
  onState: (s: JudgeState) => void = () => {}

  start(): void {
    if (this.worker) return
    this.spawn()
  }

  private setState(s: JudgeState): void {
    this.state = s
    this.onState(s)
  }

  private spawn(): void {
    this.setState('booting')
    this.ready = new Promise<void>((ok, fail) => {
      this.readyOk = ok
      this.readyFail = fail
    })
    this.ready.catch(() => {}) // avoid unhandled rejection when nobody awaits
    this.worker = new Worker(`${import.meta.env.BASE_URL}prep/judge-worker.js`)
    this.worker.onmessage = (e: MessageEvent) => {
      const msg = e.data
      if (msg.type === 'ready') {
        this.setState('ready')
        this.readyOk?.()
        return
      }
      if (msg.type === 'boot_error') {
        this.setState('failed')
        this.readyFail?.(new Error(msg.message as string))
        return
      }
      const p = this.pending.get(msg.id)
      if (!p) return
      this.pending.delete(msg.id)
      clearTimeout(p.timer)
      if (msg.type === 'result') p.resolve({ status: 'ok', results: msg.results as TestResult[] })
      else p.resolve({ status: 'error', message: msg.message as string })
    }
  }

  async run(code: string, problem: Problem, timeoutMs = 15000): Promise<RunOutcome> {
    this.start()
    // Wait for the runtime itself first — booting is not the user's code.
    try {
      await Promise.race([
        this.ready,
        new Promise<never>((_, rej) =>
          setTimeout(() => rej(new Error('boot budget exceeded')), BOOT_BUDGET_MS),
        ),
      ])
    } catch (e) {
      return {
        status: 'error',
        message:
          'The Python runtime could not load (' +
          (e instanceof Error ? e.message : String(e)) +
          '). Check your connection and reload the page.',
      }
    }
    const id = String(++this.seq)
    return new Promise<RunOutcome>((resolve) => {
      const timer = setTimeout(() => {
        this.pending.delete(id)
        // A stuck run means a stuck interpreter: kill the worker, respawn.
        this.worker?.terminate()
        this.worker = null
        for (const [pid, pp] of this.pending) {
          clearTimeout(pp.timer)
          pp.resolve({ status: 'error', message: 'cancelled by a timed-out run' })
          this.pending.delete(pid)
        }
        this.spawn()
        resolve({ status: 'timeout' })
      }, timeoutMs)
      this.pending.set(id, { resolve, timer })
      this.worker!.postMessage({ type: 'run', id, code, problem })
    })
  }
}

export const judge = new Judge()
