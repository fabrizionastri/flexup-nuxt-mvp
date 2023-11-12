// vitest.config.ts

import { defineVitestConfig } from 'nuxt-vitest/config'
import path from 'path'
import { fileURLToPath } from 'node:url'
// import { InlineConfig } from 'vite' // Import the InlineConfig type

const config = {
  // plugins: path.resolve(__dirname,  vue()  ],
  test: {
    // environment: 'nuxt',
    globals: true,
    includeSource: [
      'api/**/*.{js,ts}'
      // 'app/**/*.{js,ts,vue}',
      // 'lib/**/*.{js,ts,vue}',
      // 'mock/**/*.{js,ts,vue,json}'
    ],
    root: fileURLToPath(new URL('./', import.meta.url))
  },
  exclude: [
    '**/_docs/**' // Exclude the _docs folder
  ],
  resolve: {
    alias: {
      app: path.resolve(__dirname, './app'),
      components: path.resolve(__dirname, './app/components'),
      composables: path.resolve(__dirname, './app/composables'),
      layouts: path.resolve(__dirname, './app/layouts'),
      pages: path.resolve(__dirname, './app/pages'),
      server: path.resolve(__dirname, './app/server'),
      api: path.resolve(__dirname, './api'),
      adapters: path.resolve(__dirname, './api/adapters'),
      gateways: path.resolve(__dirname, './api/gateways'),
      usecases: path.resolve(__dirname, './api/usecases'),
      mock: path.resolve(__dirname, './mock'),
      lib: path.resolve(__dirname, './lib'),
      entities: path.resolve(__dirname, './lib/entities'),
      utils: path.resolve(__dirname, './lib/utils')
    }
  }
}

export default defineVitestConfig(config)
