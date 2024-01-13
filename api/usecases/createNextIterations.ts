import type { Commitment, Interest, Token } from 'entities/commitment'
import type { InterestPaymentTerms, ResiduePaymentTerms } from 'entities/paymentTerms'
import { offsetDate } from 'usecases/createFirstIterations'

// TODO : refactorer ces 3 fonctions en une seule
export const createNextMainIteration = (
  previousIteration: Partial<Commitment>,
  residuePaymentTerms: ResiduePaymentTerms
): Partial<Commitment> => {
  const { residuePriority: newPriority, residuePeriod: period } = residuePaymentTerms
  const {
    residueAmount,
    trancheId,
    id: previousIterationId,
    dueDate: previousDueDate,
    resolveDate
  } = previousIteration

  const nextIteration: Partial<Commitment> = {
    priority: newPriority,
    nature: 'main',
    level: 'primary',
    status: 'active',
    principal: residueAmount,
    trancheId: trancheId,
    previousIterationId,
    activeDate: resolveDate
  }

  const newDueDate = offsetDate(previousDueDate, period, 1)
  if (newDueDate && newPriority != 'credit') nextIteration.dueDate = newDueDate

  return nextIteration
}

export const createNextTokenIteration = (previousIteration: Partial<Token>): Partial<Token> => {
  const { residueNumberOfTokenUnits, referenceIndex, trancheId, id, resolveDate, level } =
    previousIteration

  const nextIteration: Partial<Token> = {
    trancheId: trancheId,
    previousIterationId: id,
    priority: 'token',
    nature: 'token',
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
  paymentTermsInterest: Partial<InterestPaymentTerms>,
  previousMainIteration: Partial<Commitment>,
  previousInterestIteration: Partial<Interest>
): Partial<Interest> => {
  const { interestPeriod: period } = paymentTermsInterest

  const { dueDate: mainDueDate, principal } = previousMainIteration

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
    nature: 'interest',
    level: 'secondary',
    carriedInterest: (newInterest ?? 0) + (carriedInterest ?? 0),
    principal,
    interestRate,
    status: 'active',
    activeDate: resolveDate,
    startDate: previousDueDate
  }

  if (period && previousDueDate && priority != 'credit') {
    if (period === 'sameAsMain') nextIteration.dueDate = mainDueDate
    else {
      const newDueDate = offsetDate(previousDueDate, period, 1)
      if (newDueDate) nextIteration.dueDate = newDueDate
    }
  }

  return {
    previousIterationId: 'commitment2',
    trancheId: 'tranche1',
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
