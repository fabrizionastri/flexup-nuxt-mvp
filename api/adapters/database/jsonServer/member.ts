import type { MemberData } from 'lib/entities'
import axios from './myAxios'
import type { IsUserMemberOfAccount } from '../generic/member'

export const isUserMemberOfAccount: IsUserMemberOfAccount = async (
  userId: string,
  accountId: string
): Promise<boolean> => {
  const entity = 'member'
  accountId = encodeURIComponent(accountId)
  userId = encodeURIComponent(userId as string)
  const result = await axios.get<MemberData[]>(`/${entity}?accountId=${accountId}&userId=${userId}`)
  return !result || result.length === 0 ? false : true
}
