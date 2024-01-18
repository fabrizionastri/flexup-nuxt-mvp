import type {
  CommitmentData,
  InterestCommitmentData,
  CommitmentLevel,
  TokenCommitmentData
} from 'entities/commitment'
import type { PrimaryPriority, Period, PaymentTerms } from 'lib/entities/paymentTerms'
import { today } from 'lib/utils'

export const offsetDateTestCases: Array<{
  summary: string
  initialDate?: Date
  period?: Period
  offset?: number
  expected: Date | null
}> = [
  {
    summary: 'offset 2020-01-01 by defaults',
    initialDate: new Date('2020-01-01'),
    expected: new Date('2020-01-01')
  },
  {
    summary: 'offset 2020-0-1 by defaults',
    initialDate: new Date('2020-01-01'),
    period: 'month',
    offset: 1,
    expected: new Date('2020-02-01')
  },
  {
    summary: 'by 5 days',
    initialDate: new Date('2020-04-01'),
    period: 'day',
    offset: 5,
    expected: new Date('2020-04-06')
  },
  {
    summary: 'by -2 months',
    initialDate: new Date('2020-07-01'),
    period: 'month',
    offset: -2,
    expected: new Date('2020-05-01')
  },
  {
    summary: 'by 2 months with change from winter to summer time',
    initialDate: new Date('2020-02-01'),
    period: 'month',
    offset: 3,
    expected: new Date('2020-05-01')
  },
  {
    summary: 'by 5 years',
    initialDate: new Date('2020-02-01'),
    period: 'year',
    offset: 5,
    expected: new Date('2025-02-01')
  },
  {
    summary: 'by 1 month from 30th Jan in 2021',
    initialDate: new Date('2020-01-30'),
    period: 'month',
    offset: 1,
    expected: new Date('2020-03-01')
  },
  {
    summary: 'by 1 month from 29th Jan in 2020',
    initialDate: new Date('2020-01-29'),
    period: 'month',
    offset: 1,
    expected: new Date('2020-02-29')
  },
  {
    summary: 'by 1 year from 29th Jan in 2020',
    initialDate: new Date('2020-02-29'),
    period: 'year',
    offset: 1,
    expected: new Date('2021-03-01')
  },
  {
    summary: 'undefined date returns undefined',
    initialDate: undefined,
    period: 'year',
    offset: 1,
    expected: null
  },
  {
    summary: 'undefined period returns initialDate',
    initialDate: new Date('2020-04-05'),
    offset: 1,
    expected: new Date('2020-04-05')
  },
  {
    summary: 'missing offset returns initialDate',
    initialDate: new Date('2020-04-05'),
    period: 'year',
    expected: new Date('2020-04-05')
  }
]

export const calculateDueDateTestCases: Array<{
  summary: string
  startDate?: Date
  adjustment?: 'BOP' | 'EOP' | 'none'
  period?: Period
  offset?: number
  expected?: Date
}> = [
  {
    summary: 'return start date if no other arguments provided',
    startDate: new Date('2020-01-01'),
    expected: new Date('2020-02-01')
  },
  {
    summary: 'offset 1 day, EOP',
    startDate: new Date('2020-01-01'),
    adjustment: 'EOP',
    period: 'day',
    offset: 1,
    expected: new Date('2020-01-02T23:59:59.999Z')
  },
  {
    summary: 'offset 1 month, EOP',
    startDate: new Date('2020-01-01'),
    adjustment: 'EOP',
    period: 'month',
    offset: 1,
    expected: new Date('2020-02-29T23:59:59.999Z')
  },
  {
    summary: 'offset by one month, no adjustment',
    startDate: new Date('2020-01-01'),
    adjustment: 'none',
    period: 'month',
    offset: 1,
    expected: new Date('2020-02-01')
  },
  {
    summary: 'return undefined if no start provided',
    expected: undefined
  },
  {
    summary: 'adjust to beginning of month',
    startDate: new Date('2020-04-04'),
    adjustment: 'BOP',
    period: 'month',
    expected: new Date('2020-05-01')
  },
  {
    summary: 'adjust to beginning of year',
    startDate: new Date('2020-04-04'),
    adjustment: 'BOP',
    period: 'year',
    expected: new Date('2021-01-01')
  },
  {
    summary: 'adjust to beginning of quarter',
    startDate: new Date('2020-04-04'),
    adjustment: 'BOP',
    period: 'quarter',
    expected: new Date('2020-07-01')
  },
  {
    summary: 'adjust to end of month',
    startDate: new Date('2020-04-04'),
    adjustment: 'EOP',
    period: 'month',
    offset: 0,
    expected: new Date('2020-04-30T23:59:59.999Z')
  },
  {
    summary: 'adjust to end of year',
    startDate: new Date('2020-04-04'),
    adjustment: 'EOP',
    period: 'year',
    offset: 2,
    expected: new Date('2022-12-31T23:59:59.999Z')
  },
  {
    summary: 'adjust to end of quarter',
    startDate: new Date('2020-04-04'),
    adjustment: 'EOP',
    period: 'quarter',
    offset: 0,
    expected: new Date('2020-06-30T23:59:59.999Z')
  },
  {
    summary: 'offset by 1 month (defaults to no adjustment)',
    startDate: new Date('2020-04-04'),
    period: 'month',
    offset: 1,
    expected: new Date('2020-05-04T00:00:00.000Z')
  },
  {
    summary: 'offset by 5 days',
    startDate: new Date('2020-04-04'),
    period: 'day',
    adjustment: 'none',
    offset: 5,
    expected: new Date('2020-04-09')
  },
  {
    summary: 'adjust to beginning of month and offset by -2',
    startDate: new Date('2020-04-04'),
    adjustment: 'BOP',
    period: 'month',
    offset: -2,
    expected: new Date('2020-02-01')
  },
  {
    summary: 'adjust to end of quarter and offset by 1',
    startDate: new Date('2020-04-04'),
    adjustment: 'EOP',
    period: 'quarter',
    offset: 1,
    expected: new Date('2020-09-30T23:59:59.999Z')
  }
]

export const createFirstMainIterationTestCases: Array<{
  summary: string
  paymentTerms: PaymentTerms
  principal?: number
  orderDates?: { [key: string]: Date | string | undefined }
  expected: CommitmentData
}> = [
  {
    summary: 'flex (no principal, no dates)',
    paymentTerms: { primaryPriority: 'flex' },
    expected: {
      priority: 'flex',
      type: 'main',
      level: 'primary',
      status: 'pending'
    }
  },
  {
    summary: '10 credit (no dates)',
    paymentTerms: { primaryPriority: 'credit' },
    principal: 10,
    expected: {
      principal: 10,
      priority: 'credit',
      type: 'main',
      level: 'primary',
      status: 'active',
      activeDate: today()
    }
  },
  {
    summary: '20 flex conf+1M',
    paymentTerms: {
      primaryPriority: 'flex',
      mainStart: 'confirmation',
      mainPeriod: 'month',
      mainOffset: 1
    },
    principal: 20,
    orderDates: { confirmation: '2020-05-05' },
    expected: {
      principal: 20,
      priority: 'flex',
      dueDate: new Date('2020-06-05T00:00:00.000Z'),
      type: 'main',
      level: 'primary',
      status: 'active',
      activeDate: today()
    }
  },
  {
    summary: '30 flex conf+45D',
    paymentTerms: {
      primaryPriority: 'flex',
      mainStart: 'confirmation',
      mainPeriod: 'day',
      mainAdjustment: 'EOP',
      mainOffset: 45
    },
    principal: 30,
    orderDates: { confirmation: new Date('2020-05-05') },
    expected: {
      principal: 30,
      priority: 'flex',
      dueDate: new Date('2020-06-19T23:59:59.999Z'),
      type: 'main',
      level: 'primary',
      status: 'active',
      activeDate: today()
    }
  },
  {
    summary: '40 pref conf@BOP+3M',
    paymentTerms: {
      primaryPriority: 'preferred',
      mainStart: 'confirmation',
      mainAdjustment: 'BOP',
      mainPeriod: 'month',
      mainOffset: 3
    },
    principal: 40,
    orderDates: { confirmation: new Date('2020-06-05') },
    expected: {
      principal: 40,
      priority: 'preferred',
      dueDate: new Date('2020-09-01'),
      type: 'main',
      level: 'primary',
      status: 'active',
      activeDate: today()
    }
  },
  {
    summary: '50 firm deliveryMiddle+1Q',
    paymentTerms: {
      primaryPriority: 'firm',
      mainStart: 'deliveryMiddle',
      mainPeriod: 'quarter',
      mainOffset: 1
    },
    principal: 50,
    expected: {
      principal: 50,
      priority: 'firm',
      type: 'main',
      level: 'primary',
      status: 'pending'
    }
  },
  {
    summary: '60 superflex deliveryStart+2Y',
    paymentTerms: {
      primaryPriority: 'superflex',
      mainStart: 'deliveryStart',
      mainPeriod: 'year',
      mainOffset: 1
    },
    principal: 60,
    expected: {
      principal: 60,
      priority: 'superflex',
      type: 'main',
      level: 'primary',
      status: 'pending'
    }
  }
]

export const createFirstInterestIterationTestCases: Array<{
  summary: string
  paymentTerms: PaymentTerms
  principal?: number
  orderDates?: { [key: string]: Date | string | undefined }
  principalPriority?: PrimaryPriority
  principalDueDate?: Date
  expected: InterestCommitmentData
}> = [
  // {
  //   summary: '5%, credit, deliveryFinish, year',
  //   paymentTerms: {
  //     priority: 'flex',
  //     interestRate: 0.05,
  //     interestPriority: 'credit',
  //     interestStartRef: 'deliveryFinish',
  //     interestPeriod: 'year'
  //   },
  //   principal: 100,
  //   expected: {
  //     principal: 100,
  //     priority: 'credit',
  //     interestRate: 0.05,
  //     type: 'interest',
  //     level: 'secondary',
  //     status: 'pending'
  //   }
  // },
  // {
  //   summary: '8%, credit, deliveryFinish, year',
  //   paymentTerms: {
  //     priority: 'flex',
  //     interestRate: 0.08,
  //     interestPriority: 'credit',
  //     interestStartRef: 'confirmation',
  //     interestPeriod: 'year'
  //   },
  //   principal: 100,
  //   orderDates: { confirmation: new Date('2020-05-05') },
  //   expected: {
  //     principal: 100,
  //     priority: 'credit',
  //     interestRate: 0.08,
  //     interestStartDate: new Date('2020-05-05'),
  //     type: 'interest',
  //     level: 'secondary',
  //     status: 'active',
  //     activeDate: today()
  //   }
  // },
  // {
  //   summary: '4%, flex, confirmation, quarter',
  //   paymentTerms: {
  //     priority: 'flex',
  //     interestRate: 0.04,
  //     interestStartRef: 'confirmation',
  //     interestPeriod: 'quarter'
  //   },
  //   principal: 120,
  //   orderDates: { confirmation: new Date('2020-05-05') },
  //   expected: {
  //     principal: 120,
  //     priority: 'flex',
  //     interestStartDate: new Date('2020-05-05'),
  //     dueDate: new Date('2020-08-05'),
  //     interestRate: 0.04,
  //     type: 'interest',
  //     level: 'secondary',
  //     status: 'active',
  //     newInterest: 1.1913552943120997,
  //     activeDate: today()
  //   }
  // },
  {
    summary: '7%, preferred, confirmation, sameAsPrimary',
    paymentTerms: {
      primaryPriority: 'firm',
      interestRate: 0.07,
      interestPriority: 'preferred',
      interestStart: 'confirmation',
      interestPeriod: 'sameAsPrimary'
    },
    principal: 80,
    orderDates: { confirmation: new Date('2020-05-05') },
    principalDueDate: new Date('2020-08-16'),
    expected: {
      principal: 80,
      priority: 'preferred',
      interestStartDate: new Date('2020-05-05'),
      dueDate: new Date('2020-08-16'),
      interestRate: 0.07,
      type: 'interest',
      level: 'secondary',
      status: 'active',
      newInterest: 1.541026067716036,
      activeDate: today()
    }
  },
  {
    summary: '7%, prefesameAsPrimaryrred, confirmation, sameAsPrimary',
    paymentTerms: {
      primaryPriority: 'preferred',
      interestRate: 0.07,
      interestPriority: 'sameAsPrimary',
      interestStart: 'confirmation',
      interestPeriod: 'sameAsPrimary'
    },
    principal: 80,
    orderDates: { confirmation: new Date('2020-05-05') },
    principalPriority: 'firm',
    principalDueDate: new Date('2020-08-17'),
    expected: {
      principal: 80,
      priority: 'preferred',
      interestStartDate: new Date('2020-05-05'),
      dueDate: new Date('2020-08-17'),
      interestRate: 0.07,
      newInterest: 1.5561320680689938,
      type: 'interest',
      level: 'secondary',
      status: 'active',
      activeDate: today()
    }
  }
]

export const createFirstTokenIterationTestCases: Array<{
  summary: string
  referenceIndex: number
  principal?: number
  level?: CommitmentLevel
  canProjectRequestBuyback?: boolean
  expected: TokenCommitmentData
}> = [
  {
    summary: 'index 5, 10 principal',
    referenceIndex: 5,
    principal: 10,
    level: 'primary',
    expected: {
      priority: 'token',
      type: 'token',
      principal: 10,
      referenceIndex: 5,
      numberOfTokens: 2,
      level: 'primary',
      status: 'active',
      activeDate: today()
    }
  },
  {
    summary: 'index 7, no principal',
    referenceIndex: 7,
    level: 'secondary',
    expected: {
      priority: 'token',
      type: 'token',
      referenceIndex: 7,
      level: 'secondary',
      status: 'pending'
    }
  },
  {
    summary: 'index 6, no principal',
    referenceIndex: 6,
    level: 'primary',
    canProjectRequestBuyback: true,
    expected: {
      priority: 'token',
      type: 'token',
      referenceIndex: 6,
      level: 'primary',
      status: 'pending',
      canProjectRequestBuyback: true
    }
  },
  {
    summary: 'index 6, principal 12',
    referenceIndex: 6,
    principal: 12,
    level: 'primary',
    expected: {
      priority: 'token',
      type: 'token',
      referenceIndex: 6,
      principal: 12,
      numberOfTokens: 2,
      level: 'primary',
      status: 'active',
      activeDate: today()
    }
  },
  {
    summary: 'index 8, no principal',
    referenceIndex: 8,
    level: 'primary',
    canProjectRequestBuyback: true,
    expected: {
      priority: 'token',
      type: 'token',
      referenceIndex: 8,
      level: 'primary',
      status: 'pending',
      canProjectRequestBuyback: true
    }
  }
]

export const createFirstIterationsTestCases: Array<{
  summary: string
  paymentTerms: PaymentTerms
  principal?: number
  orderDates?: { [key: string]: Date | string | undefined }
  riskFactor?: number
  referenceIndex?: number
  expected: Array<CommitmentData | TokenCommitmentData | InterestCommitmentData>
}> = [
  {
    summary: 'flex (no principal, no dates)',
    paymentTerms: { primaryPriority: 'flex' },
    riskFactor: 0.5,
    referenceIndex: 5,
    expected: [
      {
        priority: 'flex',
        status: 'pending',
        level: 'primary',
        type: 'main'
      },
      {
        priority: 'token',
        status: 'pending',
        level: 'secondary',
        type: 'token',
        referenceIndex: 5
      }
    ]
  },
  {
    summary: '10 credit (no dates)',
    paymentTerms: { primaryPriority: 'credit' },
    principal: 10,
    referenceIndex: 2,
    riskFactor: 0.8,
    expected: [
      {
        principal: 10,
        priority: 'credit',
        status: 'active',
        level: 'primary',
        type: 'main',
        activeDate: today()
      },
      {
        priority: 'token',
        status: 'active',
        level: 'secondary',
        type: 'token',
        principal: 8,
        referenceIndex: 2,
        numberOfTokens: 4,
        activeDate: today()
      }
    ]
  },
  {
    summary: '20 flex conf+1M (confirmation date)',
    paymentTerms: {
      primaryPriority: 'flex',
      mainStart: 'confirmation',
      mainPeriod: 'month',
      mainAdjustment: 'EOP',
      mainOffset: 1
    },
    principal: 20,
    referenceIndex: 2,
    riskFactor: 0.5,
    orderDates: { confirmation: new Date('2020-05-05') },
    expected: [
      {
        principal: 20,
        priority: 'flex',
        dueDate: new Date('2020-06-30T23:59:59.999Z'),
        status: 'active',
        level: 'primary',
        type: 'main',
        activeDate: today()
      },
      {
        priority: 'token',
        status: 'active',
        level: 'secondary',
        type: 'token',
        principal: 10,
        referenceIndex: 2,
        numberOfTokens: 5,
        activeDate: today()
      }
    ]
  },
  {
    summary: '30 flex conf+45D',
    paymentTerms: {
      primaryPriority: 'flex',
      mainStart: 'confirmation',
      mainPeriod: 'day',
      mainOffset: 45
    },
    principal: 30,
    referenceIndex: 2,
    riskFactor: 0.4,
    orderDates: { confirmation: new Date('2020-05-05T11:11:00.000Z') },
    expected: [
      {
        principal: 30,
        priority: 'flex',
        dueDate: new Date('2020-06-19T11:11:00.000Z'),
        status: 'active',
        level: 'primary',
        type: 'main',
        activeDate: today()
      },
      {
        priority: 'token',
        status: 'active',
        level: 'secondary',
        type: 'token',
        principal: 12,
        referenceIndex: 2,
        numberOfTokens: 6,
        activeDate: today()
      }
    ]
  },
  {
    summary: '40 pref conf@BOP+3M',
    paymentTerms: {
      primaryPriority: 'preferred',
      mainStart: 'confirmation',
      mainAdjustment: 'BOP',
      mainPeriod: 'month',
      mainOffset: 3
    },
    principal: 40,
    referenceIndex: 4,
    riskFactor: 0.2,
    orderDates: { confirmation: new Date('2020-06-05') },
    expected: [
      {
        principal: 40,
        priority: 'preferred',
        dueDate: new Date('2020-09-01'),
        status: 'active',
        level: 'primary',
        type: 'main',

        activeDate: today()
      },
      {
        priority: 'token',
        status: 'active',
        level: 'secondary',
        type: 'token',
        principal: 8,
        referenceIndex: 4,
        numberOfTokens: 2,
        activeDate: today()
      }
    ]
  },
  {
    summary: '50 firm deliveryMiddle+1Q',
    paymentTerms: {
      primaryPriority: 'firm',
      mainStart: 'deliveryMiddle',
      mainPeriod: 'quarter',
      mainOffset: 1
    },
    principal: 50,
    referenceIndex: 4,
    riskFactor: 0,
    expected: [
      {
        principal: 50,
        priority: 'firm',
        status: 'pending',
        level: 'primary',
        type: 'main'
      }
    ]
  },
  {
    summary: '60 superflex deliveryStart+2Y',
    paymentTerms: {
      primaryPriority: 'superflex',
      mainStart: 'deliveryStart',
      mainPeriod: 'year',
      mainOffset: 1
    },
    principal: 60,
    referenceIndex: 5,
    riskFactor: 0.5,
    expected: [
      {
        principal: 60,
        priority: 'superflex',
        status: 'pending',
        level: 'primary',
        type: 'main'
      },
      {
        priority: 'token',
        status: 'active',
        level: 'secondary',
        type: 'token',
        principal: 30,
        referenceIndex: 5,
        numberOfTokens: 6,
        activeDate: today()
      }
    ]
  },
  {
    summary: '70 token',
    paymentTerms: { primaryPriority: 'token' },
    principal: 70,
    orderDates: { confirmation: new Date('2020-05-05') },
    referenceIndex: 10,
    expected: [
      {
        priority: 'token',
        principal: 70,
        referenceIndex: 10,
        numberOfTokens: 7,
        status: 'active',
        level: 'primary',
        type: 'token',
        activeDate: today()
      }
    ]
  },
  {
    summary: '40 pref + 5% interest, conf@BOP+3M',
    paymentTerms: {
      primaryPriority: 'preferred',
      mainStart: 'confirmation',
      mainAdjustment: 'BOP',
      mainPeriod: 'month',
      mainOffset: 3,
      interestRate: 0.05,
      interestPriority: 'flex',
      interestStart: 'confirmation',
      interestPeriod: 'sameAsPrimary'
    },
    principal: 40,
    referenceIndex: 4,
    riskFactor: 0.2,
    orderDates: { confirmation: new Date('2020-06-05') },
    expected: [
      {
        principal: 40,
        priority: 'preferred',
        dueDate: new Date('2020-09-01'),
        status: 'active',
        type: 'main',
        level: 'primary',
        activeDate: today()
      },
      {
        principal: 8,
        priority: 'token',
        type: 'token',
        level: 'secondary',
        status: 'active',
        referenceIndex: 4,
        numberOfTokens: 2,
        activeDate: today()
      },
      {
        principal: 40,
        priority: 'flex',
        interestRate: 0.05,
        type: 'interest',
        level: 'secondary',
        interestStartDate: new Date('2020-06-05'),
        dueDate: new Date('2020-09-01'),
        newInterest: 0.4729767545090269,
        status: 'active',
        activeDate: today()
      }
    ]
  }
]
