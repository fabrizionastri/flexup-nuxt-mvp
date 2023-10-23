import inMemory from 'mock/inMemory'
import adapterMethods from './_source'

const users = inMemory.user

export const userAdapter = {
  getById: adapterMethods.createGetById(users),
  getByProperty: adapterMethods.createGetByProperty(users)
}
