import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quienesSomos: resolve(__dirname, 'quienes-somos.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        blog: resolve(__dirname, 'blog.html'), // <-- AÑADIDO
        contacto: resolve(__dirname, 'contacto.html'),
        login: resolve(__dirname, 'login.html'),
        registro: resolve(__dirname, 'registro.html'),
        avisoLegal: resolve(__dirname, 'aviso-legal.html'),
        notFound: resolve(__dirname, '404.html'),
        // Subcarpetas
        algoritmos: resolve(__dirname, 'blogs/algoritmos.html'),
        diagramas: resolve(__dirname, 'blogs/diagramas.html'),
        blockchain: resolve(__dirname, 'cursos/blockchain.html'),
        fullstack: resolve(__dirname, 'cursos/full-stack.html'),
      },
    },
  },
  server: {
    host: true,
    watch: {
      usePolling: true,
    },
  },
});