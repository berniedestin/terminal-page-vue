import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/terminal-page/",
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
// formerly in package.json:
// "scripts": {
//   "dev": "vite",
//   "build": "vite build",//"run-p type-check \"build-only {@}\" --",
//   "preview": "vite preview",
//   "test:unit": "vitest",
//   "build-only": "vite build",
//   "type-check": "vue-tsc --build --force"
// }
