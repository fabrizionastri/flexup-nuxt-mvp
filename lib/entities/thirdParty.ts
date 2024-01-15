import type { Entity } from '.'

export interface ThirdParty extends Entity {
  id: string // this field is not really required, only if DB imposes it
  myAccountId: string
  thirdPartyAccountId: string
  templateOrderId: string // this is the id of the order that will be used as a template for any new order & contract created for this third party by the current account
  frequency: 'Favourite' | 'Normal' | 'Archived' // please suggest a better name for this field
}
