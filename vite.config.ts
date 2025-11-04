import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Using custom domain isha.tech, so base path is '/' (root)
  // For local dev, mode is 'development' so base will be '/'
  const base = '/'
  
  return {
    plugins: [react()],
    base,
  }
})
