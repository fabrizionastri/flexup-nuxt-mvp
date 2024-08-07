import type { AccountUserData, Account, AccountData } from 'lib/entities'

import * as accounts from './account'

export const fabrizioAccountFabrizioUserData: AccountUserData = {
  id: 'fabrizioAccount:fabrizioUser', // temp for Json-Server
  accountId: 'fabrizioAccount',
  userId: 'fabrizioUser',
  role: 'admin'
}
export const fabrizioAccountFabrizioUser: Account = {
  ...accounts.fabrizioAccount,
  role: 'admin',
  roleSymbol: '🔑'
}

export const flexupAccountFabrizioUserData: AccountUserData = {
  id: 'flexupAccount:fabrizioUser',
  accountId: 'flexupAccount',
  userId: 'fabrizioUser',
  role: 'admin'
}
export const flexupAccountFabrizioUser: Account = {
  ...accounts.flexupAccount,
  role: 'admin',
  roleSymbol: '🔑'
}

export const cosysAccountFabrizioUserData: AccountUserData = {
  id: 'cosysAccount:fabrizioUser',
  accountId: 'cosysAccount',
  userId: 'fabrizioUser',
  role: 'admin'
}
export const cosysAccountFabrizioUser: Account = {
  ...accounts.cosysAccount,
  role: 'admin',
  roleSymbol: '🔑'
}

export const doMazyAccountFabrizioUserData: AccountUserData = {
  id: 'doMazyAccount:FabrizioUser',
  accountId: 'doMazyAccount',
  userId: 'fabrizioUser',
  role: 'editor'
}
export const doMazyAccountFabrizioUser: Account = {
  ...accounts.doMazyAccount,
  role: 'editor',
  roleSymbol: '✏️'
}

export const pizzaDOroTakeAwayAccountFabrizioUserData: AccountUserData = {
  id: 'pizzaDOroTakeAwayAccount:FabrizioUser',
  accountId: 'pizzaDOroTakeAwayAccount',
  userId: 'fabrizioUser',
  role: 'guest'
}
export const pizzaDOroTakeAwayAccountFabrizioUser: Account = {
  ...accounts.pizzaDOroTakeAwayAccount,
  role: 'guest',
  roleSymbol: '👀'
}

export const accountMemberDatasForFabrizioUser: AccountUserData[] = [
  fabrizioAccountFabrizioUserData,
  flexupAccountFabrizioUserData,
  cosysAccountFabrizioUserData,
  doMazyAccountFabrizioUserData,
  pizzaDOroTakeAwayAccountFabrizioUserData
]
export const accountDatasForFabrizioUser: AccountData[] = [
  accounts.fabrizioAccountData,
  accounts.flexupAccountData,
  accounts.cosysAccountData,
  accounts.doMazyAccountData,
  accounts.pizzaDOroTakeAwayAccountData
]
export const accountsForFabrizioUser: Account[] = [
  fabrizioAccountFabrizioUser,
  flexupAccountFabrizioUser,
  cosysAccountFabrizioUser,
  doMazyAccountFabrizioUser,
  pizzaDOroTakeAwayAccountFabrizioUser
]

export const activeAccountDatasForFabrizioUser: AccountUserData[] = [
  fabrizioAccountFabrizioUserData,
  flexupAccountFabrizioUserData,
  cosysAccountFabrizioUserData,
  doMazyAccountFabrizioUserData
]
export const activeAccountsForFabrizioUser: Account[] = [
  fabrizioAccountFabrizioUser,
  flexupAccountFabrizioUser,
  cosysAccountFabrizioUser,
  doMazyAccountFabrizioUser
]

export const totoAccountTotoUserData: AccountUserData = {
  id: 'totoAccount:totoUser',
  accountId: 'totoAccount',
  userId: 'totoUser',
  role: 'admin',
  roleSymbol: '🔑'
}
export const totoAccountTotoUser: Account = {
  ...accounts.totoAccount,
  role: 'admin',
  roleSymbol: '🔑'
}

export const flexupAccountTotoUserData: AccountUserData = {
  id: 'flexupAccount:totoUser',
  accountId: 'flexupAccount',
  userId: 'totoUser',
  role: 'editor'
}
export const flexupAccountTotoUser: Account = {
  ...accounts.flexupAccount,
  role: 'editor',
  roleSymbol: '✏️'
}

export const accountMemberDatasForTotoUser: AccountUserData[] = [
  flexupAccountTotoUserData,
  totoAccountTotoUserData
]
export const accountDatasForTotoUser: AccountData[] = [
  accounts.flexupAccountData,
  accounts.totoAccountData
]
export const accountsForTotoUser: Account[] = [flexupAccountTotoUser, totoAccountTotoUser]

export const accountMembersForTotoUser: Account[] = [flexupAccountTotoUser, totoAccountTotoUser]

export const accountMemberDatasForFlexupAccount: AccountUserData[] = [
  flexupAccountFabrizioUserData,
  flexupAccountTotoUserData
]
export const accountMembersForFlexupAccount: Account[] = [
  flexupAccountFabrizioUser,
  flexupAccountTotoUser
]

export const accountMemberDatas: AccountUserData[] = [
  fabrizioAccountFabrizioUserData,
  flexupAccountFabrizioUserData,
  cosysAccountFabrizioUserData,
  flexupAccountTotoUserData,
  totoAccountTotoUserData,
  doMazyAccountFabrizioUserData,
  pizzaDOroTakeAwayAccountFabrizioUserData
]
export const accountMembers: Account[] = [
  fabrizioAccountFabrizioUser,
  flexupAccountFabrizioUser,
  cosysAccountFabrizioUser,
  flexupAccountTotoUser,
  totoAccountTotoUser,
  doMazyAccountFabrizioUser,
  pizzaDOroTakeAwayAccountFabrizioUser
]
