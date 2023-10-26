import { currencyDatas } from 'mock/inMemory'

export type CurrencyId = (typeof currencyDatas)[number]['id']

export interface CurrencyData {
  id: string
  name: string
  symbol: string
  precision: number
}
