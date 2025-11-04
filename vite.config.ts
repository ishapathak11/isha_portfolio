import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // For GitHub Pages: change '/portfolio/' to '/your-repo-name/' if different
  // For Vercel/Netlify: change to '/' or remove this line
  // For local development: base will be '/' automatically
  base: mode === 'production' ? '/portfolio/' : '/',
}))
