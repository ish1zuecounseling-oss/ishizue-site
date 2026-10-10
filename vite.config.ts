import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  // プリレンダリング用ビルド(vite build --ssr)で、CommonJS のライブラリを取り込んで読み込めるようにする
  ssr: {
    noExternal: ["react-helmet-async"],
  },
})
