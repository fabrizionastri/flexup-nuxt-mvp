export type LegalPersonType = 'Organization' | 'Individual'

export interface LegalPerson {
  id: string
  type: LegalPersonType
  name: string
  label: string
}

export const legalPersons: LegalPerson[] = [
  {
    id: 'fabrizioPerson',
    type: 'Individual',
    name: 'Fabrizio Nastri',
    label: 'Fabrizio Nastri 👤'
  },
  {
    id: 'cosysOrganization',
    type: 'Organization',
    name: 'Cosys',
    label: 'Cosys 🏢'
  }
]
