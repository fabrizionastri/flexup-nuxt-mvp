import type { Balances } from 'entities/balance'
import type { ReserveName } from 'entities/reserve'
import type { AllocationReport } from 'entities/allocation'

export const allocateTestCases: Array<{
  summary: string
  allocationRequested?: number
  allocationRealised?: number
  initialBalances?: Balances
  sources?: ReserveName[]
  destination?: ReserveName
  expected: AllocationReport
}> = [
  {
    summary: 'no input -> empty remport',
    expected: {
      newBalances: {}
    }
  },
  {
    summary: 'no allocation requests -> empty report',
    initialBalances: { liquidity: 100 },
    sources: ['liquidity'],
    expected: {
      newBalances: { liquidity: 100 }
    }
  },
  {
    summary: 'no destination requests -> empty report',
    allocationRequested: 100,
    initialBalances: { liquidity: 100 },
    sources: ['liquidity'],
    expected: {
      newBalances: { liquidity: 100 }
    }
  },
  {
    summary: 'no initialBalances requests -> empty report',
    allocationRequested: 100,
    initialBalances: {},
    sources: ['liquidity'],
    destination: 'payable',
    expected: {
      newBalances: {}
    }
  },

  {
    summary: '2 allocations from liquidity and flex to payable',
    allocationRequested: 25,
    initialBalances: { liquidity: 20, flex: 10, payable: 10 },
    sources: ['liquidity', 'flex'],
    destination: 'payable',
    expected: {
      availableCash: 30,
      allocationRealised: 25,
      newBalances: { liquidity: 0, flex: 5, payable: 35 },
      allocations: [
        { source: 'liquidity', destination: 'payable', allocation: 20 },
        { source: 'flex', destination: 'payable', allocation: 5 }
      ]
    }
  },
  {
    summary: '1 allocation of 10 from liquidity to payable',
    allocationRequested: 10,
    initialBalances: { liquidity: 15, flex: 10, payable: 10 },
    sources: ['liquidity', 'flex'],
    destination: 'payable',
    expected: {
      availableCash: 25,
      allocationRealised: 10,
      newBalances: {
        liquidity: 5,
        flex: 10,
        payable: 20
      },
      allocations: [{ source: 'liquidity', destination: 'payable', allocation: 10 }]
    }
  },
  {
    summary: '20 to payable for 50 requested due to insufficient cash',
    allocationRequested: 50,
    initialBalances: { liquidity: 5, flex: 15, payable: 10 },
    sources: ['liquidity', 'flex'],
    destination: 'payable',
    expected: {
      availableCash: 20,
      allocationRealised: 20,
      newBalances: {
        liquidity: 0,
        flex: 0,
        payable: 30
      },
      allocations: [
        { source: 'liquidity', destination: 'payable', allocation: 5 },
        { source: 'flex', destination: 'payable', allocation: 15 }
      ]
    }
  },
  {
    summary: '20 to base for 50 requested due to insufficient cash',
    allocationRequested: 50,
    initialBalances: { liquidity: 5, flex: 15, base: 20 },
    sources: ['liquidity', 'flex'],
    destination: 'base',
    expected: {
      availableCash: 20,
      allocationRealised: 20,
      newBalances: {
        liquidity: 0,
        flex: 0,
        base: 40
      },
      allocations: [
        { source: 'liquidity', destination: 'base', allocation: 5 },
        { source: 'flex', destination: 'base', allocation: 15 }
      ]
    }
  },
  {
    summary: '2 allocations to base:5 from liquidity, 5 from flex',
    allocationRequested: 50,
    initialBalances: { liquidity: 5, flex: 5, base: 20 },
    sources: ['liquidity', 'flex'],
    destination: 'base',
    expected: {
      availableCash: 10,
      allocationRealised: 10,
      newBalances: {
        liquidity: 0,
        flex: 0,
        base: 30
      },
      allocations: [
        { source: 'liquidity', destination: 'base', allocation: 5 },
        { source: 'flex', destination: 'base', allocation: 5 }
      ]
    }
  },
  {
    summary: '1 allocations to payable:50 from liquidity',
    allocationRequested: 50,
    initialBalances: {
      liquidity: 1000
    },
    sources: ['liquidity', 'flex', 'base', 'strategic'],
    destination: 'payable',
    expected: {
      availableCash: 1000,
      allocationRealised: 50,
      newBalances: {
        liquidity: 950,
        payable: 50,
        base: 0,
        strategic: 0,
        flex: 0
      },
      allocations: [
        {
          source: 'liquidity',
          destination: 'payable',
          allocation: 50
        }
      ]
    }
  }
]
