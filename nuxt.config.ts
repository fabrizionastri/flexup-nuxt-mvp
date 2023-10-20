// https://nuxt.com/docs/api/configuration/nuxt-config

// I had to add a nuxt.d.ts file to fix it.
// TODO: eslint-disable-next-line // this does not work
export default defineNuxtConfig({
  // devServer: {
  //   host: '0.0.0.0', // Listen to all network interfaces
  //   port: 3000 // Default port is 3000
  // },
  srcDir: 'app',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module', 'nuxt-vitest', '@nuxt/image'],
  buildModules: ['@vueuse/nuxt'],
  plugins: [
    //
  ],
  imports: {
    dirs: ['composables/**', '../lib/**', '../mock/**']
  },
  // css: ['@/assets/main.css'], // removed, use tailwind instead
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  }
})
