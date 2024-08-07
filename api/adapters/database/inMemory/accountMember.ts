import inMemory from 'mock/inMemory'
import type { IsUserMemberOfAccount } from '../generic/accountMember'

export const isUserMemberOfAccount: IsUserMemberOfAccount = (
  userId: string,
  accountId: string
): Promise<boolean> => {
  return Promise.resolve(
    inMemory.accountMember.some((au) => au.userId === userId && au.accountId === accountId)
  )
}
