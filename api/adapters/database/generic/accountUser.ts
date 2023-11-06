import type { AccountUserData } from 'lib/entities'
import {
  isUserMemberOfAccount,
  createGetById,
  createGetBySelectedProperty,
  createGetByProperty
} from './methods'

export interface IsUserMemberOfAccount {
  (userId: string, accountId: string): Promise<boolean>
}

export const accountUserAdapter /* : AccountUserAdapter */ = {
  getById: createGetById<AccountUserData>('accountUser'),
  getByUserId: createGetBySelectedProperty<AccountUserData>('accountUser', 'userId'),
  getByProperty: createGetByProperty<AccountUserData>('accountUser'),
  isUserMemberOfAccount
}
