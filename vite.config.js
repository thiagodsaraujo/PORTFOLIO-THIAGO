import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        blog: './blog.html',
        'artigo-microservicos': './artigo-microservicos.html',
        'artigo-react-performance': './artigo-react-performance.html',
        'project-detail': './project-detail.html'
      }
    }
  }
})