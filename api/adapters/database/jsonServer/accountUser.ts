import type { AccountUserData } from 'lib/entities'
import axios from './myAxios'
import type { IsUserMemberOfAccount } from '../generic/accountUser'

export const isUserMemberOfAccount: IsUserMemberOfAccount = async (
  userId: string,
  accountId: string
): Promise<boolean> => {
  const entity = 'accountUser'
  accountId = encodeURIComponent(accountId)
  userId = encodeURIComponent(userId as string)
  const result = await axios.get<AccountUserData[]>(
    `/${entity}?accountId=${accountId}&userId=${userId}`
  )
  return !result || result.length === 0 ? false : true
}
