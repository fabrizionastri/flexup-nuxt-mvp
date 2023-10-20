import { UserCredentialData } from '../../api/core/entities/credential'

export const fabrizioUsernameCredentialData: UserCredentialData = {
  id: 'fabrizioUsernameCredential',
  userId: 'fabrizioUser',
  identifier: 'fabrizio',
  type: 'username',
  password: 'plop'
}

export const fabrizioEmailCredentialData: UserCredentialData = {
  id: 'fabrizioEmailCredential',
  userId: 'fabrizioUser',
  identifier: 'fabrizio@plop.com',
  type: 'email',
  password: 'plop'
}

export const fabrizioPhoneCredentialData: UserCredentialData = {
  id: 'fabrizioPhoneCredential',
  userId: 'fabrizioUser',
  identifier: '06 12 34 56 78',
  type: 'phone',
  password: 'plop'
}

export const totoUsernameCredentialData: UserCredentialData = {
  id: 'totoUsernameCredential',
  userId: 'totoUser',
  identifier: 'toto',
  type: 'username',
  password: 'plop'
}

export const fabrizioCredentialDatas: UserCredentialData[] = [
  fabrizioUsernameCredentialData,
  fabrizioEmailCredentialData,
  fabrizioPhoneCredentialData
]

export const totoCredentialDatas: UserCredentialData[] = [totoUsernameCredentialData]

export const credentialDatas: UserCredentialData[] = [
  ...fabrizioCredentialDatas,
  ...totoCredentialDatas
]
