// store/useUserStore.ts

import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '../../lib/entities'

import axios from '../composables/myAxios'

interface Token {
  token: string
}

export const useUserStore = defineStore('user', () => {
  const user = ref<User>(anonymousUser)
  const token = ref('')
  const isValidUser = (user) => user.value && user.value.id !== 'anonymousUser'

  const fetchToken = async (identifier: string, password: string): Promise<string> => {
    const data = (await axios.post<Token>('/user/login', { identifier, password })) as Token
    return data.token
  }
  const fetchUser = async (token: string): Promise<User> => {
    const data = await axios.get<User>(`/user`, token)
    return data as User
  }
  const logoutUser = () => {
    user.value = anonymousUser
  }
  const loginUser = async (identifier: string, password: string) => {
    token.value = await fetchToken(identifier, password)
    user.value = await fetchUser(token.value)
    if (!isValidUser(user)) throw new Error('Invalid user')
    return user.value
  }
  return { user, isValidUser, fetchUser, logoutUser, loginUser }
})

export const anonymousUser: User = {
  id: 'anonymousUser',
  firstName: 'Anonymous',
  fullName: 'Anonymous User',
  lastName: 'User',
  creationDate: new Date('2019-01-01'),
  lastLoginDate: new Date('2019-01-01'),
  status: 'anonymous'
}
