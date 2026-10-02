# Mihir Okte — portfolio

Personal site at https://mihirokte.info (GitHub Pages serves the committed `docs/` folder on `main`;
https://mihirokte.github.io/portfolio/ redirects there).

- `/` — the room, taken apart: a three.js cutaway of my room. Scroll pulls its four pieces apart, pointers
  anchored to the geometry open in-place modals. Night by default, day on the switch; both are lit only by
  lights that are really there (the lamp, the line light, the red tube, the screens; by day the sun through
  the window on the front wall). Vanilla modules in `src/scene/`, copy in `index.html`, pixel fonts and
  sprites in `public/fonts` and `public/img`.
- `/prep/` — the prep portal (React + Vite + Tailwind), source in `src/prep/`. Also published on its own at
  https://prep.mihirokte.info with `npm run deploy:prep`.

Commands: `npm run dev`, `npm run build` (to `docs/`), `npm run lint`.
