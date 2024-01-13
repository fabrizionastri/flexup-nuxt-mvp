import {
  calculateDueDateTestCases,
  createFirstIterationsTestCases,
  createFirstTokenIterationTestCases,
  createFirstPrincipalIterationTestCases,
  createFirstInterestIterationTestCases,
  offsetDateTestCases
} from 'mock/inMemory/createFirstIteration'

import {
  calculateDueDate,
  offsetDate,
  createFirstIterations,
  createFirstTokenIteration,
  createFirstPrincipalIteration,
  createFirstInterestIteration
} from './createFirstIterations'

describe('Create first iterations upon order confirmation', () => {
  describe('offsetDate', () => {
    it.each(offsetDateTestCases)('$summary', ({ initialDate, period, offset, expected }) => {
      expect(offsetDate(initialDate, period, offset)).toStrictEqual(expected)
    })
  })

  describe('calculateDueDate', () => {
    it.each(calculateDueDateTestCases)(
      '$summary',
      ({ start, adjustment, period, offset, expected }) => {
        expect(calculateDueDate(start, adjustment, period, offset)).toEqual(expected)
      }
    )
  })

  describe('createFirstPrincipalIteration', () => {
    it.each(createFirstPrincipalIterationTestCases)(
      '$summary',
      ({ principalPaymentTerms, principal, orderDates, expected }) => {
        expect(createFirstPrincipalIteration(principalPaymentTerms, principal, orderDates)).toEqual(
          expected
        )
      }
    )
  })

  describe('createFirsInterestIteration', () => {
    it.each(createFirstInterestIterationTestCases)(
      '$summary',
      ({
        paymentTermsInterest,
        principal,
        orderDates,
        principalPriority,
        principalDueDate,
        expected
      }) => {
        expect(
          createFirstInterestIteration(
            paymentTermsInterest,
            principal,
            orderDates,
            principalPriority,
            principalDueDate
          )
        ).toEqual(expected)
      }
    )
  })

  describe('createFirstToken', () => {
    it.each(createFirstTokenIterationTestCases)(
      '$summary',
      ({ referenceIndex, principal, level, canProjectRequestBuyback, expected }) => {
        expect(
          createFirstTokenIteration(referenceIndex, principal, level, canProjectRequestBuyback)
        ).toEqual(expected)
      }
    )
  })

  describe('createFirstIterations', () => {
    it.each(createFirstIterationsTestCases)(
      '$summary',
      ({ paymentTerms, principal, orderDates, riskFactor, referenceIndex, expected }) => {
        expect(
          createFirstIterations(paymentTerms, principal, orderDates, referenceIndex, riskFactor)
        ).toEqual(expected)
      }
    )
  })
})
