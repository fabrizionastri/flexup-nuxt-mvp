// nuxt.config.ts

import { fileURLToPath } from 'url'

// I had to add a nuxt.d.ts file to fix it.
// TODO: eslint-disable-next-line // this does not work
export default defineNuxtConfig({
  // devServer: {
  //   host: '0.0.0.0', // Listen to all network interfaces
  //   port: 3000 // Default port is 3000
  // },
  srcDir: 'app',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    'nuxt-vitest',
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  pinia: {
    storesDirs: ['./stores/**']
  },
  buildModules: ['@vueuse/nuxt'],
  plugins: [
    //
  ],
  router: {
    middleware: ['errorHandler']
  },
  imports: {
    dirs: ['composables/**', '../lib/**', '../mock/**']
  },
  alias: {
    'lib/': fileURLToPath(new URL('./lib', import.meta.url)),
    'utils/': fileURLToPath(new URL('./lib/utils', import.meta.url)),
    'entities/': fileURLToPath(new URL('./lib/entities', import.meta.url)),
    'mock/': fileURLToPath(new URL('./mock', import.meta.url))
  },
  // css: ['@/assets/main.css'], // removed, use tailwind instead
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  }
})
