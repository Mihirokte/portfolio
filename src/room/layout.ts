import manifest from './sprites.json'
import type { SectionId } from '../nav'

export type SpriteName = Exclude<keyof typeof manifest, '_hand'>
export type SpriteMeta = { w: number; h: number; frames: number; rows: number; dx: number; dy: number }
export const SPRITES = manifest as unknown as Record<SpriteName, SpriteMeta> & {
  _hand: { w: number; h: number; hotx: number; hoty: number }
}

/** What an object does when touched. Sections open a panel; the rest are flavour. */
export type Target = SectionId | 'resume' | 'cat' | 'medal' | 'star'

export type Rect = { x: number; y: number; w: number; h: number }

export type Placement = {
  sprite: SpriteName
  /** Draw-call origin in room pixels (same coordinates the Pillow layout used). */
  x: number
  y: number
  target?: Target
  /** Override the hit area (room pixels); defaults to the sprite's bounds. */
  hit?: Rect
}

export type Layout = {
  w: number
  h: number
  /** First floor row. The wall is above, planks below. */
  floor: number
  /** Painted back to front. */
  items: Placement[]
  /** The laptop lid inside the figure, in room pixels. */
  laptop: Rect
  figure: Rect
}

export const LABELS: Record<Target, string> = {
  about: 'about',
  work: 'work',
  skills: 'skills',
  projects: 'projects',
  hobbies: 'hobbies',
  contact: 'contact',
  resume: 'resume',
  cat: 'shh',
  medal: 'kvpy 2018 · air 233',
  star: 'ntse 2017 · national scholar',
}

/** Sprite bounds in room pixels for a placement. */
export const boundsOf = (p: Placement): Rect => {
  const m = SPRITES[p.sprite]
  return { x: p.x + m.dx, y: p.y + m.dy, w: m.w, h: m.h }
}

export const hitOf = (p: Placement): Rect => p.hit ?? boundsOf(p)

// 360 x 210: at 1440 x 900 this shows at 4x, at 1920 x 1080 at 5x.
export const DESKTOP: Layout = {
  w: 360,
  h: 210,
  floor: 160,
  items: [
    { sprite: 'window_d', x: 14, y: 26 },
    { sprite: 'tapestry', x: 140, y: 14 },
    { sprite: 'shelf_d', x: 228, y: 48 },
    { sprite: 'cat', x: 264, y: 34, target: 'cat' },
    { sprite: 'frame_medal', x: 234, y: 98, target: 'medal' },
    { sprite: 'frame_star', x: 258, y: 98, target: 'star' },
    { sprite: 'mailbox', x: 282, y: 100, target: 'contact' },
    { sprite: 'door', x: 312, y: 52, target: 'resume', hit: { x: 312, y: 52, w: 48, h: 108 } },
    { sprite: 'plant', x: 10, y: 164 },
    { sprite: 'rug_d', x: 118, y: 168 },
    { sprite: 'toolbox', x: 56, y: 176, target: 'skills' },
    { sprite: 'boxes', x: 252, y: 206, target: 'work' },
    { sprite: 'figure', x: 152, y: 88, target: 'about', hit: { x: 159, y: 85, w: 42, h: 122 } },
    { sprite: 'football', x: 122, y: 186, target: 'hobbies' },
  ],
  laptop: { x: 165, y: 141, w: 30, h: 28 },
  figure: { x: 159, y: 85, w: 42, h: 122 },
}

// 195 x 300 portrait: 2x on a 390 wide phone.
export const PORTRAIT: Layout = {
  w: 195,
  h: 300,
  floor: 226,
  items: [
    { sprite: 'window_m', x: 4, y: 36 },
    { sprite: 'tapestry', x: 58, y: 26 },
    { sprite: 'shelf_m', x: 140, y: 66 },
    { sprite: 'cat', x: 158, y: 52, target: 'cat' },
    { sprite: 'frame_medal', x: 8, y: 98, target: 'medal' },
    { sprite: 'frame_star', x: 32, y: 98, target: 'star' },
    { sprite: 'door', x: 160, y: 118, target: 'resume', hit: { x: 160, y: 118, w: 35, h: 108 } },
    { sprite: 'mailbox', x: 130, y: 140, target: 'contact' },
    { sprite: 'rug_m', x: 52, y: 240 },
    { sprite: 'toolbox', x: 7, y: 228, target: 'skills' },
    { sprite: 'boxes', x: 150, y: 275, target: 'work' },
    { sprite: 'figure', x: 74, y: 155, target: 'about', hit: { x: 81, y: 152, w: 42, h: 122 } },
    { sprite: 'football', x: 18, y: 276, target: 'hobbies' },
  ],
  laptop: { x: 87, y: 208, w: 30, h: 28 },
  figure: { x: 81, y: 152, w: 42, h: 122 },
}

export const FPS = 12
export const CYCLE = 12
