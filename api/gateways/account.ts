import type { CurrencyData, CountryData, AccountStatus } from 'lib/entities'
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
    symbol = '🚀'
    const ownerAccountData = await accountAdapter.getById(accountData.ownerId)
    const ownerAccount = ownerAccountData ? await computeAccount(ownerAccountData) : undefined
    if (!ownerAccount) throw new Error('Account owner Id is invalid')
    ownerName = ownerAccount.name
    ownerType = ownerAccount.type
    ownerSymbol = ownerAccount.symbol
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

export const getAccountUserDatas = async (userId: string): Promise<AccountUserData[]> => {
  const allAccountUserDatas: AccountUserData[] = await accountUserAdapter.getByUserId(userId)
  if (allAccountUserDatas.length === 0) throw new Error(`No account for user ${userId}`)
  return allAccountUserDatas
}

export const getAccountDatas = async (
  accountIds: string[],
  statuses: AccountStatus[] = []
): Promise<AccountData[]> => {
  // console.log('api/gateways/account - getAccountDatas statuses:', statuses)
  const allAccountDatas = await accountAdapter.getByIds(accountIds)
  // console.log('api/gateways/account - getAccountDatas allAccountDatas:', allAccountDatas)

  if (statuses.length === 0) return allAccountDatas
  return allAccountDatas.filter((accountData) => statuses.includes(accountData.status))
}

export const createAccountGateway = async (userId: string) => {
  // First get the list of accounts for this user (accountUser datas, and accountIds)
  const allAccountUserDatas: AccountUserData[] = await getAccountUserDatas(userId)
  // console.log('api/gateways/account - getAccounts allAccountUserDatas', allAccountUserDatas)

  const allAccountIds: string[] = allAccountUserDatas.map(
    (accountUserData) => accountUserData.accountId
  )

  // Finally, define the gateway functions that return computed accounts (by Id, or filtered by status)
  // Note that we need to add the "user specific" data to the account when we compute it
  const getById = async (accountId: string): Promise<Account | undefined> => {
    if (!allAccountIds.includes(accountId)) undefined
    const accountData = await accountAdapter.getById(accountId)
    return accountData ? await computeAccount(accountData, allAccountUserDatas) : undefined
  }
  const getAccounts = async (statuses: AccountStatus[] = []): Promise<Account[]> => {
    // console.log('api/gateways/account - getAccounts statuses', statuses)
    // console.log('api/gateways/account - getAccounts allAccountIds', allAccountIds)
    const accountDatas = await getAccountDatas(allAccountIds, statuses)
    // console.log('api/gateways/account - getAccounts accountDatas', accountDatas)
    return Promise.all(
      accountDatas.map((accountData) => computeAccount(accountData, allAccountUserDatas))
    )
  }

  return {
    getById,
    getAccounts
  }
}
