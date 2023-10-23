import { Entity } from '.'

export const accountTypeIcons = {
  individual: '👤',
  organization: '🏢'
}

export type LegalPersonType = keyof typeof accountTypeIcons

export interface LegalPerson extends Entity {
  id: string // "o:organizationId" or "i:individualId"
  name: string
  type: LegalPersonType
  personId: string
  typeSymbol: string
  label: string
}
