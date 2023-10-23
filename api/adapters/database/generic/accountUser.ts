import inMemory from 'mock/inMemory'
import adapterMethods from './_source'

const accountusers = inMemory.accountUser

export const accountUserAdapter = {
  getById: adapterMethods.createGetById(accountusers),
  getByProperty: adapterMethods.createGetByProperty(accountusers)
}
