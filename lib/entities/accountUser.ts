import type { Entity } from '.'

export const accountUserRoleTypes = {
  admin: '👑',
  editor: '✏️',
  guest: '👀'
}
export type AccountUserRole = keyof typeof accountUserRoleTypes

export const getAccountUserRoleSymbol = (accountUserRole: AccountUserRole): string =>
  accountUserRoleTypes[accountUserRole]

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
