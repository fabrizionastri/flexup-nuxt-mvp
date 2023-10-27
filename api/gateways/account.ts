import { individualGateway } from './individual'
import adapters from 'adapters/database'
import type { Account, AccountData } from 'lib/entities' // CHECK / TODOS : this used to work with out lib/, with just 'entities', but now it doesn't. Why?

// export interface AccountGateway {
//   getById: (accountId: string) => Promise<Account | undefined>
//   getByUserId: (userId: string) => Promise<Account[]>
//   getByProperty: (property: keyof AccountData, value: unknown) => Promise<Account[]>
// }

export const computeAccount = async (accountData: AccountData): Promise<Account | undefined> => {
  let symbol, ownerName, ownerType, ownerSymbol: string

  if (accountData.type === 'personal') {
    const individual = await individualGateway.getById(accountData.ownerId)
    if (!individual) throw new Error('Account owner is an invalid individual')
    symbol = '👤'
    ownerName = individual.fullName
    ownerType = 'individual'
    ownerSymbol = '👤'
  } else if (accountData.type === 'business') {
    const organization = await adapters.organizationAdapter.getById(accountData.ownerId)
    if (!organization) throw new Error('Account owner is an invalid  organization')
    symbol = '🏢'
    ownerName = organization.name
    ownerType = 'organization'
    ownerSymbol = '🏢'
  } else if (accountData.type === 'shared') {
    const grouping = await adapters.groupingAdapter.getById(accountData.ownerId)
    if (!grouping) throw new Error('Account owner is an invalid  grouping')
    symbol = '👥'
    ownerName = grouping.name
    ownerType = 'grouping'
    ownerSymbol = '👥'
  } else if (accountData.type === 'project') {
    const accountGateway = createAccountGateway('')
    const project = await accountGateway.getById(accountData.ownerId)
    if (!project) throw new Error('Account owner is an invalid  project')
    symbol = '🚀'
    ownerName = project.name
    ownerType = project.ownerType
    ownerSymbol = project.symbol
  } else {
    throw new Error('Invalid account type')
  }

  const currency = await adapters.currencyAdapter.getById(accountData.currencyId)
  if (!currency) throw new Error('Invalid currency')
  const country = await adapters.countryAdapter.getById(accountData.countryId)
  if (!country) throw new Error('Invalid country')
  const myRole = 'guest'

  const account: Account = {
    ...accountData,
    symbol,
    ownerName,
    ownerType,
    ownerSymbol,
    currencyName: currency.name,
    currencySymbol: currency.symbol,
    myRole
  }
  // console.log('api/gateways/account - computeAccount - computed data', account)
  return account
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
    if (
      userId !== '' &&
      !(await adapters.accountUserAdapter.isUserMemberOfAccount(userId, accountId))
    )
      return undefined
    return await adapters.accountAdapter.getById(accountId).then(computeAccount)
  },
  getAll: async (): Promise<Account[]> =>
    (await adapters.accountUserAdapter.getByUserId(userId)).map(computeAccount),

  // ToDo : peut-on faire une recherche sur des propriétés calculées ? Il faudrait calculer tous les accounts avant de faire la recherche ...
  getByProperty: async (property: keyof AccountData, value: unknown): Promise<Account[]> =>
    ((await adapters.accountAdapter.getByProperty(property, value)) ?? []).map(computeAccount)
})
