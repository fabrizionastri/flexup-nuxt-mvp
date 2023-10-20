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
  status: 'active',
  lastLoginDate: new Date('2019-01-01')
}

export const pendingUserData: UserData = {
  id: 'pendingUser',
  password: 'plop',
  creationDate: new Date('2019-01-01'),
  status: 'pending'
}

export const userDatas: UserData[] = [fabrizioUserData, totoUserData, pendingUserData]

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
  lastName: 'La Riflette',
  fullName: 'Toto La Riflette',
  mainEmail: 'toto.lariflette@gmail.com'
}

export const pendingUser: User = {
  ...pendingUserData,
  firstName: '',
  lastName: '',
  fullName: '',
  mainEmail: ''
}

export const users: User[] = [fabrizioUser, totoUser, pendingUser]
