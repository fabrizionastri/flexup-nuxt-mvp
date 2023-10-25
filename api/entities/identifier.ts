import { Entity } from 'entities/_generic'
export type IdentifierType = 'username' | 'email' | 'phone'

export interface IdentifierData extends Entity {
  id: string // id = `${type[0]}:${identifier}`
  userId: string
  // isVerified?: boolean // only required for email and phone
  // defaultAccountId?: string // allows automatic selection of active account when logging in
  // isPrimary: boolean
  // creationDate: Date
  // verificationDate?: Date
}

export interface Identifier extends IdentifierData {
  identifier: string
  type: IdentifierType
}
