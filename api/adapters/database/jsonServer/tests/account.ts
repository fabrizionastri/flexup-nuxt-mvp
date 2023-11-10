import type { AccountData } from 'lib/entities'
import { createGetById, createGetByProperty, createGetByProperties } from '../methods'

export const accountAdapter = {
  getById: createGetById<AccountData>('account'),
  getByProperty: createGetByProperty<AccountData>('account'),
  getByProperties: createGetByProperties<AccountData>('account')
}
