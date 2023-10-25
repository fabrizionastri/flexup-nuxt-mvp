import { IdentifierData /* Identifier */ } from 'entities/identifier'

// Raw data
export const fabrizioUsernameIdentifierData: IdentifierData = {
  id: 'fabrizioUsername',
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
  id: 'totoUsername',
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

// Computed - NOT RELEVELANT FOR NOW
//
// export const fabrizioUsernameIdentifier: Identifier = {
//   ...fabrizioUsernameIdentifierData,

// }
//
// export const fabrizioEmailIdentifier: Identifier = {
//   ...fabrizioEmailIdentifierData,

// }
//
// export const fabrizioPhoneIdentifier: Identifier = {
//   ...fabrizioPhoneIdentifierData,

// }
//
// export const totoUsernameIdentifier: Identifier = {
//   ...totoUsernameIdentifierData,
// }
//
// export const fabrizioIdentifiers: Identifier[] = [
//   fabrizioUsernameIdentifier,
//   fabrizioEmailIdentifier,
//   fabrizioPhoneIdentifier
// ]
//
// export const totoIdentifiers: Identifier[] = [totoUsernameIdentifier]
//
// export const identifiers: Identifier[] = [...fabrizioIdentifiers, ...totoIdentifiers]
