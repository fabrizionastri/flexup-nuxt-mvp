import { AccountMemberData, AccountMember } from 'entities/accountUser'

export const fabrizioAccount_fabrizioUserData: AccountMemberData = {
  id: 'fabrizioAccount_fabrizioUser',
  accountId: 'fabrizioAccount',
  userId: 'fabrizioUser',
  role: 'Owner'
}

export const flexup_fabrizioUserData: AccountMemberData = {
  id: 'flexup_fabrizioUser',
  accountId: 'flexup',
  userId: 'fabrizioUser',
  role: 'Owner'
}

export const cosysAccount_fabrizioUserData: AccountMemberData = {
  id: 'cosysAccount_fabrizioUser',
  accountId: 'cosysAccount',
  userId: 'fabrizioUser',
  role: 'Owner'
}

export const flexup_totoUserData: AccountMemberData = {
  id: 'flexup_totoUser',
  accountId: 'flexup',
  userId: 'totoUser',
  role: 'Editor'
}

export const totoAccount_totoUserData: AccountMemberData = {
  id: 'totoAccount_totoUser',
  accountId: 'totoAccount',
  userId: 'totoUser',
  role: 'Owner'
}

export const accountUserDatas: AccountMemberData[] = [
  fabrizioAccount_fabrizioUserData,
  flexup_fabrizioUserData,
  cosysAccount_fabrizioUserData,
  flexup_totoUserData,
  totoAccount_totoUserData
]

export const fabrizioAccount_fabrizioUser: AccountMember = {
  ...fabrizioAccount_fabrizioUserData,
  accountName: 'Fabrizio Nastri',
  accountLabel: 'Fabrizio Nastri 👤',
  userName: 'Fabrizio Nastri',
  userLabel: 'Fabrizio Nastri (Owner)'
}

export const flexup_fabrizioUser: AccountMember = {
  ...flexup_fabrizioUserData,
  accountName: 'FlexUp',
  accountLabel: 'FlexUp 🚀',
  userName: 'Fabrizio Nastri',
  userLabel: 'Fabrizio Nastri (Owner)'
}

export const cosysAccount_fabrizioUser: AccountMember = {
  ...cosysAccount_fabrizioUserData,
  accountName: 'Cosys',
  accountLabel: 'Cosys 🏢',
  userName: 'Fabrizio Nastri',
  userLabel: 'Fabrizio Nastri (Owner)'
}

export const flexup_totoUser: AccountMember = {
  ...flexup_totoUserData,
  accountName: 'FlexUp',
  accountLabel: 'FlexUp 🚀',
  userName: 'Toto La Riflette',
  userLabel: 'Toto La Riflette (Editor)'
}

export const totoAccount_totoUser: AccountMember = {
  ...totoAccount_totoUserData,
  accountName: 'Toto La Riflette',
  accountLabel: 'Toto La Riflette 👤',
  userName: 'Toto La Riflette',
  userLabel: 'Toto La Riflette (Owner)'
}

export const accountUsers: AccountMember[] = [
  fabrizioAccount_fabrizioUser,
  flexup_fabrizioUser,
  cosysAccount_fabrizioUser,
  flexup_totoUser,
  totoAccount_totoUser
]
