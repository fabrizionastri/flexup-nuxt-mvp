import { UserData, User } from 'entities/user'

export const fabrizioNastriUserData: UserData = {
  id: 'fabrizioNastriUser',
  password: 'plop',
  creationDate: new Date('2019-01-01'),
  status: 'active',
  lastLoginDate: new Date('2019-01-01')
}

export const totoLaRifletteData: UserData = {
  id: 'totoLaRiflette',
  password: 'plop',
  creationDate: new Date('2019-01-01'),
  status: 'pending'
}

export const userDatas: UserData[] = [fabrizioNastriUserData, totoLaRifletteData]

export const fabrizioNastriUser: User = {
  ...fabrizioNastriUserData,
  firstName: 'Fabrizio',
  lastName: 'Nastri',
  fullName: 'Fabrizio Nastri'
}

export const totoLaRiflette: User = {
  ...totoLaRifletteData,
  firstName: 'Toto',
  lastName: 'LaRiflette',
  fullName: 'Toto La Riflette'
}

export const users: User[] = [fabrizioNastriUser, totoLaRiflette]
