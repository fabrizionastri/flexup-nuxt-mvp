import type { Entity } from '.'

export const memberRoleTypes = {
  admin: '🔑',
  editor: '✏️',
  guest: '👀'
}
export type MemberRole = keyof typeof memberRoleTypes

export const getMemberRoleSymbol = (memberRole: MemberRole): string => memberRoleTypes[memberRole]

export interface MemberData extends Entity {
  id: string // this is: accountId_userId, only used for json-server.
  accountId: string
  userId: string
  role: MemberRole
  // creationDate: Date
  // arrivalDate?: Date
  // departureDate?: Date
  // status?: string
}
