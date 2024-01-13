import {
  adjustedRiskFactorTestCases,
  delayRiskFactorTestCases,
  relativePriorityRiskFactorTestCases,
  riskFactorTestCases,
  recencyWeightedAverageTestCases,
  basicRiskFactorTestCases
} from 'mock/inMemory/riskFactor'

import {
  delayRiskFactor,
  relativePriorityRiskFactor,
  basicRiskFactor,
  adjustedRiskFactor,
  recencyWeightedAverage,
  riskFactor
} from './risk-factor'

describe('Risk Factor', () => {
  describe('delayRiskFactor', () => {
    it.each(delayRiskFactorTestCases)('$summary', ({ principalPaymentTerms, expected }) => {
      const { adjustment, period, offset } = principalPaymentTerms
      expect(delayRiskFactor(adjustment, period, offset)).toEqual(expected)
    })
  })

  describe('relativePriorityRiskFactor', () => {
    it.each(relativePriorityRiskFactorTestCases)('$summary', ({ paymentTerms, expected }) => {
      expect(relativePriorityRiskFactor(paymentTerms)).toEqual(expected)
    })
  })

  describe('basicRiskFactor', () => {
    it.each(basicRiskFactorTestCases)('$summary', ({ paymentTerms, expected }) => {
      expect(basicRiskFactor(paymentTerms)).toEqual(expected)
    })
  })

  describe('adjustedRiskFactor', () => {
    it.each(adjustedRiskFactorTestCases)(
      '$summary',
      ({ principalPriority, payableRatios, expected }) => {
        expect(adjustedRiskFactor(principalPriority, payableRatios)).toEqual(expected)
      }
    )
  })

  describe('recencyWeightedAverage', () => {
    it.each(recencyWeightedAverageTestCases)('$summary', ({ payableRatios, expected }) => {
      expect(recencyWeightedAverage(payableRatios)).toEqual(expected)
    })
  })

  describe('riskFactor', () => {
    it.each(riskFactorTestCases)('$summary', ({ paymentTerms, payableRatios, expected }) => {
      expect(riskFactor(paymentTerms, payableRatios)).toEqual(expected)
    })
  })
})
