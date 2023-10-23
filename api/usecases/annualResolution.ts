import { ResolutionStep } from 'entities/resolution'
import { resolutionGeneric } from 'usecases/resolution'

export const AnnualResolutionSteps: ResolutionStep[] = [
  {
    resolutionName: 'creditBuyback',
    nature: 'topup',
    sources: ['creditBuyback'],
    destination: 'tokenBuyback'
  },
  {
    resolutionName: 'tokenBuyback',
    nature: 'topup',
    sources: ['tokenBuyback'],
    destination: 'creditBuyback'
  },
  {
    resolutionName: 'creditBuyback',
    nature: 'surplus',
    sources: ['creditBuyback'],
    destination: 'distribution'
  },
  {
    resolutionName: 'tokenBuyback',
    nature: 'surplus',
    sources: ['tokenBuyback'],
    destination: 'distribution'
  },
  {
    resolutionName: 'creditBuyback',
    nature: 'outflow',
    sources: ['creditBuyback'],
    destination: 'payable'
  },
  {
    resolutionName: 'tokenBuyback',
    nature: 'outflow',
    sources: ['tokenBuyback'],
    destination: 'payable'
  },
  {
    resolutionName: 'distribution',
    nature: 'distribution',
    sources: ['distribution'],
    destination: 'payable'
  }
]

// export const runAnnualResolutionSteps = (
//   initialBalances: Balances,
//   amountsRequested: AmountsRequested
// ): AllocationReport[] => {
//   return runResolutionSteps(
//     initialBalances,
//     amountsRequested,
//     AnnualResolutionSteps
//   )
// }

export const runAnnualResolutionSteps = resolutionGeneric(AnnualResolutionSteps)
