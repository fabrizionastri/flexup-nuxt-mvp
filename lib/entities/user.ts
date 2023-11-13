// lib/entities/user.ts
import type { Entity } from '.'

export type UserStatus = 'active' | 'pending' | 'suspended' | 'closed' | 'anonymous'

export interface UserData extends Entity {
  id: string
  status: UserStatus
  creationDate: Date
  lastLoginDate?: Date
  // preferredLanguage: Language
  // preferredCurrency: Currency
}

export interface User extends UserData {
  firstName: string
  lastName: string
  fullName: string
  // mainEmail: string
}
