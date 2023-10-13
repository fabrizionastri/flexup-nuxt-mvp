import { ReserveName } from 'entities/reserve'
import { getNumberForKey, isValidNumber } from 'usecases/utils'
import { Balances, ZeroBalances } from 'entities/balance'

export const sumBalances = (reserveBalance: Balances): number => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.entries(reserveBalance).reduce((acc, [_, value]) => {
    return acc + (value > 0 ? value : 0)
  }, 0)
}

export const selectBalances = (
  reserveBalances: Balances,
  reserveNames: ReserveName[]
): Balances => {
  const res: Balances = {}

  if (!reserveNames || reserveNames.length === 0) return res

  return reserveNames.reduce((res: Balances, reserveName) => {
    const balance = getNumberForKey(reserveBalances, reserveName)
    if (isValidNumber(balance) && Number(balance) > 0) res[reserveName] = balance
    return res
  }, res)
}

export const sumSelectedBalances = (
  reserveBalances: Balances,
  reserveNames: ReserveName[]
): number => {
  return sumBalances(selectBalances(reserveBalances, reserveNames))
}

export const setMissingBalancesToZero = (someBalances: Balances): Balances => {
  return Object.assign({ ...ZeroBalances }, someBalances)
}
