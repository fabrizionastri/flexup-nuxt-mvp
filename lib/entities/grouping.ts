import type { Entity } from '.'

export interface GroupingData extends Entity {
  id: string
  name: string // a unique name for the grouping
  scope: string // a description of the grouping's purpose and economic perimeter
  startDate: Date // manual input, by default current date, can be changed - when did this grouping start its activity
  creationDate: Date // system input - auto-generated upon creation
  createdByMemberId: string // system input upon creation, cannot be modifed - the account member (ie: user + role) who created the grouping, auto-generated upon creation
  countryId: string // manual input, but default the same as the current account - required to know the applicable jurisdiction
  status:
    | 'pending' // the grouping is pending system check that the related shared account is active
    | 'active' // the grouping is active (ie. the related shared account is active and has at least 1 active member admin, and 1 active constituent)
    | 'suspended' // the grouping is suspended by the system
    | 'closed' // the grouping was closed by a grouping's shared account's admin

  // representativeAccountId: string // system input upon creation - the current account, can be changed later. the grouping's main owner, acting as the legal representative - Not in MVP
  // groupingContractId: string // Not in MVP
  // roles?: string[] // each grouping can create its own roles (farmer, processor, distributor, investor, etc.) - Not in MVP
}

export interface Grouping extends GroupingData {
  label: string // name + symbol for grouping (eg: 'DoMazy 👥')
}
