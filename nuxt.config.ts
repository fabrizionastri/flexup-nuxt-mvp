// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/eslint-module', 'nuxt-vitest'],
  plugins: ['./plugins/vuetify.js'],
  css: ['@/assets/main.scss'],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  }
})
