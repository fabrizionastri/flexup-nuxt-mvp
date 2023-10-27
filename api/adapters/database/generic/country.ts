import inMemory from 'mock/inMemory'
import adapterMethods from './_source'

const countires = inMemory.country

export const countryAdapter = {
  getById: adapterMethods.createGetById(countires),
  getByProperty: adapterMethods.createGetByProperty(countires)
}
