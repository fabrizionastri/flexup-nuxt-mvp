import {
  offsetDateTestCases,
  calculateDueDateTestCases,
  createFirstIterationsTestCases,
  createFirstTokenIterationTestCases,
  createFirstMainIterationTestCases,
  createFirstInterestIterationTestCases
} from 'mock/inMemory/createFirstIteration'

import {
  calculateDueDate,
  offsetDate,
  createFirstIterations,
  createFirstTokenIteration,
  createFirstMainIteration,
  createFirstInterestIteration,
  calculateInterestDueDate
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
      ({ startDate: start, adjustment, period, offset, expected }) => {
        expect(calculateDueDate(start, adjustment, period, offset)).toEqual(expected)
      }
    )
  })

  describe('calculateInterestDueDate', () => {
    const interestStartDate = new Date('2024-01-01')

    it('returns undefined for credit priority', () => {
      expect(calculateInterestDueDate(interestStartDate, 'month', 'credit')).toBeUndefined()
    })
    it('returns undefined when start date is undefined', () => {
      expect(calculateInterestDueDate(undefined, 'month', 'flex')).toBeUndefined()
    })
    it('returns principal due date when interest period is same as principal', () => {
      const principalDueDate = new Date('2024-02-01')
      expect(
        calculateInterestDueDate(interestStartDate, 'sameAsPrimary', 'flex', principalDueDate)
      ).toBe(principalDueDate)
    })
    it('returns undefined when interest period is same as principal and principal due date is invalid', () => {
      expect(
        calculateInterestDueDate(interestStartDate, 'sameAsPrimary', 'flex', new Date('invalid'))
      ).toBeUndefined()
    })
    it('returns calculated interest due date for flex priority and valid period', () => {
      const expectedDueDate = new Date('2024-04-01') // Assuming calculateDueDate function works correctly
      expect(calculateInterestDueDate(interestStartDate, 'quarter')).toEqual(expectedDueDate)
    })
    it('returns principal due date if calculated interest due date is after the principal due date', () => {
      const principalDueDate = new Date('2024-01-15')
      expect(calculateInterestDueDate(interestStartDate, 'year', 'flex', principalDueDate)).toBe(
        principalDueDate
      )
    })
    it('returns principal due date if no interest period is provided', () => {
      const principalDueDate = new Date('2024-01-15')
      expect(
        calculateInterestDueDate(interestStartDate, undefined, undefined, principalDueDate)
      ).toBe(principalDueDate)
    })
    it('returns principal due date if interestPeriod is sameAsPrimary', () => {
      const interestStartDate2 = new Date('2020-05-05')
      const interestPriority2 = 'preferred'
      const interestPeriod2 = 'sameAsPrimary'
      const principalDueDate2 = new Date('2020-08-16')

      expect(
        calculateInterestDueDate(
          interestStartDate2,
          interestPeriod2,
          interestPriority2,
          principalDueDate2
        )
      ).toBe(principalDueDate2)
    })
  })

  describe('createFirstMainIteration', () => {
    it.each(createFirstMainIterationTestCases)(
      '$summary',
      ({ paymentTerms, principal, orderDates, expected }) => {
        expect(createFirstMainIteration(paymentTerms, principal, orderDates)).toEqual(expected)
      }
    )
  })

  describe('createFirsInterestIteration', () => {
    it.each(createFirstInterestIterationTestCases)(
      '$summary',
      ({ paymentTerms, principal, orderDates, principalDueDate, expected }) => {
        expect(
          createFirstInterestIteration(paymentTerms, principal, orderDates, principalDueDate)
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
      ({ paymentTerms, principal, orderDates, referenceIndex, riskFactor, expected }) => {
        expect(
          createFirstIterations(paymentTerms, principal, orderDates, referenceIndex, riskFactor)
        ).toEqual(expected)
      }
    )
  })
})
