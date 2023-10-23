import { IdentifierData, Identifier } from '../../api/core/entities/identifier'

// Raw data
export const fabrizioUsernameIdentifierData: IdentifierData = {
  id: 'u:fabrizioUsername',
  userId: 'fabrizioUser'
}

export const fabrizioEmailIdentifierData: IdentifierData = {
  id: 'e:fabrizio@gmail.com',
  userId: 'fabrizioUser'
}

export const fabrizioPhoneIdentifierData: IdentifierData = {
  id: 'p:+33612345678',
  userId: 'fabrizioUser'
}

export const totoUsernameIdentifierData: IdentifierData = {
  id: 'u:totoUsername',
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

// Computed

export const fabrizioUsernameIdentifier: Identifier = {
  ...fabrizioUsernameIdentifierData,
  identifier: 'fabrizioUserName',
  type: 'username'
}

export const fabrizioEmailIdentifier: Identifier = {
  ...fabrizioEmailIdentifierData,
  identifier: 'fabrizio@plop.com',
  type: 'email'
}

export const fabrizioPhoneIdentifier: Identifier = {
  ...fabrizioPhoneIdentifierData,
  identifier: '+33612345678',
  type: 'phone'
}

export const totoUsernameIdentifier: Identifier = {
  ...totoUsernameIdentifierData,
  identifier: 'totoUsername',
  type: 'username'
}

export const fabrizioIdentifiers: Identifier[] = [
  fabrizioUsernameIdentifier,
  fabrizioEmailIdentifier,
  fabrizioPhoneIdentifier
]

export const totoIdentifiers: Identifier[] = [totoUsernameIdentifier]

export const identifiers: Identifier[] = [...fabrizioIdentifiers, ...totoIdentifiers]
