// api/usecases/getAccounts.ts
import type { Account, AccountStatus } from 'lib/entities'
import { createAccountGateway } from '../gateways'

export const getAccounts = async (
  userId: string,
  statuses: AccountStatus[] = []
): Promise<Account[]> => {
  const accountGateway = await createAccountGateway(userId)
  return accountGateway.getAccounts(statuses)
}
