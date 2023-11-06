import type { AccountUserData } from '~/lib/entities'
import { accountUserDatasForFabrizioUser } from './../../mock/inMemory/accountUser'
// import { accountIdsForFabrizioUser } from 'mock/inMemory/accountUser'

export const getAllAccountIds = (): AccountUserData[] => {
  return accountUserDatasForFabrizioUser
}
