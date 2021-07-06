// @ts-nocheck

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgr from 'vite-plugin-svgr'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/4class-jiali/',
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: { 'primary-color': '#13c2c2' },
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    reactRefresh(),
    svgr(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    })
  ]
})
