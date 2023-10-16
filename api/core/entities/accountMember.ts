export type AccountRole = 'owner' | 'admin' | 'editor' | 'guest'

export interface AccountMemberData {
  id: string // this is   accountId_userId, only used for json-server.
  accountId: string
  userId: string
  role: AccountRole
  creationDate: Date
}

export interface AccountMember extends AccountMemberData {
  accountName: string
  accountLabel: string
  userName: string
  userLabel: string
}
