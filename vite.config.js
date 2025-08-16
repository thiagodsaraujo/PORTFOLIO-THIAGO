import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Ignorar módulos problemáticos do Node.js
      external: ['fsevents'],
      
      // Configurar múltiplas páginas
      input: {
        main: './index.html',
        blog: './blog.html',
        'artigo-microservicos': './artigo-microservicos.html',
        'artigo-react-performance': './artigo-react-performance.html',
        'project-detail': './project-detail.html'
      },
      
      // Ignorar avisos específicos
      onwarn(warning, warn) {
        // Ignorar avisos do fsevents e módulos do Node.js
        if (
          warning.code === 'UNRESOLVED_IMPORT' && 
          (warning.id?.includes('fsevents') || 
           warning.id?.includes('node:') ||
           warning.id?.includes('crypto') ||
           warning.id?.includes('buffer'))
        ) {
          return
        }
        warn(warning)
      }
    }
  },
  
  server: {
    port: 5173,
    open: true
  },
  
  preview: {
    port: 4173,
    open: true
  }
})