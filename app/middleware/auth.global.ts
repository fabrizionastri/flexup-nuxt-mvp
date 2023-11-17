// app/middleware/auth.global.ts

import { useUserStore } from '../stores/useUserStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()
  console.log('► app/middleware/auth.global.ts → - from -> to:', from.path, ' -> ', to.path)
  if (to.path === '/login' || to.path === '/') return
  if (!userStore.isLoggedIn) return navigateTo('/login')
  console.log('► app/middleware/auth.global.ts → - user.id:', userStore.user.id)
  console.log('► app/middleware/auth.global.ts → - user.isLoggedIn:', userStore.isLoggedIn)

  return
})
