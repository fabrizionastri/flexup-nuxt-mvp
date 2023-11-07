import type { AccountData } from 'lib/entities'
import { createGetById, createGetByProperty, createGetByIds } from './methods'

export const accountAdapter = {
  getById: createGetById<AccountData>('account'),
  getByIds: createGetByIds<AccountData>('account'),
  getByProperty: createGetByProperty<AccountData>('account')
}
