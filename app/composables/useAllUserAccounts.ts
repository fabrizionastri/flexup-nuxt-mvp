import type { Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import type { Account } from '../../lib/entities'
import { anonymousAccount } from './useActiveAccount'

export const useAllUserAccounts = (): Ref<Account[] | null> => {
  return useLocalStorage('allUserAccounts', accountsForAnonymousUser)
}

export const accountsForAnonymousUser: Account[] = [anonymousAccount]
