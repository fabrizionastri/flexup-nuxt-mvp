// middleware/errorHandler.ts

// I have removed the redirect parameter for now, as I don't know how to use it
// export default function ({ $axios, redirect }) {
export default function ({ $axios }) {
  $axios.onError((error) => {
    console.error('Nuxt errorHandler middleware:', error.message)
    return Promise.reject(error)
  })
}
