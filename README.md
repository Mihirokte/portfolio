# Mihir Okte — portfolio

Personal site at https://mihirokte.info (GitHub Pages serves the committed `docs/` folder on `main`;
https://mihirokte.github.io/portfolio/ redirects there).

The room: a three.js cutaway of my room, drawn flat as an isometric vector illustration. Every section
lives on a real surface in it: about in the open journal on the desk, work in an editor on the work laptop,
projects on the MacBook, skills in a terminal on the monitor, contact in a chat on the phone. Opening a
pointer (or clicking the surface itself) flies the camera across the room until that surface faces you and
fills the view at one CSS pixel per screen pixel; the interface boots there and you use it in place. The
terminal takes commands (`help`, `open work`, `theme day`); `Esc`, the wordmark or a click off the screen
flies back out. Night by default, day on the switch.

- `index.html` — the page, and every screen's markup and copy
- `src/scene/` — vanilla ES modules: `main.js` (camera, flights, lights, pointers, themes), `room.js` (the
  geometry, the palette, the surfaces the screens live on), `screens.js` (what each screen does),
  `textures.js` (canvas-drawn screens and prints, as seen from across the room), `helpers.js` (primitives,
  the flat toon material, theme registry)
- `public/fonts`, `public/img` — pixel fonts (Pixelta, Pixel Operator, Determination), the photo

Commands: `npm run dev`, `npm run build` (to `docs/`), `npm run lint`.

The prep portal (https://prep.mihirokte.info) lives in its own repo, Mihirokte/prep.
