import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from https://mihirokte.github.io/portfolio/ — GitHub Pages
// publishes the committed `docs/` folder on `main`.
export default defineConfig({
  base: '/portfolio/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: { output: { manualChunks: { three: ['three'] } } },
  },
  plugins: [react(), tailwindcss()],
})
