import type { AccountUserData } from 'lib/entities'
import axios from './myAxios'

export const isUserMemberOfAccount = async (userId, accountId): Promise<boolean> => {
  const entity = 'accountUser'
  accountId = encodeURIComponent(accountId)
  userId = encodeURIComponent(userId as string)
  const result = await axios.get<AccountUserData[]>(
    `/${entity}?accountId=${accountId}&userId=${userId}`
  )
  return !result || result.length === 0 ? false : true
}
