// store/useOrderStore.ts

import { defineStore } from 'pinia'
import { ref /* , computed  */ } from 'vue'
// import Cookies from 'js-cookie'
import type { Order } from '../../lib/entities'
import axios from '../composables/myAxios'
// import { useUserStore } from './useUserStore'

export const useOrderStore = defineStore(
  'order',
  () => {
    // TOCHECK: should we get the token from the userStore, or pass it as a parameter to the fetchAndUpdateAllOrders method?
    // const userStore = useUserStore()
    // const token = computed(() => userStore.token)

    // State
    const orders = ref<Order[]>([])
    // const order = ref<Order>(null)

    // Getters
    // TODO: add status filter (also change in route, usecase and gateway)
    const fetchAndUpdateAllOrders = async (accountId: string, token: string): Promise<Order[]> => {
      orders.value = await axios.get<Order[]>(`/account/${accountId}/order`, token)
      return orders.value
    }

    const getOrder = (orderId: string): Order => {
      return orders.value.find((order) => order.id === orderId)
    }

    return { orders, fetchAndUpdateAllOrders, getOrder }
  },
  {
    persist: {
      storage: persistedState.localStorage
    }
  }
)

/*

[...orders.value]


onMounted(() => {
  console.log('toto')
})
 */
