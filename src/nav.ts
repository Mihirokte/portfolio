export type SceneId = 'about' | 'work' | 'skills' | 'projects' | 'contact'
export type Scene = { id: SceneId; label: string }

/** The ring of scenes, in stage order. */
export const SCENES: Scene[] = [
  { id: 'about', label: 'about' },
  { id: 'work', label: 'work' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'contact', label: 'contact' },
]

export const SCENE_IDS = SCENES.map((s) => s.id)

export const isSceneId = (s: string): s is SceneId => (SCENE_IDS as string[]).includes(s)

export const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
