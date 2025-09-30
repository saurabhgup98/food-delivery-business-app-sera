import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
    host: true, // This exposes the server to your local network
    // Alternative: you can also use '0.0.0.0' instead of true
  },
  build: {
    outDir: 'dist',
  },
})
