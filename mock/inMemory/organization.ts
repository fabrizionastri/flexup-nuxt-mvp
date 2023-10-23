import { CurrencyId } from './../../api/core/entities/currency'
export interface OrganizationData {
  id: string
  name: string
  legalName: string
  legalForm: string
  legalFormAbbreviation: string
  registrationAuthority: string
  registrationCity: string
  registrationNumber: string
  registrationDate: Date
  registrationAddress: Address
  currency: CurrencyId
  language: LanguageId
}

import { Address, Amount, CountryIso3, CurrencyIso3, LanguageIso3, Person } from './index'

interface Entity {
  country: CountryIso3

  addresses: [{ [key: string]: Address }]
  capital: Amount
  legalRepresentatives: [
    {
      title: string
      legalPerson: LegalPerson
      startDate: Date
      endDate?: Date
      statuts: 'active' | 'suspended' | 'incapacitated'
      terminationReason?:
        | 'resigned'
        | 'dismissed'
        | 'deceased'
        | 'bankrupt'
        | 'liquidated'
        | 'other'
    }
  ]
}

type LegalPerson = Person | Entity
