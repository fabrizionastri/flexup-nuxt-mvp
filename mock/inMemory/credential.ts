export type UserCredentialType = 'username' | 'email' | 'phone'

export interface UserCredential {
  id: string
  userId: string
  identifier: string
  type: UserCredentialType
  password: string
  // creationDate: Date
  // status: string
  // lastLoginDate: Date
}

export const fabrizioUsernameCredential: UserCredential = {
  id: 'fabrizioUsernameCredential',
  userId: 'fabrizioUser',
  identifier: 'fabrizio',
  type: 'username',
  password: 'plop'
}

export const fabrizioEmailCredential: UserCredential = {
  id: 'fabrizioEmailCredential',
  userId: 'fabrizioUser',
  identifier: 'fabrizio@plop.com',
  type: 'email',
  password: 'plop'
}

export const fabrizioPhoneCredential: UserCredential = {
  id: 'fabrizioPhoneCredential',
  userId: 'fabrizioUser',
  identifier: '06 12 34 56 78',
  type: 'phone',
  password: 'plop'
}

export const totoUsernameCredential: UserCredential = {
  id: 'totoUsernameCredential',
  userId: 'totoUser',
  identifier: 'toto',
  type: 'username',
  password: 'plop'
}

export const fabrizioCredentials: UserCredential[] = [
  fabrizioUsernameCredential,
  fabrizioEmailCredential,
  fabrizioPhoneCredential
]

export const totoCredentials: UserCredential[] = [totoUsernameCredential]

export const allCredentials: UserCredential[] = [...fabrizioCredentials, ...totoCredentials]

export const allCredentialDatas = allCredentials
