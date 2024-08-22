import type { Entity } from '.'

export interface ConstituentData extends Entity {
  id: string
  groupingId: string
  accountId: string
  createDate: Date // system input, cannot be changed - when was this constituent created in the system
  joinedDate: Date // manual input, by default current date, can be changed - when did this constituent joined the grouping (ie: based on the contract effective date)
  leftDate?: Date //  when did this constituent leave the grouping (if applicable: closed or quit)
  status:
    | 'pending' // default system input - manual input,the constituent's account is pending, or the constituent's request to join the grouping is pending
    | 'active' // manual input, the constituent is an active account, and is an active constituent of the grouping
    | 'suspended' // only system input - the constituent's account was supended, or the constituent was suspended from this grouping by the grouping's authority - option not available for manual change
    | 'expelled' // manual input, the constituent was expelled from this grouping by the grouping's authority
    | 'closed' // manual input,the constituent's account was closed
    | 'quit' // manual input, the constituent decided to leave the grouping
}

export interface Constituent extends ConstituentData {
  groupingName: string
  groupingLabel: string
  accountName: string
  accountLabel: string
  constituentLabel: string // grouping label + account label (eg: 'DoMazy 👥 - FlexUp 🚀')
}
