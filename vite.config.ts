// @ts-nocheck

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgr from 'vite-plugin-svgr'
import { visualizer } from 'rollup-plugin-visualizer';

const htmlPlugin = () => {
  // 替换index.html中的资源文件的前缀，用于CDN加速，例如替换成jsdelivr
  function replace(str, options={}) {
    const { publicPath='/', tags= [], id } = options;
    tags.forEach(tag=> {
      const reg = new RegExp(`${tag}="${id}`)
      str = str.replace(reg, `${tag}="${publicPath}`)
      if (str.match(reg)) {
        options.tags=[tag]
        str = replace(str, options)
      }
    })
    return str
  }
  return {
    name: 'html-transform',
    apply: 'build',
    transformIndexHtml(html) {
      return replace(html, {
        publicPath: 'https://cdn.jsdelivr.net/gh/xlzy520/4class-jiali/@gh-pages/',
        tags: ['src', 'href'],
        id: '\/4class-jiali'
      })
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/4class-jiali/',
  // base: 'https://cdn.jsdelivr.net/gh/xlzy520/4class-jiali/@gh-pages/',
  server: {
    port: 9927,
  },
  build: {
    minify: true,
    brotliSize: false,
  },
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
    htmlPlugin(),
    visualizer()
  ]
})
