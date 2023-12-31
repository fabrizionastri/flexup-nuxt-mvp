import {
  adjustmentLengths,
  interestPeriodRiskFactors,
  interestRateRiskHurdle,
  interestStartRiskFactors,
  mainPriorityRiskFactors,
  mainStartRiskFactors,
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
  const interestPriority = paymentTerms.interest?.priority || null
  const rate = paymentTerms.interest?.rate || null
  if (!interestPriority || !rate) return null
  if (interestPriority === 'firm') return 0.5
  if (interestPriority === 'sameAsMain') return 1

  // find the index of interestPriority in Priorities
  const interestPriorityLevel = priorities.indexOf(interestPriority)
  const mainPriorityLevel = priorities.indexOf(paymentTerms.main.priority)
  const delta = mainPriorityLevel - interestPriorityLevel
  return 1 - delta * rate
}

export const basicRiskFactor = (paymentTerms: PaymentTerms): number => {
  let riskFactor = 1

  // Main
  if (!paymentTerms.main.priority) return 0
  riskFactor *= mainPriorityRiskFactors[paymentTerms.main.priority]

  riskFactor *= mainStartRiskFactors[paymentTerms.main.start || 'notApplicable']
  if (paymentTerms.main.period) {
    const delayRF = delayRiskFactor(
      paymentTerms.main.adjustment,
      paymentTerms.main.period,
      paymentTerms.main.offset
    )
    if (delayRF) riskFactor *= delayRF
  }

  // Interest
  if (paymentTerms.interest) {
    riskFactor *= 1 - paymentTerms.interest.rate / interestRateRiskHurdle
    riskFactor *= interestPeriodRiskFactors[paymentTerms.interest.period || 'sameAsMain']
    riskFactor *= interestStartRiskFactors[paymentTerms.interest.start || 'deferral']
    const relativePriorityRF = relativePriorityRiskFactor(paymentTerms) // Si on a un null, il faudrait sans doute le gérer
    if (relativePriorityRF) riskFactor *= relativePriorityRF
  }

  // Residue
  if (paymentTerms.residue) {
    riskFactor *= residuePriorityRiskFactors[paymentTerms.residue.priority]
    if (paymentTerms.residue.period)
      riskFactor *= residuePeriodRiskFactors[paymentTerms.residue.period]
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

export const adjustedRiskFactor = (mainPriority: Priority, payableRatios: number[]): number => {
  const c = mainPriorityRiskFactors['credit']
  const p = recencyWeightedAverage(payableRatios)
  const r = mainPriorityRiskFactors[mainPriority]
  const a = r + (c - r) * (1 - p)
  return Math.round(a * 10000) / 10000
}

export const riskFactor = (paymentTerms: PaymentTerms, payableRatios: number[]): number => {
  const mainPriority = paymentTerms.main.priority
  const residuePriority = paymentTerms.residue?.priority ?? 'credit'
  const interestRate = paymentTerms.interest?.rate ?? 0

  // Check if the payment terms meet the criteria for risk factor adjustment
  if (monthlyPriorities.includes(mainPriority) && residuePriority === 'credit' && !interestRate)
    return adjustedRiskFactor(mainPriority, payableRatios)

  // If the criteria are not met, return the basic risk factor
  return basicRiskFactor(paymentTerms)
}
