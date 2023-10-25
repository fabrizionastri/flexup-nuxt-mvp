import inMemory from 'mock/inMemory'
import adapterMethods from './_source'

const individuals = inMemory.individual

export const individualAdapter = {
  getById: adapterMethods.createGetById(individuals),
  getByUserId: adapterMethods.createGetOneBySelectedProperty(individuals, 'userId')
  // getByProperty: adapterMethods.createGetByProperty(individuals),
}
