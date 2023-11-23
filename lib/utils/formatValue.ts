import type { CurrencyId } from 'lib/entities/currency'
import { formatCurrency } from './formatCurrency'
import { formatDate } from './formatDate'

export const formatValue = (value: any, locale: string = 'fr-FR', curreny: CurrencyId = 'EUR') => {
  if (!value) {
    return ''
  }
  // print the type of the value
  console.log(typeof value)

  // if value is a Date, format it
  if (value instanceof Date) {
    return formatDate(value, locale)
  }

  // if value is a number, format it as currency
  if (typeof value === 'number') {
    return formatCurrency(value, curreny, locale)
  }

  // otherwise, just return the value
  return value
}
