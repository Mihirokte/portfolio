import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Standalone build of the prep portal, served at https://prep.mihirokte.info
// (its own GitHub Pages site, repo Mihirokte/prep). `npm run deploy:prep`.
export default defineConfig({
  resolve: { alias: { '@': path.resolve(import.meta.dirname, './src') } },
  root: 'prep',
  base: '/',
  publicDir: false, // public/prep/* is copied in by the deploy script
  define: { 'import.meta.env.VITE_HOME_URL': JSON.stringify('https://mihirokte.info') },
  build: {
    outDir: '../dist-prep',
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss()],
})
