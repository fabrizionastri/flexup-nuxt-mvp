import type { LegalPersonData, LegalPerson } from 'entities/legalPerson'

export const fabrizioLegalPersonData: LegalPersonData = {
  id: 'i:fabrizioIndividual'
}
export const cosyslegalPersonData: LegalPersonData = {
  id: 'o:cosysOrganization'
}
export const legalPersonDatas: LegalPersonData[] = [fabrizioLegalPersonData, cosyslegalPersonData]

export const fabrizioLegalPerson: LegalPerson = {
  ...fabrizioLegalPersonData,
  name: 'Fabrizio Nastri',
  type: 'individual',
  personId: 'fabrizioIndividual',
  typeSymbol: '👤',
  label: 'Fabrizio Nastri 👤'
}
export const cosyslegalPerson: LegalPerson = {
  ...cosyslegalPersonData,
  id: 'o:cosysOrganization',
  name: 'Cosys',
  type: 'organization',
  personId: 'cosysOrganization',
  typeSymbol: '🏢',
  label: 'Cosys 🏢'
}
export const legalPersons: LegalPerson[] = [fabrizioLegalPerson, cosyslegalPerson]
