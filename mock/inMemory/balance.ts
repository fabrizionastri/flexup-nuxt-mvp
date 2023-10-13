import { ReserveName } from 'entities/reserve'
import { BalanceInstance, BalanceInstances, Balances } from 'entities/balance'

export const balanceTestCases: Array<{
  reserveBalance: Balances
  selectedReserveNames: ReserveName[]
  selectedBalances: Balances
  cashAvailable: number
  selectedCashAvailable: number
}> = [
  {
    reserveBalance: {},
    selectedReserveNames: [],
    selectedBalances: {},
    cashAvailable: 0,
    selectedCashAvailable: 0
  },
  {
    reserveBalance: {},
    selectedReserveNames: ['liquidity', 'base'],
    selectedBalances: {},
    cashAvailable: 0,
    selectedCashAvailable: 0
  },
  {
    reserveBalance: { liquidity: 125 },
    selectedReserveNames: ['flex'],
    selectedBalances: {},
    cashAvailable: 125,
    selectedCashAvailable: 0
  },
  {
    reserveBalance: { liquidity: 100 },
    selectedReserveNames: ['liquidity'],
    selectedBalances: { liquidity: 100 },
    cashAvailable: 100,
    selectedCashAvailable: 100
  },
  {
    reserveBalance: {
      liquidity: 10,
      base: 20,
      flex: 30,
      strategic: 40,
      payable: 100,
      allotment: 50,
      creditBuyback: 60,
      tokenBuyback: 70,
      distribution: 80,
      endowment: 90
    },
    selectedReserveNames: ['liquidity', 'base', 'flex'],
    selectedBalances: { liquidity: 10, base: 20, flex: 30 },
    cashAvailable: 550,
    selectedCashAvailable: 60
  },
  {
    reserveBalance: { base: 10, strategic: 15 },
    selectedReserveNames: ['liquidity', 'base', 'flex'],
    selectedBalances: { base: 10 },
    cashAvailable: 25,
    selectedCashAvailable: 10
  },
  {
    reserveBalance: { base: 10, liquidity: 20 },
    selectedReserveNames: ['liquidity', 'base', 'flex'],
    selectedBalances: { base: 10, liquidity: 20 },
    cashAvailable: 30,
    selectedCashAvailable: 30
  }
]

export const balanceInstance1: BalanceInstance = {
  reserveName: 'liquidity',
  amount: 100,
  referenceDate: new Date('2020-01-01T00:00:00.000Z'),
  accountId: '1234'
}

export const balanceInstance2: BalanceInstance = {
  reserveName: 'flex',
  amount: 100,
  referenceDate: new Date('2020-01-01T00:00:00.000Z'),
  accountId: '1234'
}

export const balanceInstance3: BalanceInstance = {
  reserveName: 'base',
  amount: 100,
  referenceDate: new Date('2020-01-01T00:00:00.000Z'),
  accountId: '1234'
}

export const balanceInstance4: BalanceInstance = {
  reserveName: 'strategic',
  amount: 100,
  referenceDate: new Date('2020-01-01T00:00:00.000Z'),
  accountId: '1234'
}

export const balanceInstance5: BalanceInstance = {
  reserveName: 'payable',
  amount: 100,
  referenceDate: new Date('2020-01-01T00:00:00.000Z'),
  accountId: '1234'
}

export const balanceInstance55: BalanceInstance = {
  reserveName: 'allotment',
  amount: 100,
  referenceDate: new Date('2020-01-01T00:00:00.000Z'),
  accountId: '1234'
}

export const balanceInstance6: BalanceInstance = {
  reserveName: 'creditBuyback',
  amount: 100,
  referenceDate: new Date('2020-01-01T00:00:00.000Z'),
  accountId: '1234'
}

export const balanceInstance7: BalanceInstance = {
  reserveName: 'tokenBuyback',
  amount: 100,
  referenceDate: new Date('2020-01-01T00:00:00.000Z'),
  accountId: '1234'
}

export const balanceInstance8: BalanceInstance = {
  reserveName: 'distribution',
  amount: 100,
  referenceDate: new Date('2020-01-01T00:00:00.000Z'),
  accountId: '1234'
}

export const balanceInstance9: BalanceInstance = {
  reserveName: 'endowment',
  amount: 100,
  referenceDate: new Date('2020-01-01T00:00:00.000Z'),
  accountId: '1234'
}

export const balanceInstance10: BalanceInstance = {
  reserveName: 'liquidity',
  amount: 125,
  referenceDate: new Date('2020-01-01T00:00:00.000Z'),
  accountId: '2345'
}

export const balanceInstance11: BalanceInstance = {
  reserveName: 'flex',
  amount: 125,
  referenceDate: new Date('2020-01-01T00:00:00.000Z'),
  accountId: '2345'
}

export const balanceInstance12: BalanceInstance = {
  reserveName: 'base',
  amount: 125,
  referenceDate: new Date('2020-01-01T00:00:00.000Z'),
  accountId: '2345'
}

export const balanceInstance13: BalanceInstance = {
  reserveName: 'flex',
  amount: 150,
  referenceDate: new Date('2020-02-01T00:00:00.000Z'),
  accountId: '2345'
}

export const balanceInstance14: BalanceInstance = {
  reserveName: 'base',
  amount: 150,
  referenceDate: new Date('2020-02-01T00:00:00.000Z'),
  accountId: '2345'
}

export const balanceInstance15: BalanceInstance = {
  reserveName: 'base',
  amount: 175,
  referenceDate: new Date('2020-03-01T00:00:00.000Z'),
  accountId: '2345'
}

export const balanceInstance16: BalanceInstance = {
  reserveName: 'flex',
  amount: 175,
  referenceDate: new Date('2020-03-01T00:00:00.000Z'),
  accountId: '2345'
}

export const balanceInstance17: BalanceInstance = {
  reserveName: 'flex',
  amount: 150,
  referenceDate: new Date('2020-03-01T00:00:00.000Z'),
  accountId: '2345'
}

export const balanceInstanceAccount1234: BalanceInstances = [
  balanceInstance1,
  balanceInstance2,
  balanceInstance3,
  balanceInstance4,
  balanceInstance5,
  balanceInstance55,
  balanceInstance6,
  balanceInstance7,
  balanceInstance8,
  balanceInstance9
]

export const balanceInstanceAccount2345_Jan: BalanceInstances = [
  balanceInstance10,
  balanceInstance11,
  balanceInstance12
]

export const balanceInstanceAccount2345_Feb: BalanceInstances = [
  balanceInstance13,
  balanceInstance14
]

export const balanceInstanceAccount2345_March: BalanceInstances = [
  balanceInstance15,
  balanceInstance16,
  balanceInstance17
]

export const balanceInstanceAll: BalanceInstances = [
  ...balanceInstanceAccount1234,
  ...balanceInstanceAccount2345_Jan,
  ...balanceInstanceAccount2345_Feb,
  ...balanceInstanceAccount2345_March
]
