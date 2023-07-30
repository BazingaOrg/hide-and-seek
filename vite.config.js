import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'arcoblue-1': '#F5E8FF',
          'arcoblue-2': '#DDBEF6',
          'arcoblue-3': '#C396ED',
          'arcoblue-4': '#A871E3',
          'arcoblue-5': '#8D4EDA',
          'arcoblue-6': '#722ED1',
          'arcoblue-7': '#551DB0'
        },
        javascriptEnabled: true
      }
    }
  }
})
