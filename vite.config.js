import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  const isGithubPages = process.env.GITHUB_PAGES === 'true'

  return {
    plugins: [react()],
    base: isGithubPages ? '/react-ci-workshop/' : '/',
    test: {
      environment: 'jsdom',
      setupFiles: './src/test/setup.js',
    },
  }
})

