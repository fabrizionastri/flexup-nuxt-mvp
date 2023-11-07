import type { AccountUserData, Account } from 'lib/entities'

import { cosysAccount, doMazyAccount, fabrizioAccount, flexupAccount } from './account'

export const fabrizioAccountFabrizioUserData: AccountUserData = {
  id: 'fabrizioAccount:fabrizioUser', // temp for Json-Server
  accountId: 'fabrizioAccount',
  userId: 'fabrizioUser',
  role: 'owner'
}
export const fabrizioAccountFabrizioUser: Account = {
  ...fabrizioAccount,
  role: 'owner'
}

export const flexupAccountFabrizioUserData: AccountUserData = {
  id: 'flexupAccount:fabrizioUser',
  accountId: 'flexupAccount',
  userId: 'fabrizioUser',
  role: 'owner'
}
export const flexupAccountFabrizioUser: Account = {
  ...flexupAccount,
  role: 'owner'
}

export const cosysAccountFabrizioUserData: AccountUserData = {
  id: 'cosysAccount:fabrizioUser',
  accountId: 'cosysAccount',
  userId: 'fabrizioUser',
  role: 'owner'
}
export const cosysAccountFabrizioUser: Account = {
  ...cosysAccount,
  role: 'owner'
}

export const doMazyAccountFabrizioUserData: AccountUserData = {
  id: 'doMazyAccount:FabrizioUser',
  accountId: 'doMazyAccount',
  userId: 'fabrizioUser',
  role: 'guest'
}
export const doMazyAccountFabrizioUser: Account = {
  ...doMazyAccount,
  role: 'guest'
}

export const accountDatasForFabrizioUser: AccountUserData[] = [
  fabrizioAccountFabrizioUserData,
  flexupAccountFabrizioUserData,
  cosysAccountFabrizioUserData,
  doMazyAccountFabrizioUserData
]
export const accountsForFabrizioUser: Account[] = [
  fabrizioAccountFabrizioUser,
  flexupAccountFabrizioUser,
  cosysAccountFabrizioUser,
  doMazyAccountFabrizioUser
]

export const totoAccountTotoUserData: AccountUserData = {
  id: 'totoAccount:totoUser',
  accountId: 'totoAccount',
  userId: 'totoUser',
  role: 'owner'
}
export const totoAccountTotoUser: Account = {
  ...flexupAccount,
  role: totoAccountTotoUserData.role
}

export const flexupAccountTotoUserData: AccountUserData = {
  id: 'flexupAccount:totoUser',
  accountId: 'flexupAccount',
  userId: 'totoUser',
  role: 'editor'
}
export const flexupAccountTotoUser: Account = {
  ...flexupAccount,
  role: flexupAccountTotoUserData.role
}

export const accountDatasForTotoUser: AccountUserData[] = [
  flexupAccountTotoUserData,
  totoAccountTotoUserData
]
export const accountsForTotoUser: Account[] = [flexupAccountTotoUser, totoAccountTotoUser]

export const accountUserDatas: AccountUserData[] = [
  fabrizioAccountFabrizioUserData,
  flexupAccountFabrizioUserData,
  cosysAccountFabrizioUserData,
  flexupAccountTotoUserData,
  totoAccountTotoUserData,
  doMazyAccountFabrizioUserData
]
export const accountUsers: Account[] = [
  fabrizioAccountFabrizioUser,
  flexupAccountFabrizioUser,
  cosysAccountFabrizioUser,
  flexupAccountTotoUser,
  totoAccountTotoUser,
  doMazyAccountFabrizioUser
]

export const accountUserDatasForFlexupAccount: AccountUserData[] = [
  flexupAccountFabrizioUserData,
  flexupAccountTotoUserData
]
export const accountUsersForFlexupAccount: Account[] = [
  flexupAccountFabrizioUser,
  flexupAccountTotoUser
]

export const accountUserDatasForFabrizioUser: AccountUserData[] = [
  fabrizioAccountFabrizioUserData,
  flexupAccountFabrizioUserData,
  cosysAccountFabrizioUserData,
  doMazyAccountFabrizioUserData
]
export const accountUsersForFabrizioUser: Account[] = [
  fabrizioAccountFabrizioUser,
  flexupAccountFabrizioUser,
  cosysAccountFabrizioUser,
  doMazyAccountFabrizioUser
]

export const accountUserDatasForTotoUser: AccountUserData[] = [
  flexupAccountTotoUserData,
  totoAccountTotoUserData
]
export const accountUsersForTotoUser: Account[] = [flexupAccountTotoUser, totoAccountTotoUser]
