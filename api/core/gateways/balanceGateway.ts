import { BalanceAdapter } from 'adapters/primary/balance.adapter'
import { Balances } from 'entities/balance'

export const BalanceGateway =
  (balanceAdapter: BalanceAdapter) =>
  (accountId: string, referenceDate: Date): Balances => {
    if (!balanceAdapter) throw new Error('BalanceAdapter is not defined')
    const res = balanceAdapter.getForAccountAndDate(accountId, referenceDate)
    const result = {} as Balances
    res.forEach((balance) => {
      if (result[balance.reserveName]) throw new Error('Duplicate reserve name')
      result[balance.reserveName] = balance.amount
    })
    return result as Balances
  }
