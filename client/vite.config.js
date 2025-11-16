import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    require: undefined
  },
  build: {
    sourcemap: true,
    minify: 'esbuild',
    target: 'esnext'
  }
})
