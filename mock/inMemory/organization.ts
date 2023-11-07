import type { OrganizationData } from 'entities/organization'

export const cosysOrganizationData: OrganizationData = {
  id: 'cosysOrganization',
  name: 'Cosys',
  legalName: 'Cosys S.C.',
  legalForm: 'Société Civile',
  currencyId: 'EUR',
  countryId: 'FRA',
  languageId: 'FRA',
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

export const agroCoopOrganizationData: OrganizationData = {
  id: 'agroCoopOrganization',
  name: 'Agro Coopérative du Canton de Vaud',
  legalName: 'Coopérative Agricole du Canton de Vaud SCOP',
  legalForm: 'Société Coopérative de Production',
  currencyId: 'CHF',
  countryId: 'CHE',
  languageId: 'FRA',
  capital: 10000,
  legalFormAbbreviation: 'S.C.O.P.',
  registrationAuthority: "Chambre vaudoise du commerce et de l'industrie (CVCI)",
  registrationCity: 'Lausanne',
  registrationNumber: '6549866452',
  registrationDate: new Date('2018-01-01'),
  registrationAddressId: 'agroCoopOrganization',
  registrationStatus: 'active',
  fiscalYearEnd: '12-31',
  terminationDate: new Date('2118-12-23')
}

export const organizationDatas = [cosysOrganizationData, agroCoopOrganizationData]
export const organizations = [cosysOrganizationData, agroCoopOrganizationData]
