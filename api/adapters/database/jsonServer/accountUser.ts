import type { AccountUserData } from 'lib/entities'
import type { AccountUserAdapter } from '../interfaces'
import * as adapterMethods from './methods'

export const accountUserAdapter: AccountUserAdapter = {
  getById: adapterMethods.createGetById<AccountUserData>('accountUser'),
  getByUserId: adapterMethods.createGetBySelectedProperty('accountUser', 'userId'),
  getByProperty: adapterMethods.createGetByProperty('accountUser')
}
