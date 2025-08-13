import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  preview: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      '.nailsalon.club', // Allow all subdomains of nailsalon.club
      'qw88sw8o08wc8okcog4oskos.nailsalon.club', // Specific Coolify domain
    ],
  },
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
      '.nailsalon.club', // Allow all subdomains of nailsalon.club
      'qw88sw8o08wc8okcog4oskos.nailsalon.club', // Specific Coolify domain
    ],
  },
})
