import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: true,
    open: false // Não abre automaticamente o browser
  },
  build: {
    outDir: 'dist'
  }
})
