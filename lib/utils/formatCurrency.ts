import type { CurrencyId } from 'lib/entities'

export const formatCurrency = (value: number, currency: CurrencyId, locale: string = 'fr-FR') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(value)
}
