import type { Entity } from 'entities/entity'
export type IdentifierType = 'username' | 'email' | 'phone'

export interface IdentifierData extends Entity {
  id: string
  type: IdentifierType
  userId: string
  // isVerified?: boolean // only required for email and phone
  // defaultAccountId?: string // allows automatic selection of active account when logging in
  // isPrimary: boolean
  // creationDate: Date
  // verificationDate?: Date
}
