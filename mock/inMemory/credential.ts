import { CredentialData } from '../../api/core/entities/credential'

export const fabrizioUsernameCredentialData: CredentialData = {
  id: 'fabrizioUsernameCredential',
  userId: 'fabrizioUser',
  identifier: 'fabrizioUserName',
  type: 'username',
  password: 'plop'
}

export const fabrizioEmailCredentialData: CredentialData = {
  id: 'fabrizioEmailCredential',
  userId: 'fabrizioUser',
  identifier: 'fabrizio@plop.com',
  type: 'email',
  password: 'plop'
}

export const fabrizioPhoneCredentialData: CredentialData = {
  id: 'fabrizioPhoneCredential',
  userId: 'fabrizioUser',
  identifier: '06 12 34 56 78',
  type: 'phone',
  password: 'plop'
}

export const totoUsernameCredentialData: CredentialData = {
  id: 'totoUsernameCredential',
  userId: 'totoUser',
  identifier: 'totoUsername',
  type: 'username',
  password: 'plop'
}

export const fabrizioCredentialDatas: CredentialData[] = [
  fabrizioUsernameCredentialData,
  fabrizioEmailCredentialData,
  fabrizioPhoneCredentialData
]

export const totoCredentialDatas: CredentialData[] = [totoUsernameCredentialData]

export const credentialDatas: CredentialData[] = [
  ...fabrizioCredentialDatas,
  ...totoCredentialDatas
]
