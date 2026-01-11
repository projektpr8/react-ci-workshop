import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// UWAGA: Zmień base na nazwę TWOJEGO repozytorium.
// Przykład: repo 'react-ci-workshop' => base: '/react-ci-workshop/'
export default defineConfig({
  plugins: [react()],
  base: '/react-ci-workshop/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
})
