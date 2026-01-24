import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/' for root domain deployment (cardzzz.com)
  // Vite will handle path transformation automatically during build
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
