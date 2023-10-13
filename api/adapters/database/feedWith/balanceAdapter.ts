import { BalanceInstances, BalanceInstance } from 'entities/balance'

export class BalanceAdapter {
  private _balance: BalanceInstances
  constructor() {
    this._balance = []
  }
  feedWith(balance: BalanceInstances) {
    this._balance = balance
  }
  get(): BalanceInstances {
    return this._balance
  }
  getForAccountAndDate(accountId: string, referenceDate: Date): Array<BalanceInstance> {
    const allPreviousBalances = this._balance.filter((balance) => {
      return balance.accountId === accountId && balance.referenceDate <= referenceDate
    })

    const mostRecentBalances = allPreviousBalances.reduce<Record<string, BalanceInstance>>(
      (res, balance) => {
        const { reserveName, referenceDate: balanceDate, amount } = balance

        if (!res[reserveName]) {
          res[reserveName] = balance
        } else {
          const existingBalance = res[reserveName]
          const sameDate = existingBalance.referenceDate.getTime() === balanceDate.getTime()

          if (sameDate && existingBalance.amount !== amount) {
            throw new Error('Found two difference balances values for same reserve on same date')
          }

          if (existingBalance.referenceDate < balanceDate) {
            res[reserveName] = balance
          }
        }

        return res
      },
      {}
    )

    return Object.values(mostRecentBalances)
  }
}
