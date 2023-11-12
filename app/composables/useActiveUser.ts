// app/composables/useActiveUser.ts

import type { Ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'

import type { User } from '../../lib/entities/user'

export const useActiveUser = (): Ref<User | null> => {
  return useLocalStorage('activeUser', anonymousUser)
}

export const anonymousUser: User = {
  id: 'anonymousUser',
  firstName: 'Anonymous',
  fullName: 'Anonymous User',
  lastName: 'User',
  creationDate: new Date('2019-01-01'),
  lastLoginDate: new Date('2019-01-01'),
  status: 'anonymous'
}
