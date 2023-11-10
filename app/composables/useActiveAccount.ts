import type { Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import type { Account } from '../../lib/entities/account'

export const useActiveAccount = (): Ref<Account | null> => {
  return useLocalStorage('activeAccount', anonymousAccount)
}

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
