import { defineVitestConfig } from 'nuxt-vitest/config'
import path from 'path'
import { fileURLToPath } from 'node:url'
export default defineVitestConfig({
  // plugins: path.resolve(__dirname,  vue()  ],
  test: {
    environment: 'nuxt',
    globals: true,
    includeSource: ['api/**/*.{js,ts}', 'app/**/*.{js,ts,vue}'],
    root: fileURLToPath(new URL('./', import.meta.url))
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, './app'),
      components: path.resolve(__dirname, './app/components'),
      composables: path.resolve(__dirname, './app/composables'),
      layouts: path.resolve(__dirname, './app/layouts'),
      pages: path.resolve(__dirname, './app/pages'),
      server: path.resolve(__dirname, './app/server'),
      usecases: path.resolve(__dirname, './app/core/usecases'),
      api: path.resolve(__dirname, './api'),
      adapters: path.resolve(__dirname, './api/adapters'),
      entities: path.resolve(__dirname, './api/core/entities'),
      gateways: path.resolve(__dirname, './api/core/gateways'),
      mock: path.resolve(__dirname, './api/mock'),
      utils: path.resolve(__dirname, './api/utils')
      // '~': path.resolve(__dirname, './'),
      // '~/*': path.resolve(__dirname, './*'),
      // '@': path.resolve(__dirname, './app'),
      // '@/*': path.resolve(__dirname, './app/*'),
      // 'api/*': path.resolve(__dirname, './api/*'),
      // 'app/*': path.resolve(__dirname, './app/*'),
      // 'src/*': path.resolve(__dirname, './api/*', './api'),
      // 'core/*': path.resolve(__dirname, './api/core/*', './api/core'),
      // 'entities/*': path.resolve(__dirname, './api/core/entities/*', './api/core/entities'),
      // 'usecases/*': path.resolve(__dirname, './api/core/usecases/*', './api/core/usecases'),
      // 'gateways/*': path.resolve(__dirname, './api/core/gateways/*', './api/core/gateways'),
      // 'adapters/*': path.resolve(__dirname, './api/adapters/*', './api/adapters'),
      // 'utils/*': path.resolve(__dirname, './api/utils/*', './api/utils'),
      // 'mock/*': path.resolve(__dirname, './api/mock/*', './api/mock')
    }
  }
})
