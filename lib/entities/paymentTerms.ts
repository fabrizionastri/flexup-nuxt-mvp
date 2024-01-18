export const primaryPriorities = [
  'firm',
  'preferred',
  'flex',
  'superflex',
  'credit',
  'token'
] as const

export type PrimaryPriority = (typeof primaryPriorities)[number]
export type SecondaryPriority = PrimaryPriority | 'sameAsPrimary'
export type ExtendedPriority = SecondaryPriority | 'distribution'

export const monthlyPriorities = ['firm', 'preferred', 'flex', 'superflex']

export const annualPriorities = ['credit', 'token']

export const primaryPriorityRiskFactors = {
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

export const residuePeriodRiskFactors = {
  year: 1,
  quarter: 0.9,
  month: 0.8
} as const

export type ResiduePeriod = keyof typeof residuePeriodRiskFactors

export const interestStartRiskFactors = {
  deferral: 1, // interests only start if principal is not paid in full at first due date
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
  BOP: -0.5, // beginning of period
  EOP: 0.5, // end of period
  none: 0 // no adjustment
} as const

export type MainAdjustment = keyof typeof adjustmentLengths

export type CashPriority = 'firm' | 'preferred' | 'flex' | 'superflex' | 'credit'

export type InterestStart = keyof typeof interestStartRiskFactors

export const interestPeriodRiskFactors = {
  sameAsPrimary: 1,
  ...residuePeriodRiskFactors
} as const

export type InterestPeriod = keyof typeof interestPeriodRiskFactors

export interface PaymentTerms {
  id?: string // defaults to uuid
  name?: string // required
  primaryPriority: PrimaryPriority // required, no default value provided
  // for main commitments only
  mainStart?: MainStart // defaults to 'deliveryFinish'
  mainAdjustment?: MainAdjustment // defaults to none
  mainPeriod?: Period // defaults to month
  mainOffset?: number // defaults to 1
  // for residue commitments only
  residuePriority?: SecondaryPriority // defaults to credit
  residuePeriod?: ResiduePeriod // defaults to year if residuePriority is not credit
  // for interest commitments only
  interestRate?: number // if not provided, no interest commitment will be created
  interestPriority?: SecondaryPriority // defaults to credit, but not applicable if interestRate is falsy
  interestStart?: InterestStart // defaults to deliveryFinish, but not applicable if interestRate is falsy
  interestPeriod?: InterestPeriod // defaults to 'sameAsPrimary', but not applicable if interestRate is falsy or if interestPriority is credit
  // for equity commitments only
  canProjectRequestBuyback?: boolean
}

export const rateRiskHurdle = 0.15

export const noProjectRequestBuybackRiskFactor = 0.75

export const interestRateRiskHurdle = 0.15

export interface PaymentTermsTemplate {
  id: string
  name: string
  paymentTerms: PaymentTerms
}
