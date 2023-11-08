import type { CurrencyData, CountryData } from 'lib/entities'
import { individualGateway } from './'
import {
  accountAdapter,
  accountUserAdapter,
  countryAdapter,
  currencyAdapter,
  groupingAdapter,
  organizationAdapter
} from 'adapters/database'
import type { Account, AccountData, AccountUserData } from 'lib/entities' // CHECK / TODOS : this used to work with out lib/, with just 'entities', but now it doesn't. Why?

export const computeAccount = async (
  accountData: AccountData,
  accountUserDatas: AccountUserData[] = []
): Promise<Account> => {
  let symbol, ownerName, ownerType, ownerSymbol: string

  if (accountData.type === 'personal') {
    const individual = await individualGateway.getById(accountData.ownerId)
    if (!individual) throw new Error('Account owner is an invalid individual')
    symbol = '👤'
    ownerName = individual.fullName
    ownerType = 'individual'
    ownerSymbol = '👤'
  } else if (accountData.type === 'business') {
    const organization = await organizationAdapter.getById(accountData.ownerId)
    if (!organization) throw new Error('Account owner is an invalid  organization')
    symbol = '🏢'
    ownerName = organization.name
    ownerType = 'organization'
    ownerSymbol = '🏢'
  } else if (accountData.type === 'shared') {
    const grouping = await groupingAdapter.getById(accountData.ownerId)
    if (!grouping) throw new Error('Account owner is an invalid  grouping')
    symbol = '👥'
    ownerName = grouping.name
    ownerType = 'grouping'
    ownerSymbol = '👥'
  } else if (accountData.type === 'project') {
    const projectData = await accountAdapter.getById(accountData.ownerId)
    const project = projectData ? await computeAccount(projectData) : undefined
    if (!project) throw new Error('Account owner is an invalid  project')
    symbol = '🚀'
    ownerName = project.name
    ownerType = project.ownerType
    ownerSymbol = project.symbol
  } else {
    throw new Error('Invalid account type')
  }

  const currency: CurrencyData | undefined = await currencyAdapter.getById(accountData.currencyId)
  if (!currency) throw new Error('Invalid currency')
  const country: CountryData | undefined = await countryAdapter.getById(accountData.countryId)
  if (!country) throw new Error('Invalid country')

  const account: Account = {
    ...accountData,
    symbol,
    ownerName,
    ownerType,
    ownerSymbol,
    currencyName: currency.name,
    currencySymbol: currency.symbol,
    countryName: country.name,
    role: accountUserDatas.find((accountUserData) => accountUserData.accountId === accountData.id)
      ?.role
  }
  return account
}

export const createAccountGateway = async (userId: string) => {
  // First get the list of accounts for this user (accountUser datas, and accountIds)
  const allAccountUserDatas: AccountUserData[] = await accountUserAdapter.getByUserId(userId)
  if (allAccountUserDatas.length === 0) throw new Error('No account for user', userId)
  const allAccountIds: string[] = allAccountUserDatas.map(
    (accountUserData) => accountUserData.accountId
  )

  // Then make some helper functions
  const getAllAccountDatas = async (): Promise<AccountData[]> =>
    await accountAdapter.getByIds(allAccountIds)

  // Finally, define the gateway functions
  const getById = async (accountId: string): Promise<Account | undefined> => {
    if (!allAccountIds.includes(accountId)) undefined
    const accountData = await accountAdapter.getById(accountId)
    return accountData ? await computeAccount(accountData, allAccountUserDatas) : undefined
  }
  const getAllAccounts = async (): Promise<Account[]> => {
    const accountDatas = await getAllAccountDatas()
    return Promise.all(
      accountDatas.map((accountData) => computeAccount(accountData, allAccountUserDatas))
    )
  }

  return {
    getById,
    getAllAccounts
  }
}
