import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    vue(),
    vueI18n({ enableInSFC: true })
  ],
  build: {
    chunkSizeWarningLimit: 2200,
  },
})