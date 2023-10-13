import {
  Commitment,
  Interest,
  CommitmentLevel,
  Token
} from 'entities/commitment'
import {
  Priority,
  Period,
  MainPaymentTerms,
  InterestPaymentTerms,
  PaymentTerms
} from 'entities/paymentTerms'
import { today } from 'usecases/utils'

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
  start?: Date
  adjustment?: 'BOP' | 'EOP' | 'none'
  period?: Period
  offset?: number
  expected?: Date
}> = [
  {
    summary: 'return start if not other arguments provided',
    start: new Date('2020-01-01'),
    expected: new Date('2020-02-29T23:59:59.999Z')
  },
  {
    summary: 'return by one month, EOP',
    start: new Date('2020-01-01'),
    adjustment: 'EOP',
    period: 'month',
    offset: 1,
    expected: new Date('2020-02-29T23:59:59.999Z')
  },
  {
    summary: 'offset by one month, no adjustment',
    start: new Date('2020-01-01'),
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
    start: new Date('2020-04-04'),
    adjustment: 'BOP',
    period: 'month',
    expected: new Date('2020-05-01')
  },
  {
    summary: 'adjust to beginning of year',
    start: new Date('2020-04-04'),
    adjustment: 'BOP',
    period: 'year',
    expected: new Date('2021-01-01')
  },
  {
    summary: 'adjust to beginning of quarter',
    start: new Date('2020-04-04'),
    adjustment: 'BOP',
    period: 'quarter',
    expected: new Date('2020-07-01')
  },
  {
    summary: 'adjust to end of month',
    start: new Date('2020-04-04'),
    adjustment: 'EOP',
    period: 'month',
    offset: 0,
    expected: new Date('2020-04-30T23:59:59.999Z')
  },
  {
    summary: 'adjust to end of year',
    start: new Date('2020-04-04'),
    adjustment: 'EOP',
    period: 'year',
    offset: 2,
    expected: new Date('2022-12-31T23:59:59.999Z')
  },
  {
    summary: 'adjust to end of quarter',
    start: new Date('2020-04-04'),
    adjustment: 'EOP',
    period: 'quarter',
    offset: 0,
    expected: new Date('2020-06-30T23:59:59.999Z')
  },
  {
    summary: 'offset by 1 month',
    start: new Date('2020-04-04'),
    period: 'month',
    offset: 1,
    expected: new Date('2020-05-31T23:59:59.999Z')
  },
  {
    summary: 'offset by 5 days',
    start: new Date('2020-04-04'),
    period: 'day',
    adjustment: 'none',
    offset: 5,
    expected: new Date('2020-04-09')
  },
  {
    summary: 'adjust to beginning of month and offset by -2',
    start: new Date('2020-04-04'),
    adjustment: 'BOP',
    period: 'month',
    offset: -2,
    expected: new Date('2020-02-01')
  },
  {
    summary: 'adjust to end of quarter and offset by 1',
    start: new Date('2020-04-04'),
    adjustment: 'EOP',
    period: 'quarter',
    offset: 1,
    expected: new Date('2020-09-30T23:59:59.999Z')
  }
]

export const createFirstMainIterationTestCases: Array<{
  summary: string
  mainPaymentTerms: MainPaymentTerms
  principal?: number
  orderDates?: { [key: string]: Date | string | undefined }
  expected: Partial<Commitment>
}> = [
  {
    summary: 'flex (no principal, no dates)',
    mainPaymentTerms: { priority: 'flex' },
    expected: {
      priority: 'flex',
      nature: 'main',
      level: 'primary',
      status: 'pending'
    }
  },
  {
    summary: '10 credit (no dates)',
    mainPaymentTerms: { priority: 'credit' },
    principal: 10,
    expected: {
      principal: 10,
      priority: 'credit',
      nature: 'main',
      level: 'primary',
      status: 'active',
      activeDate: today()
    }
  },
  {
    summary: '20 flex conf+1M',
    mainPaymentTerms: {
      priority: 'flex',
      start: 'confirmation',
      period: 'month',
      offset: 1
    },
    principal: 20,
    orderDates: { confirmation: '2020-05-05' },
    expected: {
      principal: 20,
      priority: 'flex',
      dueDate: new Date('2020-06-30T23:59:59.999Z'),
      nature: 'main',
      level: 'primary',
      status: 'active',
      activeDate: today()
    }
  },
  {
    summary: '30 flex conf+45D',
    mainPaymentTerms: {
      priority: 'flex',
      start: 'confirmation',
      period: 'day',
      offset: 45
    },
    principal: 30,
    orderDates: { confirmation: new Date('2020-05-05') },
    expected: {
      principal: 30,
      priority: 'flex',
      dueDate: new Date('2020-06-19T23:59:59.999Z'),
      nature: 'main',
      level: 'primary',
      status: 'active',
      activeDate: today()
    }
  },
  {
    summary: '40 pref conf@BOP+3M',
    mainPaymentTerms: {
      priority: 'preferred',
      start: 'confirmation',
      adjustment: 'BOP',
      period: 'month',
      offset: 3
    },
    principal: 40,
    orderDates: { confirmation: new Date('2020-06-05') },
    expected: {
      principal: 40,
      priority: 'preferred',
      dueDate: new Date('2020-09-01'),
      nature: 'main',
      level: 'primary',
      status: 'active',
      activeDate: today()
    }
  },
  {
    summary: '50 firm deliveryMiddle+1Q',
    mainPaymentTerms: {
      priority: 'firm',
      start: 'deliveryMiddle',
      period: 'quarter',
      offset: 1
    },
    principal: 50,
    expected: {
      principal: 50,
      priority: 'firm',
      nature: 'main',
      level: 'primary',
      status: 'pending'
    }
  },
  {
    summary: '60 superflex deliveryStart+2Y',
    mainPaymentTerms: {
      priority: 'superflex',
      start: 'deliveryStart',
      period: 'year',
      offset: 1
    },
    principal: 60,
    expected: {
      principal: 60,
      priority: 'superflex',
      nature: 'main',
      level: 'primary',
      status: 'pending'
    }
  }
]

export const createFirstInterestIterationTestCases: Array<{
  summary: string
  paymentTermsInterest: InterestPaymentTerms
  principal?: number
  orderDates?: { [key: string]: Date | string | undefined }
  mainPriority?: Priority
  principalDueDate?: Date
  expected: Partial<Interest>
}> = [
  {
    summary: '5%, credit, deliveryFinish, year',
    paymentTermsInterest: {
      rate: 0.05,
      priority: 'credit',
      start: 'deliveryFinish',
      period: 'year'
    },
    principal: 100,
    expected: {
      principal: 100,
      priority: 'credit',
      rate: 0.05,
      nature: 'interest',
      level: 'secondary',
      status: 'pending'
    }
  },
  {
    summary: '8%, credit, deliveryFinish, year',
    paymentTermsInterest: {
      rate: 0.08,
      priority: 'credit',
      start: 'confirmation',
      period: 'year'
    },
    principal: 100,
    orderDates: { confirmation: new Date('2020-05-05') },
    expected: {
      principal: 100,
      priority: 'credit',
      rate: 0.08,
      startDate: new Date('2020-05-05'),
      dueDate: new Date('2021-05-05'),
      nature: 'interest',
      level: 'secondary',
      status: 'active',
      activeDate: today()
    }
  },
  {
    summary: '4%, flex, confirmation, quarter',
    paymentTermsInterest: {
      rate: 0.04,
      priority: 'flex',
      start: 'confirmation',
      period: 'quarter'
    },
    principal: 120,
    orderDates: { confirmation: new Date('2020-05-05') },
    expected: {
      principal: 120,
      priority: 'flex',
      startDate: new Date('2020-05-05'),
      dueDate: new Date('2020-08-05'),
      rate: 0.04,
      nature: 'interest',
      level: 'secondary',
      status: 'active',
      activeDate: today()
    }
  },
  {
    summary: '7%, preferred, confirmation, sameAsMain',
    paymentTermsInterest: {
      rate: 0.07,
      priority: 'preferred',
      start: 'confirmation',
      period: 'sameAsMain'
    },
    principal: 80,
    orderDates: { confirmation: new Date('2020-05-05') },
    principalDueDate: new Date('2020-08-16'),
    expected: {
      principal: 80,
      priority: 'preferred',
      startDate: new Date('2020-05-05'),
      dueDate: new Date('2020-08-16'),
      rate: 0.07,
      nature: 'interest',
      level: 'secondary',
      status: 'active',
      activeDate: today()
    }
  },
  {
    summary: '7%, prefesameAsMainrred, confirmation, sameAsMain',
    paymentTermsInterest: {
      rate: 0.07,
      priority: 'sameAsMain',
      start: 'confirmation',
      period: 'sameAsMain'
    },
    principal: 80,
    orderDates: { confirmation: new Date('2020-05-05') },
    mainPriority: 'firm',
    principalDueDate: new Date('2020-08-17'),
    expected: {
      principal: 80,
      priority: 'firm',
      startDate: new Date('2020-05-05'),
      dueDate: new Date('2020-08-17'),
      rate: 0.07,
      nature: 'interest',
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
  expected: Partial<Token>
}> = [
  {
    summary: 'index 5, 10 principal',
    referenceIndex: 5,
    principal: 10,
    level: 'primary',
    expected: {
      priority: 'token',
      nature: 'token',
      principal: 10,
      referenceIndex: 5,
      numberOfTokenUnits: 2,
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
      nature: 'token',
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
      nature: 'token',
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
      nature: 'token',
      referenceIndex: 6,
      principal: 12,
      numberOfTokenUnits: 2,
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
      nature: 'token',
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
  expected: Array<Partial<Commitment> | Partial<Token> | Partial<Interest>>
}> = [
  {
    summary: 'flex (no principal, no dates)',
    paymentTerms: { main: { priority: 'flex' } },
    riskFactor: 0.5,
    referenceIndex: 5,
    expected: [
      {
        priority: 'flex',
        status: 'pending',
        level: 'primary',
        nature: 'main'
      },
      {
        priority: 'token',
        status: 'pending',
        level: 'secondary',
        nature: 'token',
        referenceIndex: 5
      }
    ]
  },
  {
    summary: '10 credit (no dates)',
    paymentTerms: { main: { priority: 'credit' } },
    principal: 10,
    referenceIndex: 2,
    riskFactor: 0.8,
    expected: [
      {
        principal: 10,
        priority: 'credit',
        status: 'active',
        level: 'primary',
        nature: 'main',
        activeDate: today()
      },
      {
        priority: 'token',
        status: 'active',
        level: 'secondary',
        nature: 'token',
        principal: 8,
        referenceIndex: 2,
        numberOfTokenUnits: 4,
        activeDate: today()
      }
    ]
  },
  {
    summary: '20 flex conf+1M (confirmation date)',
    paymentTerms: {
      main: {
        priority: 'flex',
        start: 'confirmation',
        period: 'month',
        offset: 1
      }
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
        nature: 'main',
        activeDate: today()
      },
      {
        priority: 'token',
        status: 'active',
        level: 'secondary',
        nature: 'token',
        principal: 10,
        referenceIndex: 2,
        numberOfTokenUnits: 5,
        activeDate: today()
      }
    ]
  },
  {
    summary: '30 flex conf+45D',
    paymentTerms: {
      main: {
        priority: 'flex',
        start: 'confirmation',
        period: 'day',
        offset: 45
      }
    },
    principal: 30,
    referenceIndex: 2,
    riskFactor: 0.4,
    orderDates: { confirmation: new Date('2020-05-05') },
    expected: [
      {
        principal: 30,
        priority: 'flex',
        dueDate: new Date('2020-06-19T23:59:59.999Z'),
        status: 'active',
        level: 'primary',
        nature: 'main',
        activeDate: today()
      },
      {
        priority: 'token',
        status: 'active',
        level: 'secondary',
        nature: 'token',
        principal: 12,
        referenceIndex: 2,
        numberOfTokenUnits: 6,
        activeDate: today()
      }
    ]
  },
  {
    summary: '40 pref conf@BOP+3M',
    paymentTerms: {
      main: {
        priority: 'preferred',
        start: 'confirmation',
        adjustment: 'BOP',
        period: 'month',
        offset: 3
      }
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
        nature: 'main',

        activeDate: today()
      },
      {
        priority: 'token',
        status: 'active',
        level: 'secondary',
        nature: 'token',
        principal: 8,
        referenceIndex: 4,
        numberOfTokenUnits: 2,
        activeDate: today()
      }
    ]
  },
  {
    summary: '50 firm deliveryMiddle+1Q',
    paymentTerms: {
      main: {
        priority: 'firm',
        start: 'deliveryMiddle',
        period: 'quarter',
        offset: 1
      }
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
        nature: 'main'
      }
    ]
  },
  {
    summary: '60 superflex deliveryStart+2Y',
    paymentTerms: {
      main: {
        priority: 'superflex',
        start: 'deliveryStart',
        period: 'year',
        offset: 1
      }
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
        nature: 'main'
      },
      {
        priority: 'token',
        status: 'active',
        level: 'secondary',
        nature: 'token',
        principal: 30,
        referenceIndex: 5,
        numberOfTokenUnits: 6,
        activeDate: today()
      }
    ]
  },
  {
    summary: '70 token',
    paymentTerms: { main: { priority: 'token' } },
    principal: 70,
    orderDates: { confirmation: new Date('2020-05-05') },
    referenceIndex: 10,
    expected: [
      {
        priority: 'token',
        principal: 70,
        referenceIndex: 10,
        numberOfTokenUnits: 7,
        status: 'active',
        level: 'primary',
        nature: 'token',
        activeDate: today()
      }
    ]
  },
  {
    summary: '40 pref + 5% interest, conf@BOP+3M',
    paymentTerms: {
      main: {
        priority: 'preferred',
        start: 'confirmation',
        adjustment: 'BOP',
        period: 'month',
        offset: 3
      },
      interest: {
        rate: 0.05,
        priority: 'flex',
        start: 'confirmation',
        period: 'sameAsMain'
      }
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
        nature: 'main',
        activeDate: today()
      },
      {
        priority: 'token',
        status: 'active',
        level: 'secondary',
        nature: 'token',
        principal: 8,
        referenceIndex: 4,
        numberOfTokenUnits: 2,
        activeDate: today()
      },
      {
        principal: 40,
        rate: 0.05,
        priority: 'flex',
        startDate: new Date('2020-06-05'),
        dueDate: new Date('2020-09-01'),
        status: 'active',
        level: 'secondary',
        nature: 'interest',
        activeDate: today()
      }
    ]
  }
]
