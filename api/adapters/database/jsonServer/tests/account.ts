import type { AccountData } from 'lib/entities'
// import { createGetById, createGetByProperty, createGetByProperties } from '../methods'
import { createGetById } from '../methods/createGetById'
import { createGetByProperty } from '../methods/createGetByProperty'
import { createGetByProperties } from '../methods/createGetByProperties'

export const accountAdapter = {
  getById: createGetById<AccountData>('account'),
  getByProperty: createGetByProperty<AccountData>('account'),
  getByProperties: createGetByProperties<AccountData>('account')
}
