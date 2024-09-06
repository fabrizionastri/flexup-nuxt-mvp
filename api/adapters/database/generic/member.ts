import type { MemberData } from 'lib/entities'
import {
  isUserMemberOfAccount,
  createGetById,
  createGetBySelectedProperty,
  createGetByProperty
} from './methods'

export interface IsUserMemberOfAccount {
  (userId: string, accountId: string): Promise<boolean>
}

export const memberAdapter = {
  getById: createGetById<MemberData>('member'),
  getByUserId: createGetBySelectedProperty<MemberData>('member', 'userId'),
  getByProperty: createGetByProperty<MemberData>('member'),
  isUserMemberOfAccount
}
