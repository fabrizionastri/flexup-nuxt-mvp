import type { PaymentTerms, PrimaryPriority } from 'entities/paymentTerms'

export const delayRiskFactorTestCases: Array<{
  summary: string
  principalPaymentTerms: Partial<PaymentTerms>
  expected: number | null
}> = [
  {
    summary: 'no info provided → defaults to 1 month, no adjustment',
    principalPaymentTerms: {},
    expected: 0.5379
  },
  {
    summary: 'only EOP provided',
    principalPaymentTerms: { mainAdjustment: 'EOP' },
    expected: 0.5512
  },
  {
    summary: 'only year provided',
    principalPaymentTerms: { mainPeriod: 'year' },
    expected: 0.6605
  },
  {
    summary: 'only month & none provided',
    principalPaymentTerms: { mainPeriod: 'month', mainAdjustment: 'none' },
    expected: 0.5379
  },
  {
    summary: '180 days',
    principalPaymentTerms: { mainPeriod: 'day', mainOffset: 180 },
    expected: 0.617
  },
  {
    summary: '10 years',
    principalPaymentTerms: { mainPeriod: 'year', mainOffset: 10, mainAdjustment: 'EOP' },
    expected: 0.8231
  },
  {
    summary: 'same day',
    principalPaymentTerms: { mainPeriod: 'day', mainOffset: 0 },
    expected: 0.5005
  },
  {
    summary: '7 days before',
    principalPaymentTerms: { mainPeriod: 'day', mainOffset: -7 },
    expected: 0.5
  },
  {
    summary: '100 years',
    principalPaymentTerms: { mainPeriod: 'year', mainOffset: 100 },
    expected: 0.9855
  }
]

export const relativePriorityRiskFactorTestCases: Array<{
  summary: string
  paymentTerms: PaymentTerms
  expected: number | null
}> = [
  {
    summary: 'Main flex / Interest sameAsPrimary -> 1',
    paymentTerms: {
      primaryPriority: 'flex',
      interestRate: 0.05,
      interestPriority: 'sameAsPrimary',
      interestStart: 'deferral',
      interestPeriod: 'sameAsPrimary'
    },
    expected: 1
  },
  {
    summary: 'Main flex / Interest Credit -> 1',
    paymentTerms: {
      primaryPriority: 'flex',
      interestRate: 0.05,
      interestPriority: 'firm',
      interestStart: 'deferral',
      interestPeriod: 'sameAsPrimary'
    },
    expected: 0.5
  },
  {
    summary: 'Main superflex / Interest flex -> +1 = 95%',
    paymentTerms: {
      primaryPriority: 'superflex',
      interestRate: 0.05,
      interestPriority: 'flex',
      interestStart: 'deferral',
      interestPeriod: 'sameAsPrimary'
    },
    expected: 0.95
  },
  {
    summary: 'Main preferred / Interest credit -> -3 = 115%',
    paymentTerms: {
      primaryPriority: 'preferred',
      interestRate: 0.05,
      interestPriority: 'credit',
      interestStart: 'deferral',
      interestPeriod: 'sameAsPrimary'
    },
    expected: 1.15
  },
  {
    summary: 'Main credit / Interest preferred  -> +3 = 85%',
    paymentTerms: {
      primaryPriority: 'credit',
      interestRate: 0.05,
      interestPriority: 'preferred',
      interestStart: 'deferral',
      interestPeriod: 'sameAsPrimary'
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
    paymentTerms: { primaryPriority: 'token' },
    expected: 1
  },
  {
    summary: 'Firm = 0%',
    paymentTerms: { primaryPriority: 'firm' },
    expected: 0
  },
  {
    summary: 'Flex (defaults) = 40%',
    paymentTerms: {
      primaryPriority: 'flex',
      mainStart: 'confirmation',
      mainPeriod: 'month',
      mainOffset: 1
    },
    expected: 0.1506
  },
  {
    summary: 'Preferred delivery finish ∞',
    paymentTerms: {
      primaryPriority: 'preferred',
      mainStart: 'deliveryFinish',
      mainPeriod: 'year',
      mainOffset: 10000 // this is just to elimitate the delay risk factor
    },
    expected: 0.2
  },
  {
    summary: 'Preferred delivery finish (defaults)',
    paymentTerms: {
      primaryPriority: 'preferred'
    },
    expected: 0.1076
  },
  {
    summary: 'Preferred confirmation',
    paymentTerms: {
      primaryPriority: 'preferred',
      mainStart: 'deliveryFinish'
      // defauts to 1 month, no adjustment
    },
    expected: 0.1076
  },
  {
    summary: 'Preferred confirmation 1 month',
    paymentTerms: {
      primaryPriority: 'preferred',
      mainStart: 'confirmation',
      mainPeriod: 'month',
      mainOffset: 1
    },
    expected: 0.0753
  },
  {
    summary: 'Preferred confirmation ∞',
    paymentTerms: {
      primaryPriority: 'preferred',
      mainStart: 'confirmation',
      mainPeriod: 'month',
      mainOffset: 100000000 // this is just to elimitate the delay risk factor
    },
    expected: 0.14
  },
  {
    summary: 'Superflex->flex = 9%',
    paymentTerms: {
      primaryPriority: 'superflex',
      mainStart: 'confirmation',
      mainPeriod: 'year',
      mainOffset: 1,
      mainAdjustment: 'BOP',
      interestRate: 0.05,
      interestPriority: 'sameAsPrimary',
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
      primaryPriority: 'credit',
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
  principalPriority: PrimaryPriority
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
      primaryPriority: 'flex',
      residuePriority: 'credit'
    },
    payableRatios: [0.6, 0.5, 0.4, 0.3],
    expected: 0.6
  },
  {
    summary: 'preferred * 40%, 30% ... -> 67%',
    paymentTerms: { primaryPriority: 'preferred' },
    payableRatios: [0.4, 0.3, 0.2, 0.1, 0, 0, 0],
    expected: 0.6714
  },
  {
    summary: 'preferred @ 5% interest * 40%, 30% ... -> 67%',
    paymentTerms: {
      primaryPriority: 'preferred',
      mainStart: 'deliveryFinish',
      mainPeriod: 'year',
      mainOffset: 100000, // this is just to elimitate the delay risk factor
      interestRate: 0.05,
      interestPriority: 'flex',
      interestStart: 'confirmation',
      interestPeriod: 'quarter'
    },
    payableRatios: [0.4, 0.3, 0.2, 0.1, 0, 0, 0],
    expected: 0.1071
  }
]
