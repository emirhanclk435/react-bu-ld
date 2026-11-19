import path from "path" // 1. Bu satırı ekleyin
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  resolve: { // 2. Bu resolve bloğunu ekleyin
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server:{
    open:true,
  },
})
