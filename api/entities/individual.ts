import type { Entity } from './generic'

export type Gender = 'male' | 'female' | 'other' | 'undisclosed'
export interface IndividualData extends Entity {
  id: string
  // CHECK : can we use the same id for both user and individual?
  userId: string // should be unique - an individual can have only one user
  firstName: string
  lastName: string
  dateOfBirth: Date
  // countryOfBirth: string
  // cityOfBirth: string
  // nationalities: country[]
  // sex: Gender
}

export interface Individual extends IndividualData {
  fullName: string
}
