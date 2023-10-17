import { UserData, User } from 'entities/user'

export const fabrizioUserData: UserData = {
  id: 'fabrizioUser',
  password: 'plop',
  creationDate: new Date('2019-01-01'),
  status: 'active',
  lastLoginDate: new Date('2019-01-01')
}

export const totoUserData: UserData = {
  id: 'totoUser',
  password: 'plop',
  creationDate: new Date('2019-01-01'),
  status: 'pending'
}

export const userDatas: UserData[] = [fabrizioUserData, totoUserData]

export const fabrizioUser: User = {
  ...fabrizioUserData,
  firstName: 'Fabrizio',
  lastName: 'Nastri',
  fullName: 'Fabrizio Nastri'
}

export const totoUser: User = {
  ...totoUserData,
  firstName: 'Toto',
  lastName: 'LaRiflette',
  fullName: 'Toto La Riflette'
}

export const users: User[] = [fabrizioUser, totoUser]
