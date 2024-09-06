import inMemory from 'mock/inMemory'
import type { IsUserMemberOfAccount } from '../generic/member'

export const isUserMemberOfAccount: IsUserMemberOfAccount = (
  userId: string,
  accountId: string
): Promise<boolean> => {
  return Promise.resolve(
    inMemory.member.some((au) => au.userId === userId && au.accountId === accountId)
  )
}
