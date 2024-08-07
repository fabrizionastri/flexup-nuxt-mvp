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

export const accountMemberAdapter = {
  getById: createGetById<AccountUserData>('accountMember'),
  getByUserId: createGetBySelectedProperty<AccountUserData>('accountMember', 'userId'),
  getByProperty: createGetByProperty<AccountUserData>('accountMember'),
  isUserMemberOfAccount
}
