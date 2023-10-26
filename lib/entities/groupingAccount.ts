import type { Entity } from '.'

export interface GroupingAccountData extends Entity {
  id: string // this is: groupingIdMemberId, only used for json-server.
  groupingId: string
  accountId: string
  role: string
  // memberType: OwnerType
  // arrivalDate?: Date
  // departureDate?: Date
  // status?: string
}

export interface GroupingAccount extends GroupingAccountData {
  groupingName: string
  groupingLabel: string
  memberName: string
  memberLabel: string
}
