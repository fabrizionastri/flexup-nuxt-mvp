import {
  // Address,
  // Amount,
  // CountryId,
  CurrencyId,
  Entity
  // LanguageId,
  // LegalPerson
} from './index'
import { LegalPerson } from './legalPerson'

export const organizationStatusMapping = {
  creationNotStarted: 'pending',
  creationOngoing: 'pending',
  creationFiledInGoodOrder: 'pending',
  active: 'registered',
  inactive: 'registered', // Represents an entity that's registered but not currently engaged in business activities.
  reorganized: 'altered',
  merged: 'altered',
  acquired: 'altered',
  inReceivership: 'distressed',
  bankrupt: 'distressed',
  underAdministration: 'distressed',
  dissolving: 'dissolution',
  dissolved: 'dissolution',
  liquidated: 'terminated',
  struckOff: 'terminated',
  annulled: 'terminated',
  restored: 'restorated',
  suspended: 'special',
  provisional: 'special',
  inLitigation: 'special'
} as const

export type OrganizationStatus = keyof typeof organizationStatusMapping
export type OrganizationStatusCategory = (typeof organizationStatusMapping)[OrganizationStatus]

export interface OrganizationData extends Entity {
  id: string
  name: string
  legalName: string
  legalForm: string
  currency: CurrencyId
  country: string /* Country Code ISO3 */
  language: string /* Language Code ISO3 */
  capital: number /* Amount */
  legalFormAbbreviation: string
  registrationAuthority: string
  registrationCity: string
  registrationNumber: string
  registrationDate: Date
  registrationAddressId: string /* Address */
  registrationStatus:
    | 'pending'
    | 'active'
    | 'inactive'
    | 'suspended'
    | 'bankrupt'
    | 'liquidated'
    | 'radiated'
    | 'merged'
    | 'acquired'
    | 'other'
  fiscalYearEnd?: string
  terminationDate?: Date
}

export interface LegalPersonAddress {
  id: string
  legalPersonId: string
  addressId: string
  label: string
  startDate: Date
  endDate?: Date
  status: 'active' | 'suspended' | 'incapacitated'
  terminationReason?: 'resigned' | 'dismissed' | 'deceased' | 'bankrupt' | 'liquidated' | 'other'
}

export interface OrganizationLegalRepresentative {
  id: string
  organizationId: string
  representativeId: string
}

export interface legalRepresentatives {
  title: string
  legalPerson: LegalPerson
  startDate: Date
  endDate?: Date
  statuts: 'active' | 'suspended' | 'incapacitated'
  terminationReason?: 'resigned' | 'dismissed' | 'deceased' | 'bankrupt' | 'liquidated' | 'other'
}
