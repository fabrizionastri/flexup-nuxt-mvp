import type { MainPaymentTerms, PaymentTerms, Priority } from 'entities/paymentTerms'

export const delayRiskFactorTestCases: Array<{
  summary: string
  mainPaymentTerms: Partial<MainPaymentTerms>
  expected: number | null
}> = [
  {
    summary: 'No period = null',
    mainPaymentTerms: {},
    expected: 0.5512
  },
  {
    summary: '1 year',
    mainPaymentTerms: { period: 'year' },
    expected: 0.6872
  },
  {
    summary: '1 month none',
    mainPaymentTerms: { period: 'month', adjustment: 'none' },
    expected: 0.5379
  },
  {
    summary: '180 days',
    mainPaymentTerms: { period: 'day', offset: 180 },
    expected: 0.6172
  },
  {
    summary: '10 years',
    mainPaymentTerms: { period: 'year', offset: 10 },
    expected: 0.8231
  },
  {
    summary: 'same day',
    mainPaymentTerms: { period: 'day', offset: 0 },
    expected: 0.5013
  },
  {
    summary: '7 days before',
    mainPaymentTerms: { period: 'day', offset: -7 },
    expected: 0.5
  },
  {
    summary: '100 years',
    mainPaymentTerms: { period: 'year', offset: 100 },
    expected: 0.9859
  }
]

export const relativePriorityRiskFactorTestCases: Array<{
  summary: string
  paymentTerms: PaymentTerms
  expected: number | null
}> = [
  {
    summary: 'Main flex / Interest sameAsMain -> 1',
    paymentTerms: {
      main: { priority: 'flex' },
      interest: {
        rate: 0.05,
        priority: 'sameAsMain',
        start: 'deferral',
        period: 'sameAsMain'
      }
    },
    expected: 1
  },
  {
    summary: 'Main flex / Interest Credit -> 1',
    paymentTerms: {
      main: { priority: 'flex' },
      interest: {
        rate: 0.05,
        priority: 'firm',
        start: 'deferral',
        period: 'sameAsMain'
      }
    },
    expected: 0.5
  },
  {
    summary: 'Main superflex / Interest flex -> +1 = 95%',
    paymentTerms: {
      main: { priority: 'superflex' },
      interest: {
        rate: 0.05,
        priority: 'flex',
        start: 'deferral',
        period: 'sameAsMain'
      }
    },
    expected: 0.95
  },
  {
    summary: 'Main preferred / Interest credit -> -3 = 115%',
    paymentTerms: {
      main: { priority: 'preferred' },
      interest: {
        rate: 0.05,
        priority: 'credit',
        start: 'deferral',
        period: 'sameAsMain'
      }
    },
    expected: 1.15
  },
  {
    summary: 'Main credit / Interest preferred  -> +3 = 85%',
    paymentTerms: {
      main: { priority: 'credit' },
      interest: {
        rate: 0.05,
        priority: 'preferred',
        start: 'deferral',
        period: 'sameAsMain'
      }
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
    paymentTerms: { main: { priority: 'token' } },
    expected: 1
  },
  {
    summary: 'Firm = 0%',
    paymentTerms: { main: { priority: 'firm' } },
    expected: 0
  },
  {
    summary: 'Flex (defaults) = 40%',
    paymentTerms: { main: { priority: 'flex' } },
    expected: 0.4
  },
  {
    summary: 'Preferred delivery finish = 20%',
    paymentTerms: {
      main: {
        priority: 'preferred',
        start: 'deliveryFinish'
      }
    },
    expected: 0.2
  },
  {
    summary: 'Preferred confirmation = 14%',
    paymentTerms: {
      main: {
        priority: 'preferred',
        start: 'confirmation'
      }
    },
    expected: 0.14
  },
  {
    summary: 'Superflex->flex = 9%',
    paymentTerms: {
      main: {
        priority: 'superflex',
        start: 'confirmation',
        period: 'year',
        offset: 1,
        adjustment: 'BOP'
      },
      interest: {
        rate: 0.05,
        priority: 'sameAsMain',
        start: 'deliveryFinish',
        period: 'quarter'
      },
      residue: {
        priority: 'flex',
        period: 'year'
      },
      canProjectRequestBuyback: false
    },
    expected: 0.0934
  },
  {
    summary: 'Credit, 7% interest = 28.07%',
    paymentTerms: {
      main: {
        priority: 'credit'
      },
      interest: {
        rate: 0.07,
        priority: 'flex',
        start: 'confirmation',
        period: 'quarter'
      }
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
  mainPriority: Priority
  payableRatios: number[]
  expected: number
}> = [
  {
    summary: 'flex * 100% -> 40%',
    mainPriority: 'flex',
    payableRatios: [1, 1, 1, 1],
    expected: 0.4
  },
  {
    summary: 'flex * 78% -> 48%',
    mainPriority: 'flex',
    payableRatios: [0.8, 0.6, 0.9, 1.0],
    expected: 0.488
  },
  {
    summary: 'preferred * 40%, 30% ... -> 67%',
    mainPriority: 'preferred',
    payableRatios: [0.4, 0.3, 0.2, 0.1, 0, 0, 0],
    expected: 0.6714
  },
  {
    summary: 'preferred * 0% -> 80% (like credit)',
    mainPriority: 'preferred',
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
      main: { priority: 'flex' },
      residue: { priority: 'credit' }
    },
    payableRatios: [0.6, 0.5, 0.4, 0.3],
    expected: 0.6
  },
  {
    summary: 'preferred * 40%, 30% ... -> 67%',
    paymentTerms: { main: { priority: 'preferred' } },
    payableRatios: [0.4, 0.3, 0.2, 0.1, 0, 0, 0],
    expected: 0.6714
  },
  {
    summary: 'preferred @ 5% interest * 40%, 30% ... -> 67%',
    paymentTerms: {
      main: { priority: 'preferred' },
      interest: {
        rate: 0.05,
        priority: 'flex',
        start: 'confirmation',
        period: 'quarter'
      }
    },
    payableRatios: [0.4, 0.3, 0.2, 0.1, 0, 0, 0],
    expected: 0.1071
  }
]
