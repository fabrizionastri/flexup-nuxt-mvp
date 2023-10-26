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
export const createAccountGateway = () /* : AccountGateway */ => {
  const accountAdapter = adapters.accountAdapter

  const getById = async (accountId: string): Promise<Account | undefined> => {
    const accountData /* : AccountData | undefined */ = await accountAdapter.getById(accountId)
    const account /* : Account | undefined */ = accountData
      ? computeAccount(accountData)
      : undefined
    return account
  }
  const getByUserId = async (userId: string): Promise<Account[]> =>
    ((await accountAdapter.getByUserId(userId)) ?? []).map(computeAccount)

  // ToDo : peut-on faire une recherche sur des propriétés calculées ? Il faudrait calculer tous les accounts avant de faire la recherche ...
  const getByProperty = async (property: keyof AccountData, value: unknown): Promise<Account[]> =>
    ((await accountAdapter.getByProperty(property, value)) ?? []).map(computeAccount)

  return {
    getById,
    getByUserId,
    getByProperty
  }
}

export const accountGateway = createAccountGateway()
