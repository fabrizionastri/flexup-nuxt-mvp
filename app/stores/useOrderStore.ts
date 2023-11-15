// store/useOrderStore.ts

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// import Cookies from 'js-cookie'
import type { Order } from '../../lib/entities'
import axios from '../composables/myAxios'
import { useUserStore } from './useUserStore'

export const useOrderStore = defineStore(
  'order',
  () => {
    // TOCHECK: should we get the token from the userStore, or pass it as a parameter to the fetchAllOrders method?
    // const userStore = useUserStore()
    // const token = computed(() => userStore.token)
    // State
    const orders = ref<Order[]>([])
    // const order = ref<Order>(null)

    // Getters
    // TODO: add status filter (also change in route, usecase and gateway)
    const fetchAllOrders = async (accountId: string, token: string): Promise<Order[]> => {
      const data = await axios.get<Order[]>(`/account/${accountId}/order`, token)
      return data as Order[]
    }
    //     const fetchOrder = async (token: string): Promise<Order> => {
    //       const data = await axios.get<Order>(`/order`, token)
    //       return data as Order
    //     }
    //     const isValidOrder = (order) => order.value && order.value.id !== 'anonymousOrder'
    //     const isLoggedIn = computed(() => isValidOrder(order))
    //
    //     // const getLocalToken = () => {
    //     //   token.value = Cookies.get('token')
    //     //   return token.value
    //     // }
    //
    //     // Setters
    //     const loginOrder = async (identifier: string, password: string) => {
    //       try {
    //         token.value = await fetchToken(identifier, password)
    //         // Cookies.set('token', token)
    //         // console.log('► app/stores/useOrderStore.ts - loginOrder - token.value:', token.value)
    //         order.value = await fetchOrder(token.value)
    //         // console.log('► app/stores/useOrderStore.ts - loginOrder - order.value:', order.value)
    //         await accountStore.fetchAndUpdateAccounts(token.value)
    //         // no need to return order.value, it is already set
    //         // return order.value
    //       } catch (error) {
    //         console.error('► app/store/useOrderStore → loginOrder : error', error)
    //         logoutOrder()
    //         accountStore.resetAccounts()
    //         throw new Error(error)
    //       }
    //     }
    //     const logoutOrder = () => {
    //       order.value = anonymousOrder
    //       accountStore.resetAccounts()
    //     }

    return { orders, fetchAllOrders }
  },
  { persist: true }
)
