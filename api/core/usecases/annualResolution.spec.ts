import { annualResolutionTestCases } from '~/mock/inMemory/annualResolution'
import { runResolutionSteps } from './resolution'

describe('annual resolution', () => {
  describe('runResolutionSteps with AnnualResolutionSteps', () => {
    describe('success cases', () => {
      it.each(annualResolutionTestCases)(
        '$summary',
        ({ initialBalances, amountsRequested, resolutionSteps, expected }) => {
          expect(runResolutionSteps(initialBalances, amountsRequested, resolutionSteps)).toEqual(
            expected
          )
        }
      )
    })
  })
})
