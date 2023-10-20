import { CurrencyData } from 'entities/currency'

export const euroCurrencyData: CurrencyData = {
  id: 'EUR',
  name: 'Euro',
  symbol: '€',
  precision: 2
}

export const dollarCurrencyData: CurrencyData = {
  id: 'USD',
  name: 'Dollar',
  symbol: '$',
  precision: 2
}

export const poundCurrencyData: CurrencyData = {
  id: 'GBP',
  name: 'Pound',
  symbol: '£',
  precision: 2
}

export const yenCurrencyData: CurrencyData = {
  id: 'JPY',
  name: 'Yen',
  symbol: '¥',
  precision: 0
}

export const swissFrancCurrencyData: CurrencyData = {
  id: 'CFF',
  name: 'Swiss Franc',
  symbol: 'CHF',
  precision: 2
}

export const currencyDatas: CurrencyData[] = [
  euroCurrencyData,
  dollarCurrencyData,
  poundCurrencyData,
  yenCurrencyData,
  swissFrancCurrencyData
]
