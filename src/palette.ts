// Room palette (light only). The backdrop is drawn in canvas with these; the
// sprites in public/room/ were exported from the same table.
export const PALETTE = {
  wall: '#F4EEE0',
  wallShade: '#E7DFCD',
  skirt: '#D9CDB4',
  skirtDark: '#B9A888',
  floor: ['#C9A070', '#BE9565', '#B48A5A'] as const,
  floorDark: '#9C7446',
  floorLine: '#8A6238',
  offWhite: '#F7F7F2',
  ink: '#3A3A40', // 10.2:1 on paper
  ink2: '#6B6B73', // 5.0:1 on paper
  accent: '#B5482F', // 5.3:1 on paper: links, hover outline, focus
  paper: '#FBF8F1',
  paperShade: '#E6DFCF',
} as const
