import adapters from 'adapters/database'
import type { Account, AccountData } from 'lib/entities' // CHECK / TODOS : this used to work with out lib/, with just 'entities', but now it doesn't. Why?
import { poulaillerMobileAccount } from 'mock/inMemory'

// export interface AccountGateway {
//   getById: (accountId: string) => Promise<Account | undefined>
//   getByUserId: (userId: string) => Promise<Account[]>
//   getByProperty: (property: keyof AccountData, value: unknown) => Promise<Account[]>
// }

export const computeAccount = (accountData): Account => {
  console.log('computeAccount', accountData)
  return poulaillerMobileAccount
}

// TODO : complete this function
export const createAccountGateway = (userId: string) /* : AccountGateway */ => ({
  getById: async (accountId: string): Promise<Account | undefined> => {
    /* Algorithm
    - check if there is userId-accountId pair in accountUser table (with accountUser adapter)
    - if not, return undefined, else continue
    - get accountData from account table (with account adapter)
    - compute account from accountData (with computeAccount function)
    */
    if (!(await adapters.accountUserAdapter.isUserMemberOfAccount(userId, accountId)))
      return undefined
    return await adapters.accountAdapter.getById(accountId).then(computeAccount)
  },
  getAll: async (): Promise<Account[]> =>
    ((await adapters.accountAdapter.getByUserId(userId)) ?? []).map(computeAccount),

  // ToDo : peut-on faire une recherche sur des propriétés calculées ? Il faudrait calculer tous les accounts avant de faire la recherche ...
  getByProperty: async (property: keyof AccountData, value: unknown): Promise<Account[]> =>
    ((await adapters.accountAdapter.getByProperty(property, value)) ?? []).map(computeAccount)
})
