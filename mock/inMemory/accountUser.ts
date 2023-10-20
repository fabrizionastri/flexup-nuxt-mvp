import { AccountUserData, AccountUser } from 'entities/accountUser'

export const fabrizioAccountFabrizioUserData: AccountUserData = {
  id: 'fabrizioAccountFabrizioUser', // temp for Json-Server
  accountId: 'fabrizioAccount',
  userId: 'fabrizioUser',
  role: 'owner'
}
export const flexupAccountFabrizioUserData: AccountUserData = {
  id: 'flexupAccountFabrizioUser',
  accountId: 'flexupAccount',
  userId: 'fabrizioUser',
  role: 'owner'
}
export const cosysAccountFabrizioUserData: AccountUserData = {
  id: 'cosysAccountFabrizioUser',
  accountId: 'cosysAccount',
  userId: 'fabrizioUser',
  role: 'owner'
}
export const flexupAccountTotoUserData: AccountUserData = {
  id: 'flexupAccountTotoUser',
  accountId: 'flexupAccount',
  userId: 'totoUser',
  role: 'editor'
}
export const totoAccountTotoUserData: AccountUserData = {
  id: 'totoAccountTotoUser',
  accountId: 'totoAccount',
  userId: 'totoUser',
  role: 'owner'
}
export const doMazyAccountFabrizioUserData: AccountUserData = {
  id: 'doMazyAccountFabrizioUser',
  accountId: 'doMazyAccount',
  userId: 'fabrizioUser',
  role: 'guest'
}

export const allAccountUserDatas: AccountUserData[] = [
  fabrizioAccountFabrizioUserData,
  flexupAccountFabrizioUserData,
  cosysAccountFabrizioUserData,
  flexupAccountTotoUserData,
  totoAccountTotoUserData
]

export const fabrizioAccountFabrizioUser: AccountUser = {
  ...fabrizioAccountFabrizioUserData,
  accountName: 'Fabrizio Nastri',
  accountLabel: 'Fabrizio Nastri 👤',
  userName: 'Fabrizio Nastri',
  userLabel: 'Fabrizio Nastri (Owner)'
}

export const flexupAccountFabrizioUser: AccountUser = {
  ...flexupAccountFabrizioUserData,
  accountName: 'FlexUp',
  accountLabel: 'FlexUp 🚀',
  userName: 'Fabrizio Nastri',
  userLabel: 'Fabrizio Nastri (Owner)'
}

export const cosysAccountFabrizioUser: AccountUser = {
  ...cosysAccountFabrizioUserData,
  accountName: 'Cosys',
  accountLabel: 'Cosys 🏢',
  userName: 'Fabrizio Nastri',
  userLabel: 'Fabrizio Nastri (Owner)'
}

export const flexupAccountTotoUser: AccountUser = {
  ...flexupAccountTotoUserData,
  accountName: 'FlexUp',
  accountLabel: 'FlexUp 🚀',
  userName: 'Toto La Riflette',
  userLabel: 'Toto La Riflette (Editor)'
}

export const totoAccountTotoUser: AccountUser = {
  ...totoAccountTotoUserData,
  accountName: 'Toto La Riflette',
  accountLabel: 'Toto La Riflette 👤',
  userName: 'Toto La Riflette',
  userLabel: 'Toto La Riflette (Owner)'
}

export const doMazyAccountFabrizioUser: AccountUser = {
  ...doMazyAccountFabrizioUserData,
  accountName: 'Groupement du Domaine de Mazy',
  accountLabel: 'Domaine de Mazy 👤',
  userName: 'Fabrizio Nastri',
  userLabel: 'Fabrizio Nastri (Guest)'
}

export const allAccountUsers: AccountUser[] = [
  fabrizioAccountFabrizioUser,
  flexupAccountFabrizioUser,
  cosysAccountFabrizioUser,
  flexupAccountTotoUser,
  totoAccountTotoUser,
  doMazyAccountFabrizioUser
]

export const accountIdsForFabrizioUser: string[] = [
  fabrizioAccountFabrizioUser.accountId,
  flexupAccountFabrizioUser.accountId,
  cosysAccountFabrizioUser.accountId,
  doMazyAccountFabrizioUser.accountId
]

export const accountIdsForTotoUser: string[] = [
  flexupAccountTotoUser.accountId,
  totoAccountTotoUser.accountId
]
