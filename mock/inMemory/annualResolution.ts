import { AllocationReport } from 'entities/allocation'
import { Balances } from 'entities/balance'
import { AmountsRequested, ResolutionStep } from 'entities/resolution'
import { AnnualResolutionSteps } from 'usecases/annualResolution'

export const annualResolutionTestCases: Array<{
  summary: string
  initialBalances: Balances
  amountsRequested: AmountsRequested
  resolutionSteps: ResolutionStep[]
  expected: AllocationReport[]
}> = [
  {
    summary: '{}',
    initialBalances: {},
    amountsRequested: {},
    resolutionSteps: AnnualResolutionSteps,
    expected: []
  },
  {
    summary: '100 in creditBuyback -> 100 distribution only, then payable',
    initialBalances: { creditBuyback: 100 },
    amountsRequested: {},
    resolutionSteps: AnnualResolutionSteps,
    expected: [
      {
        availableCash: 100,
        allocationRealised: 100,
        newBalances: {
          creditBuyback: 0,
          // tokenBuyback: 0,
          distribution: 100
        },
        allocations: [
          {
            source: 'creditBuyback',
            destination: 'distribution',
            allocation: 100
          }
        ]
      },
      {
        availableCash: 100,
        allocationRealised: 100,
        newBalances: {
          creditBuyback: 0,
          // tokenBuyback: 0,
          distribution: 0,
          payable: 100
        },
        allocations: [
          { source: 'distribution', destination: 'payable', allocation: 100 }
        ]
      }
    ]
  },
  {
    summary: '25/10/30/10 with no deltas -> 0/0/0/75',
    initialBalances: {
      creditBuyback: 25,
      tokenBuyback: 10,
      distribution: 30,
      payable: 10
    },
    amountsRequested: {
      creditBuyback: 25,
      tokenBuyback: 10
    },
    resolutionSteps: AnnualResolutionSteps,
    expected: [
      {
        availableCash: 25,
        allocationRealised: 25,
        newBalances: {
          creditBuyback: 0,
          tokenBuyback: 10,
          distribution: 30,
          payable: 35
        },
        allocations: [
          { source: 'creditBuyback', destination: 'payable', allocation: 25 }
        ]
      },
      {
        availableCash: 10,
        allocationRealised: 10,
        newBalances: {
          creditBuyback: 0,
          tokenBuyback: 0,
          distribution: 30,
          payable: 45
        },
        allocations: [
          { source: 'tokenBuyback', destination: 'payable', allocation: 10 }
        ]
      },
      {
        availableCash: 30,
        allocationRealised: 30,
        newBalances: {
          creditBuyback: 0,
          tokenBuyback: 0,
          distribution: 0,
          payable: 75
        },
        allocations: [
          { source: 'distribution', destination: 'payable', allocation: 30 }
        ]
      }
    ]
  },
  {
    summary:
      '110/20/40/2000 with 100 (30+70) surplus in creditRerserve -> 0/0/0/370',
    initialBalances: {
      creditBuyback: 110,
      tokenBuyback: 20,
      distribution: 40,
      payable: 200
    },
    amountsRequested: {
      creditBuyback: 10,
      tokenBuyback: 50
    },
    resolutionSteps: AnnualResolutionSteps,
    expected: [
      {
        availableCash: 110,
        allocationRealised: 30,

        newBalances: {
          creditBuyback: 80,
          tokenBuyback: 50,
          distribution: 40,
          payable: 200
        },
        allocations: [
          {
            source: 'creditBuyback',
            destination: 'tokenBuyback',
            allocation: 30
          }
        ]
      },
      {
        availableCash: 80,
        allocationRealised: 70,

        newBalances: {
          creditBuyback: 10,
          tokenBuyback: 50,
          distribution: 110,
          payable: 200
        },
        allocations: [
          {
            source: 'creditBuyback',
            destination: 'distribution',
            allocation: 70
          }
        ]
      },
      {
        availableCash: 10,
        allocationRealised: 10,
        newBalances: {
          creditBuyback: 0,
          tokenBuyback: 50,
          distribution: 110,
          payable: 210
        },
        allocations: [
          { source: 'creditBuyback', destination: 'payable', allocation: 10 }
        ]
      },

      {
        availableCash: 50,
        allocationRealised: 50,

        newBalances: {
          creditBuyback: 0,
          tokenBuyback: 0,
          distribution: 110,
          payable: 260
        },
        allocations: [
          { source: 'tokenBuyback', destination: 'payable', allocation: 50 }
        ]
      },
      {
        availableCash: 110,
        allocationRealised: 110,
        newBalances: {
          creditBuyback: 0,
          tokenBuyback: 0,
          distribution: 0,
          payable: 370
        },
        allocations: [
          { source: 'distribution', destination: 'payable', allocation: 110 }
        ]
      }
    ]
  },
  {
    summary: '35/10/30/10 with 10 surplus in creditRerserve -> 0/0/0/85',
    initialBalances: {
      creditBuyback: 35,
      tokenBuyback: 10,
      distribution: 30,
      payable: 10
    },
    amountsRequested: {
      creditBuyback: 25,
      tokenBuyback: 10
    },
    resolutionSteps: AnnualResolutionSteps,
    expected: [
      {
        availableCash: 35,
        allocationRealised: 10,
        newBalances: {
          creditBuyback: 25,
          tokenBuyback: 10,
          distribution: 40,
          payable: 10
        },
        allocations: [
          {
            source: 'creditBuyback',
            destination: 'distribution',
            allocation: 10
          }
        ]
      },
      {
        availableCash: 25,
        allocationRealised: 25,

        newBalances: {
          creditBuyback: 0,
          tokenBuyback: 10,
          distribution: 40,
          payable: 35
        },
        allocations: [
          { source: 'creditBuyback', destination: 'payable', allocation: 25 }
        ]
      },
      {
        availableCash: 10,
        allocationRealised: 10,

        newBalances: {
          creditBuyback: 0,
          tokenBuyback: 0,
          distribution: 40,
          payable: 45
        },
        allocations: [
          { source: 'tokenBuyback', destination: 'payable', allocation: 10 }
        ]
      },

      {
        availableCash: 40,
        allocationRealised: 40,

        newBalances: {
          creditBuyback: 0,
          tokenBuyback: 0,
          distribution: 0,
          payable: 85
        },
        allocations: [
          { source: 'distribution', destination: 'payable', allocation: 40 }
        ]
      }
    ]
  }
]
