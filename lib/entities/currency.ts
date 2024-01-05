import type { Entity } from '.'

export type CurrencyId = 'EUR' | 'USD' | 'GBP' | 'JPY' | 'CHF'

export interface Currency extends Entity {
  id: string
  name: string
  symbol: string
  precision: number
}
