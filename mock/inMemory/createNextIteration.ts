import type {
  CommitmentData,
  InterestCommitmentData,
  TokenCommitmentData
} from 'entities/commitment'

import type { PaymentTerms } from 'entities/paymentTerms'

export const createNextMainIterationTestCases: Array<{
  summary: string
  previousIteration: CommitmentData
  paymentTerms: PaymentTerms
  expected: CommitmentData
}> = [
  {
    summary: 'residue 20 flex next month',
    previousIteration: {
      id: 'commitment1',
      trancheId: 'tranche1',
      residueAmount: 20,
      priority: 'flex',
      type: 'main',
      level: 'primary',
      resolveDate: new Date('2020-05-05'),
      dueDate: new Date('2020-05-25'),
      status: 'payable'
    },
    paymentTerms: {
      priority: 'flex',
      residuePriority: 'flex',
      residuePeriod: 'month'
    },
    expected: {
      trancheId: 'tranche1',
      previousIterationId: 'commitment1',
      priority: 'flex',
      type: 'main',
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
      type: 'main',
      level: 'primary',
      resolveDate: new Date('2020-05-05'),
      dueDate: new Date('2020-05-25'),
      status: 'payable'
    },
    paymentTerms: {
      priority: 'flex',
      residuePriority: 'credit'
    },
    expected: {
      trancheId: 'tranche1',
      previousIterationId: 'commitment1',
      priority: 'credit',
      type: 'main',
      level: 'primary',
      status: 'active',
      principal: 20,
      activeDate: new Date('2020-05-05')
    }
  }
]

export const createNextInterestIterationTestCases: Array<{
  summary: string
  paymentTerms: PaymentTerms
  previousMainIteration: CommitmentData
  previousInterestIteration: InterestCommitmentData
  expected: InterestCommitmentData
}> = [
  {
    summary: '5% flex interest on credit main at interest resolution',
    paymentTerms: {
      priority: 'flex',
      interestRate: 0.05,
      interestPeriod: 'year'
    },
    previousMainIteration: {
      id: 'commitment1',
      trancheId: 'tranche1',
      priority: 'credit',
      type: 'main',
      level: 'primary',
      status: 'active',
      principal: 100
    },
    previousInterestIteration: {
      id: 'commitment2',
      trancheId: 'tranche1',
      priority: 'flex',
      type: 'interest',
      level: 'secondary',
      newInterest: 5,
      principal: 100,
      interestRate: 0.05,
      dueDate: new Date('2020-05-05'),
      status: 'payable'
    },
    expected: {
      trancheId: 'tranche1',
      previousIterationId: 'commitment2',
      priority: 'flex',
      type: 'interest',
      level: 'secondary',
      carriedInterest: 5,
      principal: 100,
      interestRate: 0.05,
      interestStartDate: new Date('2020-05-05'),
      dueDate: new Date('2021-05-05'),
      status: 'active'
    }
  },
  {
    summary: '6% flex interest on base flex, at jointcyc',
    paymentTerms: {
      priority: 'flex',
      interestPeriod: 'year'
    },
    previousMainIteration: {
      id: 'commitment1',
      trancheId: 'tranche1',
      priority: 'credit',
      type: 'main',
      level: 'primary',
      status: 'active',
      principal: 100
    },
    previousInterestIteration: {
      id: 'commitment2',
      trancheId: 'tranche1',
      priority: 'flex',
      type: 'interest',
      level: 'secondary',
      newInterest: 5,
      principal: 100,
      interestRate: 0.05,
      dueDate: new Date('2020-05-05'),
      status: 'payable'
    },
    expected: {
      trancheId: 'tranche1',
      previousIterationId: 'commitment2',
      priority: 'flex',
      type: 'interest',
      level: 'secondary',
      carriedInterest: 5,
      principal: 100,
      interestRate: 0.05,
      interestStartDate: new Date('2020-05-05'),
      dueDate: new Date('2021-05-05'),
      status: 'active'
    }
  }
]

export const createNextTokenIterationTestCases: Array<{
  summary: string
  previousIteration: TokenCommitmentData
  expected: TokenCommitmentData
}> = [
  {
    summary: 'residue 20 token units',
    previousIteration: {
      id: 'commitment1',
      trancheId: 'tranche1',
      referenceIndex: 2,
      residueNumberOfTokenUnits: 3,
      priority: 'token',
      type: 'token',
      level: 'secondary',
      resolveDate: new Date('2020-05-05'),
      status: 'payable'
    },
    expected: {
      trancheId: 'tranche1',
      previousIterationId: 'commitment1',
      referenceIndex: 2,
      numberOfTokenUnits: 3,
      principal: 6,
      status: 'active',
      priority: 'token',
      type: 'token',
      level: 'secondary',
      activeDate: new Date('2020-05-05')
    }
  }
]

export const createNextIterationsTestCases: Array<{
  summary: string
  previousIteration?: CommitmentData
  expected: Array<CommitmentData | TokenCommitmentData | InterestCommitmentData>
}> = []
