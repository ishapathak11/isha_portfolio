import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Always use base path for production builds (GitHub Pages)
  // For local dev, mode is 'development' so base will be '/'
  const base = mode === 'production' ? '/isha_portfolio/' : '/'
  
  return {
    plugins: [react()],
    base,
  }
})
