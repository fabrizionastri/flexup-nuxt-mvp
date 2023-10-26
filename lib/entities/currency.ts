import { currencyDatas } from 'mock/inMemory'
import type { Entity } from '.'

export type CurrencyId = (typeof currencyDatas)[number]['id']

export interface CurrencyData extends Entity {
  id: string
  name: string
  symbol: string
  precision: number
}
