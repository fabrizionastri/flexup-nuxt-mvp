import inMemory from 'mock/inMemory'

export const isUserMemberOfAccount = async (userId, accountId): Promise<boolean> => {
  return inMemory.accountUser.some(
    (accountUser) => accountUser.userId === userId && accountUser.accountId === accountId
  )
}
