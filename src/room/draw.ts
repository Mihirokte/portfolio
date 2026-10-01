import { PALETTE as P } from '../palette'
import { SPRITES, type SpriteMeta, type SpriteName } from './layout'

export type Sheets = Record<SpriteName, HTMLImageElement>

export const loadSheets = (): Promise<Sheets> => {
  const names = (Object.keys(SPRITES) as (SpriteName | '_hand')[]).filter((n): n is SpriteName => n !== '_hand')
  return Promise.all(
    names.map(
      (n) =>
        new Promise<[SpriteName, HTMLImageElement]>((resolve, reject) => {
          const img = new Image()
          img.onload = () => resolve([n, img])
          img.onerror = () => reject(new Error(`sprite ${n} failed to load`))
          img.src = `/room/${n}.png`
        }),
    ),
  ).then((pairs) => Object.fromEntries(pairs) as Sheets)
}

/** Inclusive-corner rectangle, matching the Pillow helpers the art was built with. */
const R = (g: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, c: string) => {
  g.fillStyle = c
  g.fillRect(x0, y0, x1 - x0 + 1, y1 - y0 + 1)
}

/**
 * Wall, skirting board and plank floor across the whole native canvas.
 * `ox` is the room's left edge, so the plank seams stay anchored to the room
 * however wide the viewport is; `floorY` is the first plank row.
 */
export function paintBackdrop(g: CanvasRenderingContext2D, w: number, h: number, ox: number, floorY: number) {
  R(g, 0, 0, w - 1, floorY - 1, P.wall)
  R(g, 0, floorY - 6, w - 1, floorY - 1, P.skirt)
  R(g, 0, floorY - 6, w - 1, floorY - 6, P.offWhite)
  R(g, 0, floorY - 1, w - 1, floorY - 1, P.skirtDark)
  let band = 0
  for (let y = floorY; y < h; y += 7, band++) {
    const tone = P.floor[band % 3]
    R(g, 0, y, w - 1, y + 6, tone)
    if (band === 0) {
      // 2x2 Bayer at level 2: a checkerboard of the darker tone
      g.fillStyle = P.floorDark
      for (let yy = y; yy <= y + 6; yy++) for (let x = (yy - y) % 2; x < w; x += 2) g.fillRect(x, yy, 1, 1)
    }
    R(g, 0, y + 6, w - 1, y + 6, P.floorLine)
    const off = (((ox + band * 29) % 64) + 64) % 64
    for (let sx = off - 64; sx < w + 64; sx += 64) {
      R(g, sx, y, sx, y + 5, P.floorLine)
      R(g, sx + 1, y, sx + 1, y + 5, P.floor[(band + 1) % 3])
    }
  }
}

export type Blit = { sheet: HTMLImageElement; meta: SpriteMeta; frame: number; row: number; x: number; y: number }

export const blit = (g: CanvasRenderingContext2D, b: Blit) => {
  const { meta: m } = b
  g.drawImage(b.sheet, b.frame * m.w, b.row * m.h, m.w, m.h, b.x, b.y, m.w, m.h)
}

let scratch: HTMLCanvasElement | null = null

/** One-pixel accent outline around a sprite's silhouette, drawn underneath it. */
export function blitOutlined(g: CanvasRenderingContext2D, b: Blit, color: string) {
  const { meta: m } = b
  scratch ??= document.createElement('canvas')
  const sw = m.w + 2
  const sh = m.h + 2
  if (scratch.width !== sw || scratch.height !== sh) {
    scratch.width = sw
    scratch.height = sh
  }
  const s = scratch.getContext('2d')!
  s.imageSmoothingEnabled = false
  s.globalCompositeOperation = 'source-over'
  s.clearRect(0, 0, sw, sh)
  for (const [dx, dy] of [
    [0, 1],
    [2, 1],
    [1, 0],
    [1, 2],
  ]) {
    s.drawImage(b.sheet, b.frame * m.w, b.row * m.h, m.w, m.h, dx, dy, m.w, m.h)
  }
  s.globalCompositeOperation = 'source-in'
  s.fillStyle = color
  s.fillRect(0, 0, sw, sh)
  g.drawImage(scratch, b.x - 1, b.y - 1)
  blit(g, b)
}

/** Dotted pixel rectangle (used for the laptop lid when it is the hovered thing). */
export function dottedRect(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, c: string) {
  g.fillStyle = c
  for (let i = 0; i < w; i += 2) {
    g.fillRect(x + i, y, 1, 1)
    g.fillRect(x + i, y + h - 1, 1, 1)
  }
  for (let j = 0; j < h; j += 2) {
    g.fillRect(x, y + j, 1, 1)
    g.fillRect(x + w - 1, y + j, 1, 1)
  }
}
