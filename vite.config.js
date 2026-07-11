import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// base 使用相对路径，方便部署到子目录或任意静态托管
export default defineConfig({
  plugins: [
    vue(),
    // 复制 index.html 为 404.html，使 SPA history 路由在静态托管上刷新子页面不 404
    // （替代 Cloudflare _redirects，避免新版 Wrangler 报「无限循环」）
    {
      name: 'spa-404-fallback',
      closeBundle() {
        const src = path.resolve(__dirname, 'dist/index.html')
        const dest = path.resolve(__dirname, 'dist/404.html')
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest)
          console.log('[spa-404] dist/404.html 已生成')
        }
      }
    }
  ],
  base: './'
})
