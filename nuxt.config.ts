// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devServer: {
  //   host: '0.0.0.0', // Listen to all network interfaces
  //   port: 3000 // Default port is 3000
  // },
  srcDir: 'app',
  devtools: { enabled: false },
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', 'nuxt-vitest'],
  plugins: [
    //
  ],
  // imports: {
  //   dirs: ['composables/**', '../utils/**']
  // },
  css: ['@/assets/main.css'],
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  }
})
