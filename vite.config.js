import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import vueJsx from '@vitejs/plugin-vue2-jsx'
import { viteMockServe } from '@vue-kits/vite-plugin-mock'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 20107,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
      watchFiles: false,
    }),
  ],
})
