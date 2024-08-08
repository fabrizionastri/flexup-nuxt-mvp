import type { Entity } from '.'

export interface ConstituentData extends Entity {
  id: string
  groupingId: string
  accountId: string
  joinedDate: Date // when did this constituent join the grouping
  leftDate?: Date //  when did this constituent leave the grouping (if applicable: closed or quit)
  status:
    | 'active' // the constituent is an active account, and is an active constituent of the grouping
    | 'pending' // the constituent's account is pending, or the constituent's request to join the grouping is pending
    | 'suspended' // the constituent's account was supended, or the constituent was suspended from this grouping by the grouping's authority
    | 'expelled' // the constituent was expelled from this grouping by the grouping's authority
    | 'closed' // the constituent's account was closed
    | 'quit' // the constituent decided to leave the grouping
}

export interface Constituent extends ConstituentData {
  groupingName: string
  groupingLabel: string
  memberName: string
  memberLabel: string
}
