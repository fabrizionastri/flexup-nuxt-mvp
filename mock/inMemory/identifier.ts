import type { IdentifierData /* Identifier */ } from 'entities/identifier'

// Raw data
export const fabrizioUsernameIdentifierData: IdentifierData = {
  id: 'fabriziousername',
  type: 'username',
  userId: 'fabrizioUser'
}

export const fabrizioEmailIdentifierData: IdentifierData = {
  id: 'fabrizio@gmail.com',
  type: 'email',
  userId: 'fabrizioUser'
}

export const fabrizioPhoneIdentifierData: IdentifierData = {
  id: '+33612345678',
  type: 'phone',
  userId: 'fabrizioUser'
}

export const totoUsernameIdentifierData: IdentifierData = {
  id: 'totousername',
  type: 'username',
  userId: 'totoUser'
}

export const fabrizioIdentifierDatas: IdentifierData[] = [
  fabrizioUsernameIdentifierData,
  fabrizioEmailIdentifierData,
  fabrizioPhoneIdentifierData
]

export const totoIdentifierDatas: IdentifierData[] = [totoUsernameIdentifierData]

export const identifierDatas: IdentifierData[] = [
  ...fabrizioIdentifierDatas,
  ...totoIdentifierDatas
]
