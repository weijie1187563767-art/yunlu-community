import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { cloudflare } from "@cloudflare/vite-plugin";

// base 使用相对路径，方便部署到子目录或任意静态托管
export default defineConfig({
  plugins: [vue(), cloudflare()],
  base: './'
})