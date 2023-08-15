import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { viteMockServe } from '@vue-kits/vite-plugin-mock'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
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
  esbuild: {
    loader: 'jsx',
    include: /src\/.*.jsx?$/,
  },
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
      watchFiles: false,
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
      symbolId: 'icon-[name]',
    }),
  ],
})
