import {
  forDistributionTestCases,
  forSurplusTestCases,
  forOutflowTestCases,
  forReserveTargetTestCases
} from 'mock/inMemory/resolution'

import {
  forOutflow,
  forDistribution,
  forReserveTarget,
  forSurplus,
  getCutoffDate
} from './resolution'

describe('Resolutions', () => {
  describe('forReserveTarget', () => {
    describe('sucess cases', () => {
      it.each(forReserveTargetTestCases)(
        '$summary',
        ({
          availableCash,
          initialBalances,
          amountsRequested,
          resolutionName,
          destination,
          expected
        }) => {
          expect(
            forReserveTarget(
              availableCash,
              initialBalances,
              amountsRequested,
              resolutionName,
              destination
            )
          ).toBe(expected)
        }
      )
    })
  })

  describe('forOutflow', () => {
    describe('sucess cases', () => {
      it.each(forOutflowTestCases)(
        '$summary',
        ({ availableCash, amountsRequested, resolutionName, expected }) => {
          expect(forOutflow(availableCash, amountsRequested, resolutionName)).toBe(expected)
        }
      )
    })
  })

  describe('forSurplus', () => {
    it.each(forSurplusTestCases)(
      '$summary',
      ({ initialBalances, source, amountsRequested, resolutionName, expected }) => {
        expect(forSurplus(initialBalances, source, amountsRequested, resolutionName)).toEqual(
          expected
        )
      }
    )
  })

  describe('forDistribution', () => {
    it.each(forDistributionTestCases)('$summary', ({ initialBalances, source, expected }) => {
      expect(forDistribution(initialBalances, source)).toEqual(expected)
    })
  })

  describe('getCutoffDate', () => {
    it('10 may -> 31 june', () => {
      const resolutionDate = new Date('2023-05-10')
      const expectedCutoffDate = new Date('2023-05-31')
      expect(getCutoffDate(resolutionDate)).toEqual(expectedCutoffDate)
    })
    it('20 may -> 30 june', () => {
      const resolutionDate = new Date('2023-05-20')
      const expectedCutoffDate = new Date('2023-06-30')
      expect(getCutoffDate(resolutionDate)).toEqual(expectedCutoffDate)
    })
    it('10 feb -> 29 feb', () => {
      const resolutionDate = new Date('2024-02-10')
      const expectedCutoffDate = new Date('2024-02-29')
      expect(getCutoffDate(resolutionDate)).toEqual(expectedCutoffDate)
    })
    it('20 may / Tipping 25 -> 31 may ', () => {
      const resolutionDate = new Date('2023-05-20')
      const expectedCutoffDate = new Date('2023-05-31')
      expect(getCutoffDate(resolutionDate, 25)).toEqual(expectedCutoffDate)
    })
    it('10 may / Tipping 5 -> 30 june may', () => {
      const resolutionDate = new Date('2023-05-10')
      const expectedCutoffDate = new Date('2023-06-30')
      expect(getCutoffDate(resolutionDate, 5)).toEqual(expectedCutoffDate)
    })
  })
})
