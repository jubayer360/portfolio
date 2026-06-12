import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/unravel_hexa/',
  build: {
    // Copy index.html to 404.html for SPA routing on static hosts
    rollupOptions: {
      input: 'index.html',
    },
  },
})
