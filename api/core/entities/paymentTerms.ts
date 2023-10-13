export const Priorities = ['firm', 'preferred', 'flex', 'superflex', 'credit', 'token'] as const

export type Priority = (typeof Priorities)[number]

export const MonthlyPriorities = ['firm', 'preferred', 'flex', 'superflex']

export const AnnualPriorities = ['credit', 'token']

export const MainPriorityRiskFactors = {
  firm: 0,
  preferred: 0.2,
  flex: 0.4,
  superflex: 0.6,
  credit: 0.8,
  token: 1
} as const

export const MainStartRiskFactors = {
  notApplicable: 1,
  deliveryFinish: 1,
  deliveryMiddle: 0.9,
  deliveryStart: 0.8,
  confirmation: 0.7
} as const

export type MainStart = keyof typeof MainStartRiskFactors

export const ResiduePriorityRiskFactors = {
  credit: 1,
  superflex: 0.9,
  flex: 0.8,
  preferred: 0.7
} as const

export type ResiduePriority = keyof typeof ResiduePriorityRiskFactors

export const ResiduePeriodRiskFactors = {
  year: 1,
  quarter: 0.9,
  month: 0.8
} as const

export type ResiduePeriod = keyof typeof ResiduePeriodRiskFactors

export const InterestStartRiskFactors = {
  deferral: 1,
  deliveryFinish: 1,
  deliveryMiddle: 0.95,
  deliveryStart: 0.9,
  confirmation: 0.85
} as const

export const PeriodLengths = {
  day: 1,
  month: 30.4375,
  quarter: 91.3125,
  year: 365.25
} as const

export type Period = keyof typeof PeriodLengths

export const AdjustmentLengths = {
  BOP: -0.5,
  EOP: 0.5,
  none: 0
} as const

export type Adjustment = keyof typeof AdjustmentLengths

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

export type RelativePriority = Priority | 'sameAsMain' | undefined

export type InterestStart = keyof typeof InterestStartRiskFactors

export const InterestPeriodRiskFactors = {
  sameAsMain: 1,
  ...ResiduePeriodRiskFactors
} as const

export type InterestPeriod = keyof typeof InterestPeriodRiskFactors

export type InterestPaymentTerms = {
  rate: number
  priority: RelativePriority
  start: InterestStart
  period?: InterestPeriod
}

export const RateRiskHurdle = 0.15

export const NoProjectRequestBuybackRiskFactor = 0.75

export const InterestRateRiskHurdle = 0.15

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
