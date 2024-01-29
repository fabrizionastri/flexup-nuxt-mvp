import {
  adjustmentLengths,
  interestPeriodRiskFactors,
  interestRateRiskHurdle,
  interestStartRiskFactors,
  primaryPriorityRiskFactors,
  mainStartRiskFactors,
  noProjectRequestBuybackRiskFactor,
  periodLengths,
  primaryPriorities,
  residuePeriodRiskFactors,
  monthlyPriorities,
  residuePriorityRiskFactors
} from 'entities/paymentTerms'
import type { MainAdjustment, PaymentTerms, Period, PrimaryPriority } from 'entities/paymentTerms'
import { round4 } from 'lib/utils'

const computeDelayRiskFactor = (days: number) => (Math.log10(days + 45) + 1.35) / 6

export const delayRiskFactor = (
  adjustmentLabel: MainAdjustment = 'none',
  periodLabel: Period = 'month',
  offset = 1
): number => {
  const periodLengthInDays = periodLengths[periodLabel]
  const adjustment = adjustmentLabel ? adjustmentLengths[adjustmentLabel] : 0
  const durationInDays = periodLengthInDays * (offset + adjustment)
  const delayRiskFactor = computeDelayRiskFactor(durationInDays)
  return Math.min(Math.max(round4(delayRiskFactor), 0.5), 1)
}

export const relativePriorityRiskFactor = (paymentTerms: PaymentTerms): number | null => {
  // if there is a difference between primary and interest priorities, we need to adjust the risk factor by the difference in priority levels, multiplied by the interest rate
  const interestPriority = paymentTerms.interestPriority || null
  const interestRate = paymentTerms.interestRate || null
  if (!interestPriority || !interestRate) return null
  if (interestPriority === 'firm') return 0.5
  if (interestPriority === 'sameAsPrimary') return 1

  // find the index of interestPriority in Priorities
  const interestPriorityLevel = primaryPriorities.indexOf(interestPriority)
  const principalPriorityLevel = primaryPriorities.indexOf(paymentTerms.primaryPriority)
  const delta = principalPriorityLevel - interestPriorityLevel
  return 1 - delta * interestRate
}

// This needs to be coded in the payment terms form
export const basicRiskFactor = (paymentTerms: PaymentTerms): number => {
  if (!paymentTerms.primaryPriority) return 0

  let riskFactor = primaryPriorityRiskFactors[paymentTerms.primaryPriority]

  // Main start and delay does not apply for equity priorities (credit & token)
  if (!['credit', 'token'].includes(paymentTerms.primaryPriority)) {
    riskFactor *= mainStartRiskFactors[paymentTerms.mainStart || 'deliveryFinish']
    riskFactor *= delayRiskFactor(
      paymentTerms.mainAdjustment,
      paymentTerms.mainPeriod,
      paymentTerms.mainOffset
    )
  }

  if (!riskFactor) return 0 // early return if risk factor is 0 or undefined or NaN

  if (paymentTerms.interestRate) {
    // Interest - does not apply it interest rate is not > 0
    riskFactor *= Math.max(Math.min(1 - paymentTerms.interestRate / interestRateRiskHurdle, 1), 0)
    riskFactor *= interestPeriodRiskFactors[paymentTerms.interestPeriod || 'sameAsPrimary']
    riskFactor *= interestStartRiskFactors[paymentTerms.interestStart || 'deferral']
    const relativePriorityRF = relativePriorityRiskFactor(paymentTerms) // Si on a un null, il faudrait sans doute le gérer
    if (relativePriorityRF) riskFactor *= relativePriorityRF
  }
  if (!riskFactor) return 0 // early return if risk factor is 0 or undefined or NaN

  // Residue - does not apply for equity priorities (credit & token)
  if (paymentTerms.residuePriority) {
    riskFactor *= residuePriorityRiskFactors[paymentTerms.residuePriority]
    if (paymentTerms.residuePeriod)
      // Does not apply if residue priority is 'credit'
      riskFactor *= residuePeriodRiskFactors[paymentTerms.residuePeriod]
  }
  if (!riskFactor) return 0 // early return if risk factor is 0 or undefined or NaN

  // Equity buyback
  if (paymentTerms.canProjectRequestBuyback === false)
    riskFactor *= noProjectRequestBuybackRiskFactor

  return round4(riskFactor)
}

export const computeAveragePayableRatio = (payableRatios: number[]): number => {
  const numberOfPeriods = payableRatios.length
  const averagePayableRatio =
    payableRatios.reduce((sum, ratio, index) => {
      return sum + ratio * (numberOfPeriods - index)
    }, 0) /
    ((numberOfPeriods + 1) / 2) /
    numberOfPeriods
  return round4(averagePayableRatio)
}

export const adjustedRiskFactor = (
  principalPriority: PrimaryPriority,
  payableRatios: number[]
): number => {
  const creditRiskFactor = primaryPriorityRiskFactors['credit'] // eg. Credit Risk Factor = 80%
  const selectedRiskFactor = primaryPriorityRiskFactors[principalPriority] // eg. Flex Risk Factor = 40%
  const averagePayableRatio = computeAveragePayableRatio(payableRatios) // How much Flex did I actually pay recently ?
  const adjustmentFactor =
    selectedRiskFactor + (creditRiskFactor - selectedRiskFactor) * (1 - averagePayableRatio)
  return round4(adjustmentFactor)
}

export const riskFactor = (paymentTerms: PaymentTerms, payableRatios: number[]): number => {
  const principalPriority = paymentTerms.primaryPriority
  const residuePriority = paymentTerms?.residuePriority ?? 'credit'
  const interestRate = paymentTerms?.interestRate ?? 0

  // Check if the payment terms meet the criteria for risk factor adjustment
  if (
    monthlyPriorities.includes(principalPriority) &&
    residuePriority === 'credit' &&
    !interestRate
  )
    return adjustedRiskFactor(principalPriority, payableRatios)

  // If the criteria are not met, return the basic risk factor
  return basicRiskFactor(paymentTerms)
}
