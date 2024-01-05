import type { Currency } from 'lib/entities/currency'
import { createGetById } from './methods'

export const currencyAdapter = {
  getById: createGetById<Currency>('currency')
}
