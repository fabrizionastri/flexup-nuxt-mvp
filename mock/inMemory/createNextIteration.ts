import type { Commitment, Interest, Token } from 'entities/commitment'

import type { ResiduePaymentTerms, InterestPaymentTerms } from 'entities/paymentTerms'

export const createNextMainIterationTestCases: Array<{
  summary: string
  previousIteration: Partial<Commitment>
  residuePaymentTerms: ResiduePaymentTerms
  expected: Partial<Commitment>
}> = [
  {
    summary: 'residue 20 flex next month',
    previousIteration: {
      id: 'commitment1',
      trancheId: 'tranche1',
      residueAmount: 20,
      priority: 'flex',
      nature: 'main',
      level: 'primary',
      resolveDate: new Date('2020-05-05'),
      dueDate: new Date('2020-05-25')
    },
    residuePaymentTerms: {
      residuePriority: 'flex',
      residuePeriod: 'month'
    },
    expected: {
      trancheId: 'tranche1',
      previousIterationId: 'commitment1',
      priority: 'flex',
      nature: 'main',
      level: 'primary',
      status: 'active',
      principal: 20,
      activeDate: new Date('2020-05-05'),
      dueDate: new Date('2020-06-25')
    }
  },
  {
    summary: 'residue 20 credit',
    previousIteration: {
      id: 'commitment1',
      trancheId: 'tranche1',
      residueAmount: 20,
      priority: 'flex',
      nature: 'main',
      level: 'primary',
      resolveDate: new Date('2020-05-05'),
      dueDate: new Date('2020-05-25')
    },
    residuePaymentTerms: {
      residuePriority: 'credit'
    },
    expected: {
      trancheId: 'tranche1',
      previousIterationId: 'commitment1',
      priority: 'credit',
      nature: 'main',
      level: 'primary',
      status: 'active',
      principal: 20,
      activeDate: new Date('2020-05-05')
    }
  }
]

export const createNextInterestIterationTestCases: Array<{
  summary: string
  paymentTermsInterest: Partial<InterestPaymentTerms>
  previousMainIteration: Partial<Commitment>
  previousInterestIteration: Partial<Interest>
  expected: Partial<Interest>
}> = [
  {
    summary: '5% flex interest on credit main at interest resolution',
    paymentTermsInterest: {
      interestPeriod: 'year'
    },
    previousMainIteration: {
      id: 'commitment1',
      trancheId: 'tranche1',
      priority: 'credit',
      nature: 'main',
      level: 'primary',
      status: 'active',
      principal: 100
    },
    previousInterestIteration: {
      id: 'commitment2',
      trancheId: 'tranche1',
      priority: 'flex',
      nature: 'interest',
      level: 'secondary',
      newInterest: 5,
      principal: 100,
      interestRate: 0.05,
      dueDate: new Date('2020-05-05')
    },
    expected: {
      trancheId: 'tranche1',
      previousIterationId: 'commitment2',
      priority: 'flex',
      nature: 'interest',
      level: 'secondary',
      carriedInterest: 5,
      principal: 100,
      interestRate: 0.05,
      startDate: new Date('2020-05-05'),
      dueDate: new Date('2021-05-05')
    }
  },
  {
    summary: '6% flex interest on base flex, at jointcyc',
    paymentTermsInterest: {
      interestPeriod: 'year'
    },
    previousMainIteration: {
      id: 'commitment1',
      trancheId: 'tranche1',
      priority: 'credit',
      nature: 'main',
      level: 'primary',
      status: 'active',
      principal: 100
    },
    previousInterestIteration: {
      id: 'commitment2',
      trancheId: 'tranche1',
      priority: 'flex',
      nature: 'interest',
      level: 'secondary',
      newInterest: 5,
      principal: 100,
      interestRate: 0.05,
      dueDate: new Date('2020-05-05')
    },
    expected: {
      trancheId: 'tranche1',
      previousIterationId: 'commitment2',
      priority: 'flex',
      nature: 'interest',
      level: 'secondary',
      carriedInterest: 5,
      principal: 100,
      interestRate: 0.05,
      startDate: new Date('2020-05-05'),
      dueDate: new Date('2021-05-05')
    }
  }
]

export const createNextTokenIterationTestCases: Array<{
  summary: string
  previousIteration: Partial<Token>
  expected: Partial<Token>
}> = [
  {
    summary: 'residue 20 token units',
    previousIteration: {
      id: 'commitment1',
      trancheId: 'tranche1',
      referenceIndex: 2,
      residueNumberOfTokenUnits: 3,
      priority: 'token',
      nature: 'token',
      level: 'secondary',
      resolveDate: new Date('2020-05-05')
    },
    expected: {
      trancheId: 'tranche1',
      previousIterationId: 'commitment1',
      referenceIndex: 2,
      numberOfTokenUnits: 3,
      principal: 6,
      status: 'active',
      priority: 'token',
      nature: 'token',
      level: 'secondary',
      activeDate: new Date('2020-05-05')
    }
  }
]

export const createNextIterationsTestCases: Array<{
  summary: string
  previousIteration?: Partial<Commitment>
  expected: Array<Partial<Commitment> | Partial<Token> | Partial<Interest>>
}> = []
