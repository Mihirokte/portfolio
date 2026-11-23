# Mihir Okte — portfolio

Personal site at https://mihirokte.info (GitHub Pages serves the committed `docs/` folder on `main`;
https://mihirokte.github.io/portfolio/ redirects there).

The room: a three.js cutaway of my room, drawn flat as an isometric vector illustration: orthographic camera
on the true isometric angle, every surface a flat fill in one of three tones by the way it faces, a soft
low-saturation palette, hard shadows, no gloss or texture. Pointers anchored to the geometry open in-place
modals; hovering near my head makes the figure look back. Night by default, day on the switch. At night the
room is lit only by lights that are really there (the lamp, the line light, the red tube, the sign, the
screens); by day they are all switched off and the sun comes in through the window on the front wall.

- `index.html` — the page and all the copy
- `src/scene/` — vanilla ES modules: `main.js` (camera, lights, pointers, modals, themes), `room.js` (the
  geometry, the palette, the figure and the lamps), `textures.js` (canvas-drawn screens and prints),
  `helpers.js` (primitives, the flat toon material, theme registry)
- `public/fonts`, `public/img` — pixel fonts (Pixelta, Pixel Operator, Determination), sprites, the photo

Commands: `npm run dev`, `npm run build` (to `docs/`), `npm run lint`.

The prep portal (https://prep.mihirokte.info) lives in its own repo, Mihirokte/prep.
