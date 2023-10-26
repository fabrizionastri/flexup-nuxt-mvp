import { balanceTestCases } from 'mock/inMemory/balance'
import type { Balances } from 'entities/balance'
import {
  selectBalances,
  setMissingBalancesToZero,
  sumBalances,
  sumSelectedBalances
} from 'usecases/balance'

describe('Balance functions', () => {
  describe('sumBalances', () => {
    it.each(balanceTestCases)(
      'should return $cashAvailable for $reserveBalance',
      ({ reserveBalance, cashAvailable }) => {
        expect(sumBalances(reserveBalance)).toBe(cashAvailable)
      }
    )
  })

  describe('selectBalances', () => {
    it.each(balanceTestCases)(
      'should return $selectedBalances given $reserveBalance and $selectedReserveNames',
      ({ reserveBalance, selectedReserveNames, selectedBalances }) => {
        expect(selectBalances(reserveBalance, selectedReserveNames)).toEqual(selectedBalances)
      }
    )
  })

  describe('sumSelectedBalances (Charter Art. 9.7.a)', () => {
    it.each(balanceTestCases)(
      'should return $selectedBalances given $reserveBalanceand $selectedReserveNames',
      ({ reserveBalance, selectedReserveNames, selectedCashAvailable }) => {
        expect(sumSelectedBalances(reserveBalance, selectedReserveNames)).toEqual(
          selectedCashAvailable
        )
      }
    )
  })
})

// test function for setMissingBalancesToZero
describe('setMissingBalancesToZero', () => {
  it('should set missing reserve balances to zero', () => {
    const someBalances: Balances = { flex: 100 }
    expect(setMissingBalancesToZero(someBalances)).toEqual({
      liquidity: 0,
      base: 0,
      flex: 100,
      strategic: 0,
      payable: 0,
      allotment: 0,
      creditBuyback: 0,
      tokenBuyback: 0,
      distribution: 0,
      endowment: 0
    })
  })
})
