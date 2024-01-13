import {
  createNextInterestIterationTestCases,
  createNextPrincipalIterationTestCases,
  createNextTokenIterationTestCases
} from 'mock/inMemory/createNextIteration'
import {
  createNextInterestIteration,
  createNextPrincipalIteration,
  createNextTokenIteration
} from 'usecases/createNextIterations'

describe('Create Next Iterations', () => {
  describe('createNextPrincipalIteration', () => {
    it.each(createNextPrincipalIterationTestCases)(
      '$summary',
      ({ previousIteration, residuePaymentTerms, expected }) => {
        expect(createNextPrincipalIteration(previousIteration, residuePaymentTerms)).toEqual(
          expected
        )
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
      ({
        paymentTermsInterest,
        previousPrincipalIteration,
        previousInterestIteration,
        expected
      }) => {
        expect(
          createNextInterestIteration(
            paymentTermsInterest,
            previousPrincipalIteration,
            previousInterestIteration
          )
        ).toEqual(expected)
      }
    )
  })
})
