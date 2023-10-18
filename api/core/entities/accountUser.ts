export type AccountRole = 'Owner' | 'Admin' | 'Editor' | 'Guest'

export interface AccountUserData {
  id: string // this is: accountId_userId, only used for json-server.
  accountId: string
  userId: string
  role: AccountRole
  // creationDate: Date
  // arrivalDate?: Date
  // departureDate?: Date
  // status?: string
}

export interface AccountUser extends AccountUserData {
  accountName: string
  accountLabel: string
  userName: string
  userLabel: string
}
