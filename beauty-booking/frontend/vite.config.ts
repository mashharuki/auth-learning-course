import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': 'http://localhost:8080',
      '/oauth2': 'http://localhost:8080',
    },
  },
})
