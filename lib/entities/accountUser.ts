import type { Entity } from '.'

export type AccountUserRole = 'owner' | 'admin' | 'editor' | 'guest'

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

export interface AccountUser extends AccountUserData {
  accountName: string
  accountLabel: string
  userName: string
  userLabel: string
}
