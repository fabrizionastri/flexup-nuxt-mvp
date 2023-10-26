import type { Allocation } from 'entities/allocation'

export const ReserveNames = [
  'liquidity',
  'flex',
  'base',
  'strategic',
  'payable',
  'allotment',
  'creditBuyback',
  'tokenBuyback',
  'distribution',
  'endowment'
] as const

export type ReserveName = (typeof ReserveNames)[number]

export interface Reserve {
  id: string
  accountId: string
  name: ReserveName
  balance: number
  allocation: Allocation[]
}
