import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base 使用相对路径，方便部署到子目录或任意静态托管
export default defineConfig({
  plugins: [vue()],
  base: './'
})
