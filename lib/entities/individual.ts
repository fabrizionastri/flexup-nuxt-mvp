import type { CountryData, Entity } from '.'

export type Gender = 'male' | 'female' | 'other' | 'undisclosed'
export interface IndividualData extends Entity {
  id: string
  // CHECK : can we use the same id for both user and individual?
  userId: string // should be unique - an individual can have only one user
  firstName: string
  lastName: string
  birthDate: Date
  birthCity?: string
  birthCountry?: CountryData
  residenceAddress?: string
  residenceCountry?: CountryData
  nationalityCountries?: CountryData[]
  // sex: Gender
}

export interface Individual extends IndividualData {
  fullName: string
}
