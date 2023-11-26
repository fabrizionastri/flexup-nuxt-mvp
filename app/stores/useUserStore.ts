// store/useUserStore.ts

import { useAccountStore, useOrderStore } from './'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// import Cookies from 'js-cookie'
import type { User } from '../../lib/entities'
import axios from '../utils/myAxios'

interface Token {
  token: string
}

export const useUserStore = defineStore(
  'user',
  () => {
    const accountStore = useAccountStore()
    const orderStore = useOrderStore()
    // State
    const user = ref<User | object>({})
    const token = ref('')

    // Getters
    const fetchToken = async (identifier: string, password: string): Promise<string> => {
      const data = (await axios.post<Token>('/user/login', { identifier, password })) as Token
      return data.token
    }
    const fetchUser = async (token: string): Promise<User> => {
      const data = await axios.get<User>(`/user`, token)
      return data as User
    }
    const isValidUser = (user) => user.value && user.value.id !== 'anonymousUser'
    const isLoggedIn = computed(() => isValidUser(user))

    // const getLocalToken = () => {
    //   token.value = Cookies.get('token')
    //   return token.value
    // }

    // Setters
    const loginUser = async (identifier: string, password: string) => {
      try {
        token.value = await fetchToken(identifier, password)
        await fetchUser(token.value).then((data) => (user.value = data))
        console.log('► app/stores/useUserStore.ts - loginUser - user.value:', user.value)
        await accountStore.fetchAndUpdateActiveAccounts(token.value)
        console.log(
          '► app/stores/useUserStore.ts - loginUser - accountStore:',
          accountStore.currentAccount
        )
        // no need to return user.value, it is already set
        // return user.value
      } catch (error) {
        console.error('► app/store/useUserStore → loginUser : error', error)
        logoutUser()
        accountStore.resetAccounts()
        throw new Error(error)
      }
    }
    const logoutUser = () => {
      console.log('►app/stores/useUserStore.ts  → logging out user- :')
      user.value = null
      token.value = ''
      accountStore.resetAccounts()
      orderStore.resetOrders()
    }

    return { user, token, isValidUser, fetchToken, fetchUser, logoutUser, loginUser, isLoggedIn }
  },
  {
    persist: {
      storage: persistedState.localStorage
    }
  }
)

/*   // Currently not used. Tokens are stored in Pinia store, not in cookies
  // TOCHECK: should we store the token in a cookie?



  const getTokenFromCookie = (): string => {
    const token = Cookies.get('token')
    // console.log('app/composables/getUser.ts - token', token)
    if (!token) {
      throw new Error('► app/composables/getUser → No token found')
    }
    return token
  }
  const saveTokenToCookie = (token: string): void => {
    Cookies.set('token', token)
  }
  */
