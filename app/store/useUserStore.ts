// store/useUserStore.ts

import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '../../lib/entities/user'
import { fetchUser } from '../composables/fetchUser'

export const anonymousUser: User = {
  id: 'anonymousUser',
  firstName: 'Anonymous',
  fullName: 'Anonymous User',
  lastName: 'User',
  creationDate: new Date('2019-01-01'),
  lastLoginDate: new Date('2019-01-01'),
  status: 'anonymous'
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User>(anonymousUser)
  console.log('store/useUserStore.ts → user:', user.value)

  // Function to update the user state
  const updateUser = async (token: string) => {
    try {
      const response = await fetchUser(token)
      user.value = response
    } catch (error) {
      console.error('Failed to fetch user:', error)
      user.value = anonymousUser
    }
  }

  const resetUser = () => {
    user.value = anonymousUser
  }

  const isUserAuthenticated = () => user.value && user.value.id !== 'anonymousUser'

  return { user, updateUser, resetUser, isUserAuthenticated }
})
