import { AccountUserData, AccountUser } from 'entities/accountUser'

export const fabrizioAccountFabrizioUserData: AccountUserData = {
  id: 'fabrizioAccountFabrizioUser',
  accountId: 'fabrizioAccount',
  userId: 'fabrizioUser',
  role: 'Owner'
}

export const flexupAccountFabrizioUserData: AccountUserData = {
  id: 'flexupAccountFabrizioUser',
  accountId: 'flexupAccount',
  userId: 'fabrizioUser',
  role: 'Owner'
}

export const cosysAccountFabrizioUserData: AccountUserData = {
  id: 'cosysAccountFabrizioUser',
  accountId: 'cosysAccount',
  userId: 'fabrizioUser',
  role: 'Owner'
}

export const flexupAccountTotoUserData: AccountUserData = {
  id: 'flexupAccountTotoUser',
  accountId: 'flexupAccount',
  userId: 'totoUser',
  role: 'Editor'
}

export const totoAccountTotoUserData: AccountUserData = {
  id: 'totoAccountTotoUser',
  accountId: 'totoAccount',
  userId: 'totoUser',
  role: 'Owner'
}

export const domMazyAccountFabrizioUserData: AccountUserData = {
  id: 'domMazyAccountFabrizioUser',
  accountId: 'domMazyAccount',
  userId: 'fabrizioUser',
  role: 'Guest'
}

export const accountUserDatas: AccountUserData[] = [
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

export const domMazyAccountFabrizioUser: AccountUser = {
  ...domMazyAccountFabrizioUserData,
  accountName: 'Domaine de Mazy',
  accountLabel: 'Domaine de Mazy 👤',
  userName: 'Fabrizio Nastri',
  userLabel: 'Fabrizio Nastri (Guest)'
}

export const accountUsers: AccountUser[] = [
  fabrizioAccountFabrizioUser,
  flexupAccountFabrizioUser,
  cosysAccountFabrizioUser,
  flexupAccountTotoUser,
  totoAccountTotoUser,
  domMazyAccountFabrizioUser
]
