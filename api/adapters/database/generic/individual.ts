import inMemory from 'mock/inMemory'
import adapterMethods from './_source'

const individuals = inMemory.individual

export const individualAdapter = {
  getById: adapterMethods.createGetById(individuals),
  getByProperty: adapterMethods.createGetByProperty(individuals)
}
