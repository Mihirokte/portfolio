import { defineConfig } from 'vite'

// Served from https://mihirokte.info — GitHub Pages publishes the committed `docs/` folder on `main`.
// One page: the room (index.html + src/scene). The prep portal lives in its own repo, Mihirokte/prep.
export default defineConfig({
  base: '/',
  build: { outDir: 'docs', emptyOutDir: true },
})
