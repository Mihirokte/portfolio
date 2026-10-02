# Mihir Okte — portfolio

Personal site at https://mihirokte.info (GitHub Pages serves the committed `docs/` folder on `main`;
https://mihirokte.github.io/portfolio/ redirects there).

The room, taken apart: a three.js cutaway of my room. Scroll pulls its four pieces apart, pointers anchored
to the geometry open in-place modals. Night by default, day on the switch; both are lit only by lights that
are really there (the lamp, the line light, the red tube, the screens; by day the sun through the window
on the front wall).

- `index.html` — the page and all the copy
- `src/scene/` — vanilla ES modules: `main.js` (camera, scroll, pointers, modals, themes), `room.js` (the
  geometry and lights), `textures.js` (canvas-drawn textures), `helpers.js` (primitives, theme registry)
- `public/fonts`, `public/img` — pixel fonts (Pixelta, Pixel Operator, Determination) and sprites

Commands: `npm run dev`, `npm run build` (to `docs/`), `npm run lint`.

The prep portal (https://prep.mihirokte.info) lives in its own repo, Mihirokte/prep.
