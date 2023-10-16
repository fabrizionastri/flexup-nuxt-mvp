export type UserStatus = 'active' | 'pending' | 'suspended' | 'closed'

export interface UserData {
  id: string
  password: string
  creationDate: Date
  status: UserStatus
  lastLoginDate?: Date
}

export interface User extends UserData {
  firstName: string
  lastName: string
  fullName: string
}

export interface Useridentifier {
  id: string // this is the email address
  userId: string
  isVerified: boolean
  isPrimary: boolean
  defaultAccountId?: string
  creationDate: Date
  verificationDate?: Date
}
