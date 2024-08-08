import {
  type Currency,
  type Country,
  type AccountStatus,
  type OwnerType,
  accountTypes,
  ownerTypes,
  memberRoleTypes
} from 'lib/entities'
import { individualGateway } from './'
import {
  accountAdapter,
  memberAdapter,
  countryAdapter,
  currencyAdapter,
  groupingAdapter,
  organizationAdapter
} from 'adapters/database'
import type { Account, AccountData, MemberData } from 'lib/entities' // CHECK / TODOS : this used to work with out lib/, with just 'entities', but now it doesn't. Why?

export const computeAccount = async (
  accountData: AccountData,
  memberDatas: MemberData[] = []
): Promise<Account> => {
  let ownerName: string = ''
  let ownerAccount: Account | undefined

  // Validate and set account type details
  const accountTypeDetails = accountTypes[accountData.type]
  if (!accountTypeDetails) throw new Error('Invalid account type')

  if (accountData.type === 'personal') {
    const individual = await individualGateway.getById(accountData.ownerId)
    if (!individual) throw new Error('Account owner is an invalid individual')
    ownerName = individual.fullName
  } else if (accountData.type === 'business') {
    const organization = await organizationAdapter.getById(accountData.ownerId)
    if (!organization) throw new Error('Account owner is an invalid  organization')
    ownerName = organization.name
  } else if (accountData.type === 'shared') {
    const grouping = await groupingAdapter.getById(accountData.ownerId)
    if (!grouping) throw new Error('Account owner is an invalid  grouping')
    ownerName = grouping.name
  } else if (accountData.type === 'subaccount') {
    const ownerAccountData = await accountAdapter.getById(accountData.ownerId)
    if (!ownerAccountData) throw new Error('Account owner Id is invalid')
    ownerAccount = await computeAccount(ownerAccountData)
    ownerName = ownerAccount.name
  }

  // Get the owner type details
  const ownerType = (ownerAccount?.type || accountTypeDetails.ownerType) as OwnerType
  const ownerTypeDetails = ownerTypes[ownerType]
  if (!ownerTypeDetails) throw new Error('Invalid owner type')

  // Get currency and country details
  const currency: Currency | undefined = await currencyAdapter.getById(accountData.currencyId)
  if (!currency) throw new Error('Invalid currency')
  const country: Country | undefined = await countryAdapter.getById(accountData.countryId)
  if (!country) throw new Error('Invalid country')

  // Get role and role symbol
  const role = memberDatas.find((memberData) => memberData.accountId === accountData.id)?.role

  const account: Account = {
    ...accountData,
    symbol: accountTypeDetails.symbol,
    ownerName,
    ownerType,
    ownerSymbol: ownerTypes[ownerType].symbol,
    currencyName: currency.name,
    currencySymbol: currency.symbol,
    countryName: country.name,
    currentUserRole: role,
    roleSymbol: memberRoleTypes[role!]
  }
  return account
}

export const getMemberDatas = async (userId: string): Promise<MemberData[]> => {
  const allMemberDatas: MemberData[] = await memberAdapter.getByUserId(userId)
  if (allMemberDatas.length === 0) throw new Error(`No account for user ${userId}`)
  return allMemberDatas
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
  // First get the list of accounts for this user (member datas, and accountIds)
  const allMemberDatas: MemberData[] = await getMemberDatas(userId)
  // console.log('api/gateways/account - getAccounts allMemberDatas', allMemberDatas)

  const allAccountIds: string[] = allMemberDatas.map((memberData) => memberData.accountId)

  // Finally, define the gateway functions that return computed accounts (by Id, or filtered by status)
  // Note that we need to add the "user specific" data to the account when we compute it
  const getById = async (accountId: string): Promise<Account | undefined> => {
    if (!allAccountIds.includes(accountId)) undefined
    const accountData = await accountAdapter.getById(accountId)
    return accountData ? await computeAccount(accountData, allMemberDatas) : undefined
  }
  const getAccounts = async (statuses: AccountStatus[] = []): Promise<Account[]> => {
    // console.log('api/gateways/account - getAccounts statuses', statuses)
    // console.log('api/gateways/account - getAccounts allAccountIds', allAccountIds)
    const accountDatas = await getAccountDatas(allAccountIds, statuses)
    // console.log('api/gateways/account - getAccounts accountDatas', accountDatas)
    return Promise.all(
      accountDatas.map((accountData) => computeAccount(accountData, allMemberDatas))
    )
  }

  return {
    getById,
    getAccounts
  }
}
