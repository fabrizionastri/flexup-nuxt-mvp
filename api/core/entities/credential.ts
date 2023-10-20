export type CredentialType = 'username' | 'email' | 'phone'

export interface CredentialData {
  id: string
  userId: string
  identifier: string
  type: CredentialType
  password: string
}
