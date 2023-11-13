import { useUserStore } from '../store/useUserStore'
import { useAccountStore } from '../store/useAccountStore'

import { fetchToken } from './'

const { fetchUser } = useUserStore()
const { fetchAccounts } = useAccountStore()

export const useLogin = async (identifier, password) => {
  const token = await fetchToken(identifier, password)
  if (!token) return

  const user = await fetchUser(token)
  if (!user) return

  const accounts = await fetchAccounts(token, ['active'])
  if (!accounts || accounts.length === 0) return

  return { token, user, accounts }
}
