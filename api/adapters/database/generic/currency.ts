import inMemory from 'mock/inMemory'
import adapterMethods from './_source'

const currencies = inMemory.currency

export const currencyAdapter = {
  getById: adapterMethods.createGetById(currencies),
  getByProperty: adapterMethods.createGetByProperty(currencies)
}
