import type { Entity } from '.'

export const personTypeIcons = {
  individual: '👤',
  organization: '🏢'
}

export type LegalPersonType = keyof typeof personTypeIcons

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
