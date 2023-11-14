// stores/useAccountStore.ts

import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Account, AccountStatus } from '../../lib/entities'

import axios from '../composables/myAxios'

export const useAccountStore = defineStore('account', () => {
  // State
  const activeAccounts = ref<Account[]>([anonymousAccount])
  const account = ref<Account>(anonymousAccount)

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

  // Setters
  const fetchAndUpdateAccounts = async (token: string) => {
    activeAccounts.value = await fetchAccounts(token, ['active'])
    account.value = activeAccounts.value[0]
  }

  const clearAccounts = () => {
    account.value = anonymousAccount
    activeAccounts.value = [anonymousAccount]
  }

  return { activeAccounts, account, fetchAccounts, fetchAndUpdateAccounts, clearAccounts }
})

export const anonymousAccount: Account = {
  avatar: '/images/profiles/anonymous.jpg',
  countryId: 'FRA',
  countryName: 'France',
  creationDate: new Date('2019-01-01'),
  currencyId: 'EUR',
  currencyName: 'Euro',
  currencySymbol: '€',
  id: 'anonymousAccount',
  name: 'Anonymous Account',
  ownerId: 'anonymousIndividual',
  ownerName: 'Anonymous Individual',
  ownerSymbol: '👤',
  ownerType: 'individual',
  status: 'active',
  symbol: '👤',
  type: 'personal'
}
