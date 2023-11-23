import type { Entity } from '.'

export type AccountUserRole = 'admin' | 'editor' | 'guest'

export interface AccountUserData extends Entity {
  id: string // this is: accountId_userId, only used for json-server.
  accountId: string
  userId: string
  role: AccountUserRole
  // creationDate: Date
  // arrivalDate?: Date
  // departureDate?: Date
  // status?: string
}
