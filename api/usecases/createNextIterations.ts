import type {
  CommitmentData,
  InterestCommitmentData,
  TokenCommitmentData
} from 'entities/commitment'
import type { PaymentTerms } from 'entities/paymentTerms'
import { offsetDate } from 'usecases/createFirstIterations'

// TODO : refactorer ces 3 fonctions en une seule
export const createNextMainIteration = (
  previousIteration: CommitmentData,
  paymentTerms: PaymentTerms
): CommitmentData => {
  const {
    residueAmount,
    trancheId,
    id: previousIterationId,
    dueDate: previousDueDate,
    resolveDate
  } = previousIteration

  const nextIteration: CommitmentData = {
    priority: paymentTerms.residuePriority ?? 'credit',
    type: 'main',
    level: 'primary',
    status: 'active',
    principal: residueAmount,
    trancheId,
    previousIterationId,
    activeDate: resolveDate
  }

  if (nextIteration.priority !== 'credit') {
    nextIteration.dueDate = offsetDate(previousDueDate, paymentTerms.residuePeriod ?? 'year', 1)
  }

  return nextIteration
}

export const createNextTokenIteration = (
  previousIteration: TokenCommitmentData
): TokenCommitmentData => {
  const { residueNumberOfTokenUnits, referenceIndex, trancheId, id, resolveDate, level } =
    previousIteration

  const nextIteration: TokenCommitmentData = {
    trancheId: trancheId,
    previousIterationId: id,
    priority: 'token',
    type: 'token',
    level,
    numberOfTokens: residueNumberOfTokenUnits,
    referenceIndex,
    status: 'active',
    activeDate: resolveDate
  }

  if (residueNumberOfTokenUnits && referenceIndex)
    nextIteration.principal = residueNumberOfTokenUnits * referenceIndex

  return nextIteration
}

export const createNextInterestIteration = (
  paymentTerms: PaymentTerms,
  previousMainIteration: CommitmentData,
  previousInterestIteration: InterestCommitmentData
): InterestCommitmentData => {
  const { interestPeriod: period } = paymentTerms

  const { dueDate: principalDueDate, principal } = previousMainIteration

  const {
    trancheId,
    id,
    interestRate,
    dueDate: previousDueDate,
    resolveDate,
    priority,
    newInterest,
    carriedInterest
  } = previousInterestIteration

  const nextIteration: InterestCommitmentData = {
    trancheId: trancheId,
    previousIterationId: id,
    priority,
    type: 'interest',
    level: 'secondary',
    carriedInterest: (newInterest ?? 0) + (carriedInterest ?? 0),
    principal,
    interestRate,
    status: 'active',
    activeDate: resolveDate,
    interestStartDate: previousDueDate
  }

  if (period && previousDueDate && priority != 'credit') {
    if (period === 'sameAsPrimary') nextIteration.dueDate = principalDueDate
    else {
      const newDueDate = offsetDate(previousDueDate, period, 1)
      if (newDueDate) nextIteration.dueDate = newDueDate
    }
  }

  return nextIteration
}
