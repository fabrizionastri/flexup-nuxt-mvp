import {
  adjustmentLengths,
  interestPeriodRiskFactors,
  interestRateRiskHurdle,
  interestStartRiskFactors,
  principalPriorityRiskFactors,
  principalStartReferenceRiskFactors,
  noProjectRequestBuybackRiskFactor,
  periodLengths,
  priorities,
  residuePeriodRiskFactors,
  monthlyPriorities,
  residuePriorityRiskFactors
} from 'entities/paymentTerms'
import type { Adjustment, PaymentTerms, Period, Priority } from 'entities/paymentTerms'

const computeDelayRiskFactor = (days: number) => (Math.log10(days + 45) + 1.35) / 6

export const delayRiskFactor = (
  adjustmentLabel: Adjustment = 'EOP',
  periodLabel: Period = 'month',
  offset = 1
): number | null => {
  if (!periodLabel) return null
  const period = periodLengths[periodLabel]
  const adjustment = adjustmentLabel ? adjustmentLengths[adjustmentLabel] : 0
  const duration = period * (offset + adjustment)
  const delayRiskFactor = computeDelayRiskFactor(duration)
  return Math.min(Math.max(Math.round(delayRiskFactor * 10000) / 10000, 0.5), 1)
}

export const relativePriorityRiskFactor = (paymentTerms: PaymentTerms): number | null => {
  const interestPriority = paymentTerms.interestPriority || null
  const interestRate = paymentTerms.interestRate || null
  if (!interestPriority || !interestRate) return null
  if (interestPriority === 'firm') return 0.5
  if (interestPriority === 'sameAsPrincipal') return 1

  // find the index of interestPriority in Priorities
  const interestPriorityLevel = priorities.indexOf(interestPriority)
  const principalPriorityLevel = priorities.indexOf(paymentTerms.priority)
  const delta = principalPriorityLevel - interestPriorityLevel
  return 1 - delta * interestRate
}

export const basicRiskFactor = (paymentTerms: PaymentTerms): number => {
  let riskFactor = 1

  // Principal
  if (!paymentTerms.priority) return 0
  riskFactor *= principalPriorityRiskFactors[paymentTerms.priority]

  riskFactor *= principalStartReferenceRiskFactors[paymentTerms.start || 'notApplicable']
  if (paymentTerms.period) {
    const delayRF = delayRiskFactor(
      paymentTerms.adjustment,
      paymentTerms.period,
      paymentTerms.offset
    )
    if (delayRF) riskFactor *= delayRF
  }

  // Interest
  if (paymentTerms.interestRate) {
    riskFactor *= 1 - paymentTerms.interestRate / interestRateRiskHurdle
    riskFactor *= interestPeriodRiskFactors[paymentTerms.interestPeriod || 'sameAsPrincipal']
    riskFactor *= interestStartRiskFactors[paymentTerms.interestStart || 'deferral']
    const relativePriorityRF = relativePriorityRiskFactor(paymentTerms) // Si on a un null, il faudrait sans doute le gérer
    if (relativePriorityRF) riskFactor *= relativePriorityRF
  }

  // Residue
  if (paymentTerms.residuePriority) {
    riskFactor *= residuePriorityRiskFactors[paymentTerms.residuePriority]
    if (paymentTerms.residuePeriod)
      riskFactor *= residuePeriodRiskFactors[paymentTerms.residuePeriod]
  }

  // Token buyback
  if (paymentTerms.canProjectRequestBuyback === false)
    riskFactor *= noProjectRequestBuybackRiskFactor

  return Math.round(riskFactor * 10000) / 10000
}

export const recencyWeightedAverage = (payableRatios: number[]): number => {
  const n = payableRatios.length
  const p =
    payableRatios.reduce((sum, ratio, index) => {
      return sum + ratio * (n - index)
    }, 0) /
    ((n + 1) / 2) /
    n
  return Math.round(p * 10000) / 10000
}

export const adjustedRiskFactor = (
  principalPriority: Priority,
  payableRatios: number[]
): number => {
  const c = principalPriorityRiskFactors['credit']
  const p = recencyWeightedAverage(payableRatios)
  const r = principalPriorityRiskFactors[principalPriority]
  const a = r + (c - r) * (1 - p)
  return Math.round(a * 10000) / 10000
}

export const riskFactor = (paymentTerms: PaymentTerms, payableRatios: number[]): number => {
  const principalPriority = paymentTerms.priority
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
