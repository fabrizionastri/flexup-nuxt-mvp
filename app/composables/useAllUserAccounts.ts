import type { Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { accountsForFabrizioUser } from '../../mock/inMemory'

import type { Account } from '../../lib/entities'

export const useAllUserAccounts = (): Ref<Account[] | null> => {
  return useLocalStorage('allUserAccounts', accountsForFabrizioUser)
}
