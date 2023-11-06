import type { Entity } from '.'

export const personTypeIcons = {
  individual: '👤',
  organization: '🏢'
}

export type LegalPersonType = keyof typeof personTypeIcons

export interface LegalPersonData extends Entity {
  id: string // "i:individualId" or "o:organizationId"
  type: LegalPersonType
  personId: string
}
export interface LegalPerson extends LegalPersonData {
  name: string
  typeSymbol: string
}
