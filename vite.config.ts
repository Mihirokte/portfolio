import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from https://mihirokte.github.io/portfolio/ — GitHub Pages
// publishes the committed `docs/` folder on `main`.
// Two pages: the portfolio itself (/) and the prep portal (/prep/).
export default defineConfig({
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        prep: 'prep/index.html',
      },
      output: { manualChunks: { three: ['three'] } },
    },
  },
  plugins: [react(), tailwindcss()],
})
