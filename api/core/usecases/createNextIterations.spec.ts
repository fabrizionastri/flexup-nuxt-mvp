import {
  createNextInterestIterationTestCases,
  createNextMainIterationTestCases,
  createNextTokenIterationTestCases
} from '~/mock/inMemory/createNextIteration'
import {
  createNextInterestIteration,
  createNextMainIteration,
  createNextTokenIteration
} from 'usecases/createNextIterations'

describe('Create Next Iterations', () => {
  describe('createNextMainIteration', () => {
    it.each(createNextMainIterationTestCases)(
      '$summary',
      ({ previousIteration, residuePaymentTerms, expected }) => {
        expect(createNextMainIteration(previousIteration, residuePaymentTerms)).toEqual(expected)
      }
    )
  })

  describe('createNextTokenIteration', () => {
    it.each(createNextTokenIterationTestCases)('$summary', ({ previousIteration, expected }) => {
      expect(createNextTokenIteration(previousIteration)).toEqual(expected)
    })
  })

  describe('createNextInterestIteration', () => {
    it.each(createNextInterestIterationTestCases)(
      '$summary',
      ({ paymentTermsInterest, previousMainIteration, previousInterestIteration, expected }) => {
        expect(
          createNextInterestIteration(
            paymentTermsInterest,
            previousMainIteration,
            previousInterestIteration
          )
        ).toEqual(expected)
      }
    )
  })
})
