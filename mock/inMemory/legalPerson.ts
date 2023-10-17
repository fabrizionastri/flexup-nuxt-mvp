export type LegalPersonType = 'organization' | 'individual'

export interface LegalPerson {
  id: string
  type: LegalPersonType
  name: string
  label: string
}

export const legalPersons: LegalPerson[] = [
  {
    id: 'fabrizioPerson',
    type: 'individual',
    name: 'Fabrizio Nastri',
    label: 'Fabrizio Nastri 👤'
  },
  {
    id: 'cosysorganization',
    type: 'organization',
    name: 'Cosys',
    label: 'Cosys 🏢'
  }
]
