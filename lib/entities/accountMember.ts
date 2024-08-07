import type { Entity } from '.'

export const accountMemberRoleTypes = {
  admin: '🔑',
  editor: '✏️',
  guest: '👀'
}
export type AccountUserRole = keyof typeof accountMemberRoleTypes

export const getAccountUserRoleSymbol = (accountMemberRole: AccountUserRole): string =>
  accountMemberRoleTypes[accountMemberRole]

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
