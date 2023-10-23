import inMemory from 'mock/inMemory'
import adapterMethods from './_source'

const accounts = inMemory.account

export const accountAdapter = {
  getById: adapterMethods.createGetById(accounts),
  getByProperty: adapterMethods.createGetByProperty(accounts)
}
