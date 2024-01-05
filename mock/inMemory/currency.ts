import type { Currency } from 'entities/currency'

export const euroCurrency: Currency = {
  id: 'EUR',
  name: 'Euro',
  symbol: '€',
  precision: 2
}

export const dollarCurrency: Currency = {
  id: 'USD',
  name: 'US Dollar',
  symbol: '$',
  precision: 2
}

export const poundCurrency: Currency = {
  id: 'GBP',
  name: 'Pound sterling',
  symbol: '£',
  precision: 2
}

export const yenCurrency: Currency = {
  id: 'JPY',
  name: 'Yen',
  symbol: '¥',
  precision: 0
}

export const swissFrancCurrency: Currency = {
  id: 'CHF',
  name: 'Swiss Franc',
  symbol: 'CHF',
  precision: 2
}

export const currencyDatas: Currency[] = [
  euroCurrency,
  dollarCurrency,
  poundCurrency,
  yenCurrency,
  swissFrancCurrency
]
