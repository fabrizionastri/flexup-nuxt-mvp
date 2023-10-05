import { defineVitestConfig } from 'nuxt-vitest/config'
import path from 'path'
export default defineVitestConfig({
  plugins: [
    // vue()
  ],
  test: {
    environment: 'nuxt',
    globals: true
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './app'),
      mocks: path.resolve(__dirname, './__mocks__'),
      utils: path.resolve(__dirname, './utils'),
      app: path.resolve(__dirname, './app'),
      api: path.resolve(__dirname, './api'),
      server: path.resolve(__dirname, './app/server'),
      components: path.resolve(__dirname, './app/components'),
      layouts: path.resolve(__dirname, './app/layouts'),
      pages: path.resolve(__dirname, './app/pages'),
      composables: path.resolve(__dirname, './app/composables')
    }
  }
})
