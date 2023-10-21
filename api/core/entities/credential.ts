import { Entity } from 'entities/_generic'
export type CredentialType = 'username' | 'email' | 'phone'

export interface CredentialData extends Entity {
  id: string
  userId: string
  identifier: string
  type: CredentialType
  password: string
}
