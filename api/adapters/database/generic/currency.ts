import type { CurrencyData } from 'lib/entities/currency'
import inMemory from 'mock/inMemory'
import adapterMethods from './_source'

const currencies = inMemory.currency

export const currencyAdapter = {
  getById: adapterMethods.createGetById<CurrencyData>(currencies),
  getByProperty: adapterMethods.createGetByProperty(currencies)
}
