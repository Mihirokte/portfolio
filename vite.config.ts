import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Served from https://mihirokte.info — GitHub Pages publishes the committed
// `docs/` folder on `main`. Two pages: the portfolio (/) and the prep portal (/prep/).
export default defineConfig({
  base: '/',
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
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
