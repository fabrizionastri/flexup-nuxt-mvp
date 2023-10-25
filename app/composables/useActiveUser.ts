import type { Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import { fabrizioUser } from '../../mock/inMemory/user'
import type { User } from 'entities/user'

export const useActiveUser = (): Ref<User> => {
  return useLocalStorage('activeUser', fabrizioUser)
}
