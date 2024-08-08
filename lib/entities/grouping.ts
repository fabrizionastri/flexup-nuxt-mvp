import type { Entity } from '.'

export interface GroupingData extends Entity {
  id: string
  name: string // a unique name for the grouping
  scope: string // a description of the grouping's purpose and economic perimeter
  representativeAccountId: string // the grouping's main owner, acting as the legal representative
  creationDate: Date // auto-generated upon creation
  createdByMemberId: string // the account member (ie: user + role) who created the grouping, auto-generated upon creation
  countryId: string // required to know the applicable jurisdiction
  status:
    | 'active' // the grouping is active
    | 'pending' // the grouping is pending system check that the related shared account is active
    | 'suspended' // the grouping is suspended by the system
    | 'closed' // the grouping was closed by a grouping's shared account's admin

  // groupingContractId: string // Not in MVP
  // roles?: string[] // each grouping can create its own roles (farmer, processor, distributor, investor, etc.) - Not in MVP
}

export interface Grouping extends GroupingData {
  label: string // name + symbol for grouping (eg: 'DoMazy 👥')
}
