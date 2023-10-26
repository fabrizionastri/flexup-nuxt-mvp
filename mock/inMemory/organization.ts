import type { OrganizationData } from 'entities/organization'

export const cosysOrganizationData: OrganizationData = {
  id: 'cosysOrganization',
  name: 'Cosys',
  legalName: 'Cosys S.C.',
  legalForm: 'Société Civile',
  currency: 'EUR',
  country: 'FRA',
  language: 'FRA',
  capital: 100005,
  legalFormAbbreviation: 'S.C.',
  registrationAuthority: "Chambre de Commerce et d'Industrie de Paris",
  registrationCity: 'Paris',
  registrationNumber: '123456789',
  registrationDate: new Date('2008-01-01'),
  registrationAddressId: 'cosysOrganization',
  registrationStatus: 'active',
  fiscalYearEnd: '12-31',
  terminationDate: new Date('2108-12-23')
}

export const organizationDatas = [cosysOrganizationData]
export const organizations = [cosysOrganizationData]
