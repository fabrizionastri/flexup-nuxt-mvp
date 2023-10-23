import { Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import { flexupAccount } from 'mock/inMemory/account'
import { Account } from 'entities/account'

export const useActiveAccount = (): Ref<Account> => {
  return useLocalStorage('activeAccount', flexupAccount)
}
