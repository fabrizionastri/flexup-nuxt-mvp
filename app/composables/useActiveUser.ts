import type { Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import type { User } from '../../lib/entities/user'
import { fabrizioUser } from '../../mock/inMemory/user'

export const useActiveUser = (): Ref<User | null> => {
  return useLocalStorage('activeUser', fabrizioUser)
}
