import { monthlyResolutionTestCases } from '~/mock/inMemory/monthlyResolution'
import { runMonthlyResolutionSteps } from 'usecases/monthlyResolution'
import { runResolutionSteps } from 'usecases/resolution'

describe('Monthly Resolution', () => {
  describe('runResolutionSteps with MonthlyResolutionSteps', () => {
    describe('sucess cases', () => {
      it.each(monthlyResolutionTestCases)(
        '$summary',
        ({ initialBalances, amountsRequested, resolutionSteps, expected }) => {
          expect(runResolutionSteps(initialBalances, amountsRequested, resolutionSteps)).toEqual(
            expected
          )
        }
      )
    })
  })

  describe('runMonthlyResolutionSteps', () => {
    describe('sucess cases', () => {
      it.each(monthlyResolutionTestCases)(
        '$summary',
        ({ initialBalances, amountsRequested, expected }) => {
          expect(runMonthlyResolutionSteps(initialBalances, amountsRequested)).toEqual(expected)
        }
      )
    })
  })
})
