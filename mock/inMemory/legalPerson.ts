import type { LegalPersonData, LegalPerson } from 'entities/legalPerson'

export const fabrizioLegalPersonData: LegalPersonData = {
  id: 'individual:fabrizioIndividual',
  type: 'individual',
  personId: 'fabrizioIndividual'
}
export const fabrizioLegalPerson: LegalPerson = {
  ...fabrizioLegalPersonData,
  name: 'Fabrizio Nastri',
  typeSymbol: '👤'
}

export const cosyslegalPersonData: LegalPersonData = {
  id: 'organization:cosysOrganization',
  type: 'organization',
  personId: 'cosysOrganization'
}
export const cosyslegalPerson: LegalPerson = {
  ...cosyslegalPersonData,
  name: 'Cosys',
  typeSymbol: '🏢'
}

export const legalPersonDatas: LegalPersonData[] = [fabrizioLegalPersonData, cosyslegalPersonData]
export const legalPersons: LegalPerson[] = [fabrizioLegalPerson, cosyslegalPerson]
