import type { AllocationReport } from 'entities/allocation'
import type { Balances } from 'entities/balance'
import type { AmountsRequested, ResolutionStep } from 'entities/resolution'
import { monthlyResolutionSteps } from 'usecases/monthlyResolution'

export const monthlyResolutionTestCases: Array<{
  summary: string
  initialBalances: Balances
  amountsRequested: AmountsRequested
  resolutionSteps: ResolutionStep[]
  expected: AllocationReport[]
}> = [
  {
    summary: 'all values set to zero',
    initialBalances: {},
    amountsRequested: {},
    resolutionSteps: monthlyResolutionSteps,
    expected: []
  },
  {
    summary: 'starting with 1000 liquidity only',
    initialBalances: { liquidity: 1000 },
    amountsRequested: {
      firmOutflow: 50,
      preferredOutflow: 100,
      flexOutflow: 175,
      superflexOutflow: 250,
      baseReserveTarget: 200,
      flexReserveTarget: 125
    },
    resolutionSteps: monthlyResolutionSteps,
    expected: [
      {
        availableCash: 1000,
        allocationRealised: 50,

        newBalances: {
          liquidity: 950,
          flex: 0,
          base: 0,
          strategic: 0,
          payable: 50
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'payable',
            allocation: 50
          }
        ]
      },
      {
        availableCash: 950,
        allocationRealised: 100,

        newBalances: {
          liquidity: 850,
          flex: 0,
          base: 0,
          strategic: 0,
          payable: 150
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'payable',
            allocation: 100
          }
        ]
      },
      {
        availableCash: 850,
        allocationRealised: 200,

        newBalances: {
          liquidity: 650,
          flex: 0,
          base: 200,
          strategic: 0,
          payable: 150
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'base',
            allocation: 200
          }
        ]
      },
      {
        availableCash: 650,
        allocationRealised: 175,
        newBalances: {
          liquidity: 475,
          flex: 0,
          base: 200,
          strategic: 0,
          payable: 325
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'payable',
            allocation: 175
          }
        ]
      },
      {
        availableCash: 475,
        allocationRealised: 125,
        newBalances: {
          liquidity: 350,
          flex: 125,
          base: 200,
          strategic: 0,
          payable: 325
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'flex',
            allocation: 125
          }
        ]
      },
      {
        availableCash: 350,
        allocationRealised: 250,
        newBalances: {
          liquidity: 100,
          flex: 125,
          base: 200,
          strategic: 0,
          payable: 575
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'payable',
            allocation: 250
          }
        ]
      }
    ]
  },
  {
    summary: 'allocations for all outflow and reserve targets',
    initialBalances: {
      liquidity: 275,
      flex: 35,
      base: 60,
      strategic: 80,
      payable: 0,
      allotment: 0,
      creditBuyback: 0,
      tokenBuyback: 0,
      distribution: 0,
      endowment: 0
    },
    amountsRequested: {
      firmOutflow: 50,
      preferredOutflow: 50,
      flexOutflow: 15,
      superflexOutflow: 25,
      baseReserveTarget: 75,
      flexReserveTarget: 45
    },
    resolutionSteps: monthlyResolutionSteps,
    expected: [
      {
        availableCash: 450,
        allocationRealised: 50,
        newBalances: {
          liquidity: 225,
          flex: 35,
          base: 60,
          strategic: 80,
          payable: 50,
          allotment: 0,
          creditBuyback: 0,
          tokenBuyback: 0,
          distribution: 0,
          endowment: 0
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'payable',
            allocation: 50
          }
        ]
      },
      {
        availableCash: 400,
        allocationRealised: 50,

        newBalances: {
          liquidity: 175,
          flex: 35,
          base: 60,
          strategic: 80,
          payable: 100,
          allotment: 0,
          creditBuyback: 0,
          tokenBuyback: 0,
          distribution: 0,
          endowment: 0
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'payable',
            allocation: 50
          }
        ]
      },
      {
        availableCash: 210,
        allocationRealised: 15,
        newBalances: {
          liquidity: 160,
          flex: 35,
          base: 75,
          strategic: 80,
          payable: 100,
          allotment: 0,
          creditBuyback: 0,
          tokenBuyback: 0,
          distribution: 0,
          endowment: 0
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'base',
            allocation: 15
          }
        ]
      },
      {
        availableCash: 195,
        allocationRealised: 15,
        newBalances: {
          liquidity: 145,
          flex: 35,
          base: 75,
          strategic: 80,
          payable: 115,
          allotment: 0,
          creditBuyback: 0,
          tokenBuyback: 0,
          distribution: 0,
          endowment: 0
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'payable',
            allocation: 15
          }
        ]
      },
      {
        availableCash: 145,
        allocationRealised: 10,
        newBalances: {
          liquidity: 135,
          flex: 45,
          base: 75,
          strategic: 80,
          payable: 115,
          allotment: 0,
          creditBuyback: 0,
          tokenBuyback: 0,
          distribution: 0,
          endowment: 0
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'flex',
            allocation: 10
          }
        ]
      },
      {
        availableCash: 135,
        allocationRealised: 25,
        newBalances: {
          liquidity: 110,
          flex: 45,
          base: 75,
          strategic: 80,
          payable: 140,
          allotment: 0,
          creditBuyback: 0,
          tokenBuyback: 0,
          distribution: 0,
          endowment: 0
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'payable',
            allocation: 25
          }
        ]
      }
    ]
  },
  {
    summary: 'negative allocation for flex reserve',
    initialBalances: {
      liquidity: 275,
      flex: 35,
      base: 60,
      strategic: 80
    },
    amountsRequested: {
      firmOutflow: 50,
      preferredOutflow: 50,
      flexOutflow: 15,
      superflexOutflow: 25,
      baseReserveTarget: 75,
      flexReserveTarget: 25
    },
    resolutionSteps: monthlyResolutionSteps,
    expected: [
      {
        availableCash: 450,
        allocationRealised: 50,
        newBalances: {
          liquidity: 225,
          flex: 35,
          base: 60,
          strategic: 80,
          payable: 50
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'payable',
            allocation: 50
          }
        ]
      },
      {
        availableCash: 400,
        allocationRealised: 50,
        newBalances: {
          liquidity: 175,
          flex: 35,
          base: 60,
          strategic: 80,
          payable: 100
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'payable',
            allocation: 50
          }
        ]
      },
      {
        availableCash: 210,
        allocationRealised: 15,

        newBalances: {
          liquidity: 160,
          flex: 35,
          base: 75,
          strategic: 80,
          payable: 100
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'base',
            allocation: 15
          }
        ]
      },
      {
        availableCash: 195,
        allocationRealised: 15,
        newBalances: {
          liquidity: 145,
          flex: 35,
          base: 75,
          strategic: 80,
          payable: 115
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'payable',
            allocation: 15
          }
        ]
      },
      {
        availableCash: 35,
        allocationRealised: 10,
        newBalances: {
          liquidity: 155,
          flex: 25,
          base: 75,
          strategic: 80,
          payable: 115
        },
        allocations: [
          {
            source: 'flex',
            destination: 'liquidity',
            allocation: 10
          }
        ]
      },
      {
        availableCash: 155,
        allocationRealised: 25,
        newBalances: {
          liquidity: 130,
          flex: 25,
          base: 75,
          strategic: 80,
          payable: 140
        },
        allocations: [
          {
            source: 'liquidity',
            destination: 'payable',
            allocation: 25
          }
        ]
      }
    ]
  }
]
