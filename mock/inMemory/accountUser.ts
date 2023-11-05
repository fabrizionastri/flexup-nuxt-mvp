import type { AccountUserData, AccountUser } from 'lib/entities'

import {
  cosysAccount,
  doMazyAccount,
  fabrizioAccount,
  fabrizioUser,
  flexupAccount,
  totoUser
} from '.'

export const fabrizioAccountFabrizioUserData: AccountUserData = {
  id: 'fabrizioAccount:fabrizioUser', // temp for Json-Server
  accountId: 'fabrizioAccount',
  userId: 'fabrizioUser',
  role: 'owner'
}
export const fabrizioAccountFabrizioUser: AccountUser = {
  ...fabrizioAccount,
  ...fabrizioAccountFabrizioUserData
}

export const flexupAccountFabrizioUserData: AccountUserData = {
  id: 'flexupAccount:fabrizioUser',
  accountId: 'flexupAccount',
  userId: 'fabrizioUser',
  role: 'owner'
}
export const flexupAccountFabrizioUser: AccountUser = {
  ...flexupAccount,
  ...flexupAccountFabrizioUserData
}

export const cosysAccountFabrizioUserData: AccountUserData = {
  id: 'cosysAccount:fabrizioUser',
  accountId: 'cosysAccount',
  userId: 'fabrizioUser',
  role: 'owner'
}
export const cosysAccountFabrizioUser: AccountUser = {
  ...cosysAccount,
  ...cosysAccountFabrizioUserData
}

export const flexupAccountTotoUserData: AccountUserData = {
  id: 'flexupAccount:totoUser',
  accountId: 'flexupAccount',
  userId: 'totoUser',
  role: 'editor'
}
export const flexupAccountTotoUser: AccountUser = {
  ...flexupAccount,
  ...flexupAccountTotoUserData
}

export const totoAccountTotoUserData: AccountUserData = {
  id: 'totoAccount:totoUser',
  accountId: 'totoAccount',
  userId: 'totoUser',
  role: 'owner'
}
export const totoAccountTotoUser: AccountUser = {
  ...flexupAccount,
  ...totoAccountTotoUserData
}

export const doMazyAccountFabrizioUserData: AccountUserData = {
  id: 'doMazyAccount:FabrizioUser',
  accountId: 'doMazyAccount',
  userId: 'fabrizioUser',
  role: 'guest'
}
export const doMazyAccountFabrizioUser: AccountUser = {
  ...doMazyAccount,
  ...doMazyAccountFabrizioUserData
}

export const accountUserDatas: AccountUserData[] = [
  fabrizioAccountFabrizioUserData,
  flexupAccountFabrizioUserData,
  cosysAccountFabrizioUserData,
  flexupAccountTotoUserData,
  totoAccountTotoUserData,
  doMazyAccountFabrizioUserData
]
export const accountUsers: AccountUser[] = [
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
export const accountUsersForFlexupAccount: AccountUser[] = [
  flexupAccountFabrizioUser,
  flexupAccountTotoUser
]

export const accountUserDatasForFabrizioUser: AccountUserData[] = [
  fabrizioAccountFabrizioUserData,
  flexupAccountFabrizioUserData,
  cosysAccountFabrizioUserData,
  doMazyAccountFabrizioUserData
]
export const accountUsersForFabrizioUser: AccountUser[] = [
  fabrizioAccountFabrizioUser,
  flexupAccountFabrizioUser,
  cosysAccountFabrizioUser,
  doMazyAccountFabrizioUser
]

export const accountUserDatasForTotoUser: AccountUserData[] = [
  flexupAccountTotoUserData,
  totoAccountTotoUserData
]
export const accountUsersForTotoUser: AccountUser[] = [flexupAccountTotoUser, totoAccountTotoUser]
