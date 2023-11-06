import type { AccountData } from 'lib/entities'
import { createGetById, createGetByProperty } from './methods'

export const accountAdapter = {
  getById: createGetById<AccountData>('account'),
  getByProperty: createGetByProperty<AccountData>('account')
}
