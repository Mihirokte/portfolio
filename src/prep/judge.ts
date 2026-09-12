import type { Problem, RunOutcome, TestResult } from './types'

export type JudgeState = 'booting' | 'ready' | 'failed'

type Pending = {
  resolve: (o: RunOutcome) => void
  timer: ReturnType<typeof setTimeout>
}

/** Wraps the Pyodide worker. Timeout = terminate + respawn (works even when
 * user code is stuck in an infinite loop — no SharedArrayBuffer needed). */
export class Judge {
  private worker: Worker | null = null
  private pending = new Map<string, Pending>()
  private seq = 0
  state: JudgeState = 'booting'
  onState: (s: JudgeState) => void = () => {}

  start(): void {
    if (this.worker) return
    this.spawn()
  }

  private spawn(): void {
    this.state = 'booting'
    this.onState(this.state)
    this.worker = new Worker(`${import.meta.env.BASE_URL}prep/judge-worker.js`)
    this.worker.onmessage = (e: MessageEvent) => {
      const msg = e.data
      if (msg.type === 'ready') {
        this.state = 'ready'
        this.onState(this.state)
        return
      }
      if (msg.type === 'boot_error') {
        this.state = 'failed'
        this.onState(this.state)
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

  run(code: string, problem: Problem, timeoutMs = 15000): Promise<RunOutcome> {
    this.start()
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
