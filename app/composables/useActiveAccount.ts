import type { Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { fabrizioAccount } from '../../mock/inMemory'

import type { Account } from '../../lib/entities/account'

export const useActiveAccount = (): Ref<Account | null> => {
  return useLocalStorage('activeAccount', fabrizioAccount)
}
