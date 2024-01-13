import type { PrincipalPaymentTerms, PaymentTerms, Priority } from 'entities/paymentTerms'

export const delayRiskFactorTestCases: Array<{
  summary: string
  principalPaymentTerms: Partial<PrincipalPaymentTerms>
  expected: number | null
}> = [
  {
    summary: 'No period = null',
    principalPaymentTerms: {},
    expected: 0.5512
  },
  {
    summary: '1 year',
    principalPaymentTerms: { period: 'year' },
    expected: 0.6872
  },
  {
    summary: '1 month none',
    principalPaymentTerms: { period: 'month', adjustment: 'none' },
    expected: 0.5379
  },
  {
    summary: '180 days',
    principalPaymentTerms: { period: 'day', offset: 180 },
    expected: 0.6172
  },
  {
    summary: '10 years',
    principalPaymentTerms: { period: 'year', offset: 10 },
    expected: 0.8231
  },
  {
    summary: 'same day',
    principalPaymentTerms: { period: 'day', offset: 0 },
    expected: 0.5013
  },
  {
    summary: '7 days before',
    principalPaymentTerms: { period: 'day', offset: -7 },
    expected: 0.5
  },
  {
    summary: '100 years',
    principalPaymentTerms: { period: 'year', offset: 100 },
    expected: 0.9859
  }
]

export const relativePriorityRiskFactorTestCases: Array<{
  summary: string
  paymentTerms: PaymentTerms
  expected: number | null
}> = [
  {
    summary: 'Principal flex / Interest sameAsPrincipal -> 1',
    paymentTerms: {
      priority: 'flex',
      interestRate: 0.05,
      interestPriority: 'sameAsPrincipal',
      interestStart: 'deferral',
      interestPeriod: 'sameAsPrincipal'
    },
    expected: 1
  },
  {
    summary: 'Principal flex / Interest Credit -> 1',
    paymentTerms: {
      priority: 'flex',
      interestRate: 0.05,
      interestPriority: 'firm',
      interestStart: 'deferral',
      interestPeriod: 'sameAsPrincipal'
    },
    expected: 0.5
  },
  {
    summary: 'Principal superflex / Interest flex -> +1 = 95%',
    paymentTerms: {
      priority: 'superflex',
      interestRate: 0.05,
      interestPriority: 'flex',
      interestStart: 'deferral',
      interestPeriod: 'sameAsPrincipal'
    },
    expected: 0.95
  },
  {
    summary: 'Principal preferred / Interest credit -> -3 = 115%',
    paymentTerms: {
      priority: 'preferred',
      interestRate: 0.05,
      interestPriority: 'credit',
      interestStart: 'deferral',
      interestPeriod: 'sameAsPrincipal'
    },
    expected: 1.15
  },
  {
    summary: 'Principal credit / Interest preferred  -> +3 = 85%',
    paymentTerms: {
      priority: 'credit',
      interestRate: 0.05,
      interestPriority: 'preferred',
      interestStart: 'deferral',
      interestPeriod: 'sameAsPrincipal'
    },
    expected: 0.85
  }
]

export const basicRiskFactorTestCases: Array<{
  summary: string
  paymentTerms: PaymentTerms
  expected: number
}> = [
  {
    summary: 'Token = 100%',
    paymentTerms: { priority: 'token' },
    expected: 1
  },
  {
    summary: 'Firm = 0%',
    paymentTerms: { priority: 'firm' },
    expected: 0
  },
  {
    summary: 'Flex (defaults) = 40%',
    paymentTerms: { priority: 'flex' },
    expected: 0.4
  },
  {
    summary: 'Preferred delivery finish = 20%',
    paymentTerms: {
      priority: 'preferred',
      start: 'deliveryFinish'
    },
    expected: 0.2
  },
  {
    summary: 'Preferred confirmation = 14%',
    paymentTerms: {
      priority: 'preferred',
      start: 'confirmation'
    },
    expected: 0.14
  },
  {
    summary: 'Superflex->flex = 9%',
    paymentTerms: {
      priority: 'superflex',
      start: 'confirmation',
      period: 'year',
      offset: 1,
      adjustment: 'BOP',
      interestRate: 0.05,
      interestPriority: 'sameAsPrincipal',
      interestStart: 'deliveryFinish',
      interestPeriod: 'quarter',
      residuePriority: 'flex',
      residuePeriod: 'year',

      canProjectRequestBuyback: false
    },
    expected: 0.0934
  },
  {
    summary: 'Credit, 7% interest = 28.07%',
    paymentTerms: {
      priority: 'credit',
      interestRate: 0.07,
      interestPriority: 'flex',
      interestStart: 'confirmation',
      interestPeriod: 'quarter'
    },
    expected: 0.2807
  }
]

export const recencyWeightedAverageTestCases: Array<{
  summary: string
  payableRatios: number[]
  expected: number
}> = [
  {
    summary: '4 x 100% -> 100%',
    payableRatios: [1, 1, 1, 1],
    expected: 1
  },
  {
    summary: '80-60-90-100 -> 78%',
    payableRatios: [0.8, 0.6, 0.9, 1.0],
    expected: 0.78
  },
  {
    summary: '60-50-40-30 -> 50%',
    payableRatios: [0.6, 0.5, 0.4, 0.3],
    expected: 0.5
  },
  {
    summary: '40-30-20-10-0-0-0 -> 21%',
    payableRatios: [0.4, 0.3, 0.2, 0.1, 0, 0, 0],
    expected: 0.2143
  }
]

export const adjustedRiskFactorTestCases: Array<{
  summary: string
  principalPriority: Priority
  payableRatios: number[]
  expected: number
}> = [
  {
    summary: 'flex * 100% -> 40%',
    principalPriority: 'flex',
    payableRatios: [1, 1, 1, 1],
    expected: 0.4
  },
  {
    summary: 'flex * 78% -> 48%',
    principalPriority: 'flex',
    payableRatios: [0.8, 0.6, 0.9, 1.0],
    expected: 0.488
  },
  {
    summary: 'preferred * 40%, 30% ... -> 67%',
    principalPriority: 'preferred',
    payableRatios: [0.4, 0.3, 0.2, 0.1, 0, 0, 0],
    expected: 0.6714
  },
  {
    summary: 'preferred * 0% -> 80% (like credit)',
    principalPriority: 'preferred',
    payableRatios: [0, 0, 0, 0, 0, 0, 0],
    expected: 0.8
  }
]

export const riskFactorTestCases: Array<{
  summary: string
  paymentTerms: PaymentTerms
  payableRatios: number[]
  expected: number
}> = [
  {
    summary: 'flex -> credit, 4x 100% -> 40%',
    paymentTerms: {
      priority: 'flex',
      residuePriority: 'credit'
    },
    payableRatios: [0.6, 0.5, 0.4, 0.3],
    expected: 0.6
  },
  {
    summary: 'preferred * 40%, 30% ... -> 67%',
    paymentTerms: { priority: 'preferred' },
    payableRatios: [0.4, 0.3, 0.2, 0.1, 0, 0, 0],
    expected: 0.6714
  },
  {
    summary: 'preferred @ 5% interest * 40%, 30% ... -> 67%',
    paymentTerms: {
      priority: 'preferred',
      interestRate: 0.05,
      interestPriority: 'flex',
      interestStart: 'confirmation',
      interestPeriod: 'quarter'
    },
    payableRatios: [0.4, 0.3, 0.2, 0.1, 0, 0, 0],
    expected: 0.1071
  }
]
