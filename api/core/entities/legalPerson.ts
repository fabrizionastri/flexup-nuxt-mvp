import { offsetDate } from 'usecases/createFirstIterations'
export const accountTypeIcons = {
  individual: '👤',
  organization: '🏢'
}

export type LegalPersonType = keyof typeof accountTypeIcons

export interface LegalPerson extends LegalPersonData {
  id: string
  name: string
  type: LegalPersonType
  personId: string
  typeSymbol: string
  label: string
}
