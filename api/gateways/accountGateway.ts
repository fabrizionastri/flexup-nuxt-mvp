import { adapters } from 'adapters/database'
import { Account, AccountData } from '../entities'

export interface AccountGateway {
  getById: (accountId: string) => Promise<Account | undefined>
  getByUserId: (userId: string) => Promise<Account[]>
  getByProperty: (property: keyof AccountData, value: unknown) => Promise<Account[]>
}

export const computeAccount = () => {}

export const createAccountGateway = (): AccountGateway => {
  const accountAdapter = adapters.accountAdapter

  const getById = async (accountId: string): Promise<Account | undefined> => {
    const account = await accountAdapter.getById(accountId)
    return !account ? undefined : computeAccount(account)
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
