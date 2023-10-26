import type { ResolutionStep } from 'entities/resolution'
import { resolutionGeneric } from 'usecases/resolution'

export const monthlyResolutionSteps: ResolutionStep[] = [
  {
    resolutionName: 'firmOutflow',
    priority: 'firm',
    nature: 'outflow',
    sources: ['liquidity', 'flex', 'base', 'strategic'],
    destination: 'payable'
  },
  {
    resolutionName: 'preferredOutflow',
    priority: 'preferred',
    nature: 'outflow',
    sources: ['liquidity', 'flex', 'base', 'strategic'],
    destination: 'payable'
  },
  {
    resolutionName: 'baseReserveTarget',
    nature: 'reserveTarget',
    sources: ['liquidity', 'flex'],
    destination: 'base'
  },
  {
    resolutionName: 'flexOutflow',
    priority: 'flex',
    nature: 'outflow',
    sources: ['liquidity', 'flex'],
    destination: 'payable'
  },
  {
    resolutionName: 'flexReserveTarget',
    nature: 'reserveTarget',
    sources: ['liquidity'],
    destination: 'flex'
  },
  {
    resolutionName: 'superflexOutflow',
    priority: 'superflex',
    nature: 'outflow',
    sources: ['liquidity'],
    destination: 'payable'
  }
]

// export const runMonthlyResolutionSteps = (
//   initialBalances: Balances,
//   amountsRequested: AmountsRequested
// ): AllocationReport[] => {
//   return runResolutionSteps(
//     initialBalances,
//     amountsRequested,
//     MonthlyResolutionSteps
//   )
// }

export const runMonthlyResolutionSteps = resolutionGeneric(monthlyResolutionSteps)
