import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: 'public', // Asegura que la carpeta public se copie a la raíz de dist
  build: {
    outDir: 'dist',
    target: 'esnext',
    sourcemap: false,
    minify: 'terser',
    assetsInlineLimit: 0, // Evita inlinear archivos pequeños, fuerza copia de archivos
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    strictPort: false,
  },
})
