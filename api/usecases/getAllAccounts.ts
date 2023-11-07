import type { Account } from 'lib/entities'
import { createAccountGateway } from '../gateways'

export const getAllAccounts = async (userId: string): Promise<Account[]> => {
  const accountGateway = createAccountGateway(userId)
  return (await accountGateway).getAllAcounts()
}
