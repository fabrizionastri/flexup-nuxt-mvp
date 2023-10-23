import { Entity } from '.'

export const accountTypeIcons = {
  individual: '👤',
  organization: '🏢'
}

export type LegalPersonType = keyof typeof accountTypeIcons

export interface LegalPersonData extends Entity {
  id: string // "i:individualId" or "o:organizationId"
}
export interface LegalPerson extends LegalPersonData {
  name: string
  type: LegalPersonType
  personId: string
  typeSymbol: string
  label: string
}
