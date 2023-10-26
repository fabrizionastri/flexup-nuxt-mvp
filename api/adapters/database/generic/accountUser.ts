import inMemory from 'mock/inMemory'
import type { AccountUserAdapter } from '../interfaces'
import adapterMethods from './_source'

const accountusers = inMemory.accountUser

export const accountUserAdapter: AccountUserAdapter = {
  getById: adapterMethods.createGetById(accountusers),
  getByUserId: adapterMethods.createGetBySelectedProperty(accountusers, 'userId'),
  getByProperty: adapterMethods.createGetByProperty(accountusers)
}
