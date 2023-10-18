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

export const allUserDatas: UserData[] = [fabrizioUserData, totoUserData]

export const fabrizioUser: User = {
  ...fabrizioUserData,
  firstName: 'Fabrizio',
  lastName: 'Nastri',
  fullName: 'Fabrizio Nastri',
  mainEmail: 'fabrizio.nastri@gmail.com'
}

export const totoUser: User = {
  ...totoUserData,
  firstName: 'Toto',
  lastName: 'LaRiflette',
  fullName: 'Toto La Riflette',
  mainEmail: 'totoLaRiflette@gmail.com'
}

export const allUsers: User[] = [fabrizioUser, totoUser]
