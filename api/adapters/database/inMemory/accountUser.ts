import inMemory from 'mock/inMemory'
import type { IsUserMemberOfAccount } from '../generic/accountUser'

export const isUserMemberOfAccount: IsUserMemberOfAccount = (
  userId: string,
  accountId: string
): Promise<boolean> => {
  return Promise.resolve(
    inMemory.accountUser.some((au) => au.userId === userId && au.accountId === accountId)
  )
}
