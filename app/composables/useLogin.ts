import { fetchToken, fetchUser, fetchAccounts } from './'

export const useLogin = async (identifier, password) => {
  // Login with credentials and fetch token
  const token = await fetchToken(identifier, password)
  if (!token) return

  // Fetch user and accounts
  const user = await fetchUser(token)
  if (!user) return

  const accounts = await fetchAccounts(token)
  if (!accounts || accounts.length === 0) return

  return { token, user, accounts }
}
