import { Entity } from 'entities/_generic'
export type IdentifierType = 'username' | 'email' | 'phone'

export interface IdentifierData extends Entity {
  id: string // id = `${type[0]}:${identifier}`
  userId: string
}

export interface Identifier extends IdentifierData {
  identifier: string
  type: IdentifierType
}
