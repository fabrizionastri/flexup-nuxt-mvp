import type { MemberData, Account, AccountData } from 'lib/entities'

import * as accounts from './account'

export const fabrizioAccountFabrizioUserData: MemberData = {
  id: 'fabrizioAccount:fabrizioUser', // temp for Json-Server
  accountId: 'fabrizioAccount',
  userId: 'fabrizioUser',
  role: 'admin'
}
export const fabrizioAccountFabrizioUser: Account = {
  ...accounts.fabrizioAccount,
  currentUserRole: 'admin',
  roleSymbol: '🔑'
}

export const flexupAccountFabrizioUserData: MemberData = {
  id: 'flexupAccount:fabrizioUser',
  accountId: 'flexupAccount',
  userId: 'fabrizioUser',
  role: 'admin'
}
export const flexupAccountFabrizioUser: Account = {
  ...accounts.flexupAccount,
  currentUserRole: 'admin',
  roleSymbol: '🔑'
}

export const cosysAccountFabrizioUserData: MemberData = {
  id: 'cosysAccount:fabrizioUser',
  accountId: 'cosysAccount',
  userId: 'fabrizioUser',
  role: 'admin'
}
export const cosysAccountFabrizioUser: Account = {
  ...accounts.cosysAccount,
  currentUserRole: 'admin',
  roleSymbol: '🔑'
}

export const doMazyAccountFabrizioUserData: MemberData = {
  id: 'doMazyAccount:FabrizioUser',
  accountId: 'doMazyAccount',
  userId: 'fabrizioUser',
  role: 'editor'
}
export const doMazyAccountFabrizioUser: Account = {
  ...accounts.doMazyAccount,
  currentUserRole: 'editor',
  roleSymbol: '✏️'
}

export const pizzaDOroTakeAwayAccountFabrizioUserData: MemberData = {
  id: 'pizzaDOroTakeAwayAccount:FabrizioUser',
  accountId: 'pizzaDOroTakeAwayAccount',
  userId: 'fabrizioUser',
  role: 'guest'
}
export const pizzaDOroTakeAwayAccountFabrizioUser: Account = {
  ...accounts.pizzaDOroTakeAwayAccount,
  currentUserRole: 'guest',
  roleSymbol: '👀'
}

export const memberDatasForFabrizioUser: MemberData[] = [
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

export const activeAccountDatasForFabrizioUser: MemberData[] = [
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

export const totoAccountTotoUserData: MemberData = {
  id: 'totoAccount:totoUser',
  accountId: 'totoAccount',
  userId: 'totoUser',
  role: 'admin',
  roleSymbol: '🔑'
}
export const totoAccountTotoUser: Account = {
  ...accounts.totoAccount,
  currentUserRole: 'admin',
  roleSymbol: '🔑'
}

export const flexupAccountTotoUserData: MemberData = {
  id: 'flexupAccount:totoUser',
  accountId: 'flexupAccount',
  userId: 'totoUser',
  role: 'editor'
}
export const flexupAccountTotoUser: Account = {
  ...accounts.flexupAccount,
  currentUserRole: 'editor',
  roleSymbol: '✏️'
}

export const memberDatasForTotoUser: MemberData[] = [
  flexupAccountTotoUserData,
  totoAccountTotoUserData
]
export const accountDatasForTotoUser: AccountData[] = [
  accounts.flexupAccountData,
  accounts.totoAccountData
]
export const accountsForTotoUser: Account[] = [flexupAccountTotoUser, totoAccountTotoUser]

export const membersForTotoUser: Account[] = [flexupAccountTotoUser, totoAccountTotoUser]

export const memberDatasForFlexupAccount: MemberData[] = [
  flexupAccountFabrizioUserData,
  flexupAccountTotoUserData
]
export const membersForFlexupAccount: Account[] = [flexupAccountFabrizioUser, flexupAccountTotoUser]

export const memberDatas: MemberData[] = [
  fabrizioAccountFabrizioUserData,
  flexupAccountFabrizioUserData,
  cosysAccountFabrizioUserData,
  flexupAccountTotoUserData,
  totoAccountTotoUserData,
  doMazyAccountFabrizioUserData,
  pizzaDOroTakeAwayAccountFabrizioUserData
]
export const members: Account[] = [
  fabrizioAccountFabrizioUser,
  flexupAccountFabrizioUser,
  cosysAccountFabrizioUser,
  flexupAccountTotoUser,
  totoAccountTotoUser,
  doMazyAccountFabrizioUser,
  pizzaDOroTakeAwayAccountFabrizioUser
]
