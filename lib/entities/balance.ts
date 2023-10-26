import type { ReserveName } from 'entities/reserve'

export type BalanceInstance = {
  reserveName: ReserveName
  amount: number
  referenceDate: Date
  accountId: string
}

export type BalanceInstances = Array<BalanceInstance>

export type Balances = { [key in ReserveName]?: number }

export const ZeroBalances: Balances = {
  liquidity: 0,
  flex: 0,
  base: 0,
  strategic: 0,
  payable: 0,
  allotment: 0,
  creditBuyback: 0,
  tokenBuyback: 0,
  distribution: 0,
  endowment: 0
} as const
