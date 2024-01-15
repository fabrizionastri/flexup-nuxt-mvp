import type { CommitmentData, Interest, TokenData } from 'entities/commitment'
import type { PaymentTerms } from 'entities/paymentTerms'
import { offsetDate } from 'usecases/createFirstIterations'

// TODO : refactorer ces 3 fonctions en une seule
export const createNextPrincipalIteration = (
  previousIteration: Partial<CommitmentData>,
  paymentTerms: Partial<PaymentTerms>
): Partial<CommitmentData> => {
  const { residuePriority, residuePeriod } = paymentTerms

  const {
    residueAmount,
    trancheId,
    id: previousIterationId,
    dueDate: previousDueDate,
    resolveDate
  } = previousIteration

  const nextIteration: Partial<CommitmentData> = {
    priority: residuePriority ? residuePriority : 'credit',
    type: 'principal',
    level: 'primary',
    status: 'active',
    principal: residueAmount,
    trancheId: trancheId,
    previousIterationId,
    activeDate: resolveDate
  }

  const newDueDate = offsetDate(previousDueDate, residuePeriod, 1)
  if (newDueDate && residuePriority != 'credit') nextIteration.dueDate = newDueDate

  return nextIteration
}

export const createNextTokenIteration = (
  previousIteration: Partial<TokenData>
): Partial<TokenData> => {
  const { residueNumberOfTokenUnits, referenceIndex, trancheId, id, resolveDate, level } =
    previousIteration

  const nextIteration: Partial<TokenData> = {
    trancheId: trancheId,
    previousIterationId: id,
    priority: 'token',
    type: 'token',
    level,
    numberOfTokenUnits: residueNumberOfTokenUnits,
    referenceIndex,
    status: 'active',
    activeDate: resolveDate
  }

  if (residueNumberOfTokenUnits && referenceIndex)
    nextIteration.principal = residueNumberOfTokenUnits * referenceIndex

  return nextIteration
}

export const createNextInterestIteration = (
  paymentTerms: Partial<PaymentTerms>,
  previousPrincipalIteration: Partial<CommitmentData>,
  previousInterestIteration: Partial<Interest>
): Partial<Interest> => {
  const { interestPeriod: period } = paymentTerms

  const { dueDate: principalDueDate, principal } = previousPrincipalIteration

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

  const nextIteration: Partial<Interest> = {
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
    if (period === 'sameAsPrincipal') nextIteration.dueDate = principalDueDate
    else {
      const newDueDate = offsetDate(previousDueDate, period, 1)
      if (newDueDate) nextIteration.dueDate = newDueDate
    }
  }

  return {
    previousIterationId: 'commitment2',
    trancheId: 'tranche1',
    priority: 'flex',
    type: 'interest',
    level: 'secondary',
    carriedInterest: 5,
    principal: 100,
    interestRate: 0.05,
    interestStartDate: new Date('2020-05-05'),
    dueDate: new Date('2021-05-05')
  }
}
