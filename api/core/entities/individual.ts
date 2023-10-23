import { Entity } from './generic'
export interface IndividualData extends Entity {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: Date
}

export interface Individual extends IndividualData {
  fullName: string
}
