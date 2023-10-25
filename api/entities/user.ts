import { Entity } from '.'

export type UserStatus = 'active' | 'pending' | 'suspended' | 'closed'

export interface UserData extends Entity {
  id: string
  status: UserStatus
  creationDate: Date
  lastLoginDate?: Date
}

export interface User extends UserData {
  firstName: string
  lastName: string
  fullName: string
  mainEmail: string
}
