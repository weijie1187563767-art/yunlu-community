// 构建后把 dist/index.html 复制为 dist/404.html，
// 使 SPA（Vue Router history 模式）在静态托管上刷新子页面不 404。
// 由 package.json 的 build 脚本自动调用，跨平台（Cloudflare Linux / 本地 Windows 均可用）。
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const src = path.join(root, 'dist', 'index.html')
const dest = path.join(root, 'dist', '404.html')

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest)
  console.log('[copy-404] dist/404.html 已生成')
} else {
  console.error('[copy-404] 未找到 dist/index.html，请确认 vite build 已先执行')
  process.exit(1)
}
