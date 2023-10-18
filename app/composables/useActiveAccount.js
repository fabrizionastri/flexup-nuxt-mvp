import { useLocalStorage } from '@vueuse/core'

export const useActiveAccount = () => {
  return useLocalStorage('activeAccount', {
    id: 1,
    name: 'FlexUp',
    type: 'Activity',
    avatar: '/images/profiles/flexup.svg'
  })
}
