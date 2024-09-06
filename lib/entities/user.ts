// lib/entities/user.ts
import type { Entity } from '.'

export type UserStatus =
  | 'active' // the user is active and can log in (ie: email verfied, personal account created and active, user is admin of his personal account and his membership to this account is active)
  | 'pending' // the user profile and personal account creation process is not yet completed
  | 'suspended' // the user has been suspended by the system
  | 'closed' // the user has closed their account

export interface UserData extends Entity {
  id: string
  status: UserStatus
  creationDate: Date
  lastLoginDate?: Date
  email: string
  // preferredLanguage: Language
  // preferredCurrency: Currency
}

export interface User extends UserData {
  firstName: string
  lastName: string
  fullName: string
  // mainEmail: string
}
