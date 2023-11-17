// stores/useAccountStore.ts

import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Account, AccountStatus } from '../../lib/entities'

import axios from '../composables/myAxios'

export const useAccountStore = defineStore(
  'account',
  () => {
    // State
    const activeAccounts = ref<Account[]>([])
    const allAccounts = ref<Account[]>([])
    const currentAccount = ref<Account | null>(null)

    // Getters
    const fetchAccounts = async (
      token: string,
      accountStatuses: AccountStatus[] = []
    ): Promise<Account[]> => {
      let url = `/account`
      if (accountStatuses.length > 0) {
        const queryString = `status=${accountStatuses.join(',')}`
        url += `?${queryString}`
      }
      const data = await axios.get<Account[]>(url, token)
      return data as Account[]
    }

    const getAccount = async (
      accountId: string,
      token: string = ''
    ): Promise<Account | undefined> => {
      let result: Account | undefined
      if (allAccounts.value.length > 0)
        return allAccounts.value.find((account) => account.id === accountId)

      if (activeAccounts.value.length > 0) {
        result = activeAccounts.value.find((account) => account.id === accountId)
        if (result) return result
      }
      await fetchAndUpdateAllAccounts(token)
      return allAccounts.value.find((account) => account.id === accountId)
    }

    // Setters
    const fetchAndUpdateActiveAccounts = async (token: string) => {
      activeAccounts.value = await fetchAccounts(token, ['active'])
      currentAccount.value = activeAccounts.value.find((account) => account.type === 'personal')
    }

    const fetchAndUpdateAllAccounts = async (token: string) => {
      allAccounts.value = await fetchAccounts(token)
    }

    const resetAccounts = () => {
      console.log('► app/stores/useAccountStore.ts → reseting Accounts')
      activeAccounts.value = []
      allAccounts.value = []
      currentAccount.value = null
      console.log(
        '► app/stores/useAccountStore.ts → fetchAndUpdateActiveAccounts - account.value:',
        currentAccount.value
      )
      console.log(
        '► app/stores/useAccountStore.ts → fetchAndUpdateActiveAccounts - activeAccounts.value:',
        activeAccounts.value
      )
    }

    const setCurrentAccount = (account) => {
      currentAccount.value = account
    }

    return {
      activeAccounts,
      allAccounts,
      currentAccount,
      fetchAccounts,
      fetchAndUpdateActiveAccounts,
      fetchAndUpdateAllAccounts,
      getAccount,
      resetAccounts,
      setCurrentAccount
    }
  },
  {
    persist: {
      storage: persistedState.localStorage
    }
  }
)

// export const anonymousAccount: Account = {
//   avatar: '/images/profiles/anonymous.jpg',
//   countryId: 'FRA',
//   countryName: 'France',
//   creationDate: new Date('2019-01-01'),
//   currencyId: 'EUR',
//   currencyName: 'Euro',
//   currencySymbol: '€',
//   id: 'anonymousAccount',
//   name: 'Anonymous Account',
//   ownerId: 'anonymousIndividual',
//   ownerName: 'Anonymous Individual',
//   ownerSymbol: '👤',
//   ownerType: 'individual',
//   status: 'active',
//   symbol: '👤',
//   type: 'personal'
// }
