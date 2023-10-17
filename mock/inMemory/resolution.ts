import { Balances } from 'entities/balance'
import { ReserveName } from 'entities/reserve'
import { AmountsRequested, ResolutionName } from 'entities/resolution'

export const forReserveTargetTestCases: Array<{
  summary: string
  availableCash?: number
  initialBalances?: Balances
  amountsRequested?: AmountsRequested
  resolutionName?: ResolutionName
  destination?: ReserveName
  expected: number
}> = [
  {
    summary: '100 : 15 -> 50 base = 35 ',
    availableCash: 100,
    initialBalances: { liquidity: 100, base: 15 },
    amountsRequested: { baseReserveTarget: 50 },
    resolutionName: 'baseReserveTarget',
    destination: 'base',
    expected: 35
  },
  {
    summary: '150 : 20 -> 140 base = 120 ',
    availableCash: 150,
    initialBalances: { liquidity: 100, flex: 50, base: 20 },
    amountsRequested: { baseReserveTarget: 140 },
    resolutionName: 'baseReserveTarget',
    destination: 'base',
    expected: 120
  },
  {
    summary: '50 : 25 -> 100 flex = 50 ',
    availableCash: 50,
    initialBalances: { liquidity: 50, flex: 25, base: 20 },
    amountsRequested: { flexReserveTarget: 75 },
    resolutionName: 'flexReserveTarget',
    destination: 'Flex',
    expected: 50
  },
  {
    summary: '100 : 50 -> 10 base = -40 ',
    availableCash: 100,
    initialBalances: { liquidity: 100, base: 50 },
    amountsRequested: { baseReserveTarget: 10 },
    resolutionName: 'baseReserveTarget',
    destination: 'base',
    expected: -40
  }
]

// Error cases ignored for now
// export const forReserveTargetErrorCases: Array<{
//   summary: string
//   availableCash?: number
//   initialBalances?: Balances
//   amountsRequested?: AmountsRequested
//   destination?: ReserveName
//   expected: string
// }> = [
//     // {
//     //   summary: '0 for empty data',
//     //   availableCash: 0,
//     //   amountsRequested: {},
//     //   initialBalances: {},
//     //   destination: '',
//     //   expected: 'Invalid destination reserve name',
//     // },
//     // {
//     //   summary: '0 for no data',
//     //   expected: 'Invalid destination reserve name',
//     // },
//     // {
//     //   summary: 'error if no destination',
//     //   expected: 'Invalid destination reserve name',
//     // },
//   ]

export const forOutflowTestCases: Array<{
  summary: string
  availableCash?: number
  amountsRequested?: AmountsRequested
  resolutionName?: ResolutionName
  expected: number
}> = [
  {
    summary: '100 - 25 flex -> 25 ',
    availableCash: 100,
    amountsRequested: { flexOutflow: 25 },
    resolutionName: 'flexOutflow',
    expected: 25
  },
  {
    summary: '75 - 100 firm -> 75 ',
    availableCash: 75,
    amountsRequested: { firmOutflow: 100 },
    resolutionName: 'firmOutflow',
    expected: 75
  },
  {
    summary: '(-50) - 250 preferred -> 0',
    availableCash: -50,
    amountsRequested: { preferredOutflow: 250 },
    resolutionName: 'preferredOutflow',
    expected: 0
  }
]

export const forSurplusTestCases: Array<{
  summary: string
  initialBalances: Balances
  amountsRequested: AmountsRequested
  source: ReserveName
  resolutionName: ResolutionName | ''
  expected: number
}> = [
  {
    summary: 'R120 / B100 -> 0',
    initialBalances: { creditBuyback: 100 },
    source: 'creditBuyback',
    amountsRequested: { creditBuyback: 120 },
    resolutionName: 'creditBuyback',
    expected: 0
  },
  {
    summary: 'R100 / B100 -> 0',
    initialBalances: { creditBuyback: 100 },
    source: 'creditBuyback',
    amountsRequested: { creditBuyback: 100 },
    resolutionName: 'creditBuyback',
    expected: 0
  },
  {
    summary: 'R80 / B100 -> 20',
    initialBalances: { creditBuyback: 100 },
    source: 'creditBuyback',
    amountsRequested: { creditBuyback: 80 },
    resolutionName: 'creditBuyback',
    expected: 20
  },
  {
    summary: 'no input -> 0',
    initialBalances: {},
    source: 'creditBuyback',
    amountsRequested: {},
    resolutionName: 'creditBuyback',
    expected: 0
  },
  {
    summary: 'no amount / B100 -> 100',
    initialBalances: { creditBuyback: 100 },
    source: 'creditBuyback',
    amountsRequested: {},
    resolutionName: 'creditBuyback',
    expected: 100
  },
  {
    summary: 'no initial balance -> 0',
    initialBalances: {},
    source: 'creditBuyback',
    amountsRequested: { creditBuyback: 100 },
    resolutionName: 'creditBuyback',
    expected: 0
  },
  {
    summary: 'if no resolution name -> empty source',
    initialBalances: { creditBuyback: 80 },
    source: 'creditBuyback',
    amountsRequested: { creditBuyback: 100 },
    resolutionName: '',
    expected: 80
  },
  {
    summary: 'if different resolution name -> empty source',
    initialBalances: { creditBuyback: 80 },
    source: 'creditBuyback',
    amountsRequested: { creditBuyback: 100 },
    resolutionName: 'tokenBuyback',
    expected: 80
  },
  {
    summary: 'R80 / B100 from different source/resolution -> 20',
    initialBalances: { creditBuyback: 120 },
    source: 'creditBuyback',
    amountsRequested: { tokenBuyback: 100 },
    resolutionName: 'tokenBuyback',
    expected: 20
  },
  {
    summary: 'if different source -> 0',
    initialBalances: { creditBuyback: 80 },
    source: 'tokenBuyback',
    amountsRequested: { creditBuyback: 100 },
    resolutionName: 'creditBuyback',
    expected: 0
  }
]

// create test cases for forDistribution
export const forDistributionTestCases: Array<{
  summary: string
  initialBalances?: Balances
  source?: ReserveName
  expected: number
}> = [
  {
    summary: 'R120 -> 120',
    initialBalances: { distribution: 120 },
    source: 'distribution',
    expected: 120
  },
  {
    summary: 'R100 -> 100',
    initialBalances: { distribution: 100 },
    source: 'distribution',
    expected: 100
  },
  {
    summary: 'no input -> 0',
    expected: 0
  },
  {
    summary: 'no initial balance -> 0',
    initialBalances: {},
    source: 'distribution',
    expected: 0
  },
  {
    summary: 'if different source -> 0',
    initialBalances: { distribution: 80 },
    source: 'tokenBuyback',
    expected: 0
  },
  {
    summary: 'if no source -> 0',
    initialBalances: { distribution: 80 },
    expected: 0
  }
]
