// import { OwnerType } from './account'

export interface GroupingMemberData {
  id: string // this is: groupingId_memberId, only used for json-server.
  groupingId: string
  memberId: string
  role: string
  // memberType: OwnerType
  // arrivalDate?: Date
  // departureDate?: Date
  // status?: string
}

export interface GroupingMember extends GroupingMemberData {
  groupingName: string
  groupingLabel: string
  memberName: string
  memberLabel: string
}
