export const priorities = ['firm', 'preferred', 'flex', 'superflex', 'credit', 'token'] as const

export type Priority = (typeof priorities)[number]

export const monthlyPriorities = ['firm', 'preferred', 'flex', 'superflex']

export const annualPriorities = ['credit', 'token']

export const mainPriorityRiskFactors = {
  firm: 0,
  preferred: 0.2,
  flex: 0.4,
  superflex: 0.6,
  credit: 0.8,
  token: 1
} as const

export const mainStartRiskFactors = {
  notApplicable: 1,
  deliveryFinish: 1,
  deliveryMiddle: 0.9,
  deliveryStart: 0.8,
  confirmation: 0.7
} as const

export type MainStart = keyof typeof mainStartRiskFactors

export const residuePriorityRiskFactors = {
  credit: 1,
  superflex: 0.9,
  flex: 0.8,
  preferred: 0.7
} as const

export type ResiduePriority = keyof typeof residuePriorityRiskFactors

export const residuePeriodRiskFactors = {
  year: 1,
  quarter: 0.9,
  month: 0.8
} as const

export type ResiduePeriod = keyof typeof residuePeriodRiskFactors

export const interestStartRiskFactors = {
  deferral: 1,
  deliveryFinish: 1,
  deliveryMiddle: 0.95,
  deliveryStart: 0.9,
  confirmation: 0.85
} as const

export const periodLengths = {
  day: 1,
  month: 30.4375,
  quarter: 91.3125,
  year: 365.25
} as const

export type Period = keyof typeof periodLengths

export const adjustmentLengths = {
  BOP: -0.5,
  EOP: 0.5,
  none: 0
} as const

export type Adjustment = keyof typeof adjustmentLengths

export type MainPaymentTerms = {
  priority: Priority
  start?: MainStart | undefined
  adjustment?: Adjustment | undefined
  period?: Period | undefined
  offset?: number | undefined
}

export type ResiduePaymentTerms = {
  priority: ResiduePriority
  period?: ResiduePeriod
}

export type relativePriority = Priority | 'sameAsMain' | undefined

export type InterestStart = keyof typeof interestStartRiskFactors

export const interestPeriodRiskFactors = {
  sameAsMain: 1,
  ...residuePeriodRiskFactors
} as const

export type InterestPeriod = keyof typeof interestPeriodRiskFactors

export type InterestPaymentTerms = {
  rate: number
  priority: relativePriority
  start: InterestStart
  period?: InterestPeriod
}

export const rateRiskHurdle = 0.15

export const noProjectRequestBuybackRiskFactor = 0.75

export const interestRateRiskHurdle = 0.15

export type PaymentTerms = {
  main: MainPaymentTerms
  residue?: ResiduePaymentTerms
  interest?: InterestPaymentTerms
  canProjectRequestBuyback?: boolean
}

export interface PaymentTermsTemplate {
  id: string
  name: string
  PaymentTerms: PaymentTerms
}
