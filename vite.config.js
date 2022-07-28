import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import { splitVendorChunkPlugin } from 'vite'

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    vue(),
    vueI18n({ enableInSFC: true, enableLegacy: false, runtimeOnly: false }),
    splitVendorChunkPlugin()
  ],
  build: {
    chunkSizeWarningLimit: 1700,
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes('node_modules')) {
    //         return id.toString().split('node_modules/')[1].split('/')[0].toString();
    //       }
    //     }
    //   }
    // }
  },
})