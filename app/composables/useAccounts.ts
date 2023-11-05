import type { Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import { accountUsersForFabrizioUser } from '../../mock/inMemory'
import type { Account } from '../../lib/entities'

export const useUserAccounts = (): Ref<Account[]> => {
  return useLocalStorage('userAccounts', accountUsersForFabrizioUser)
}
