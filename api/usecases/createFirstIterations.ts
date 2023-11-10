import type {
  Period,
  PaymentTerms,
  MainPaymentTerms,
  InterestPaymentTerms,
  Priority
} from 'entities/paymentTerms'
import type { Commitment, Token, Interest, CommitmentLevel } from 'entities/commitment'
import { calculateDuration, getDateForKey, isValidDate, today } from 'lib/utils'

export const offsetDate = (
  initialDate: Date | '' = '',
  period: Period | '' = '',
  offset = 0
): Date | null => {
  if (!initialDate) return null
  // if there is no offset, or if its not a number, return the initial date
  if (!offset) return initialDate

  const newDate = new Date(initialDate)

  if ('day' === period) newDate.setUTCDate(newDate.getUTCDate() + offset)
  if ('month' === period) newDate.setUTCMonth(newDate.getUTCMonth() + offset)
  if ('quarter' === period) newDate.setUTCMonth(newDate.getUTCMonth() + 3 * offset)
  if ('year' === period) newDate.setUTCFullYear(newDate.getUTCFullYear() + offset)
  return newDate
}

export const calculateDueDate = (
  start: Date | undefined,
  adjustment: 'BOP' | 'EOP' | 'none' = 'EOP',
  period: 'day' | 'month' | 'quarter' | 'year' = 'month',
  offset = 1
): Date | undefined => {
  if (!start || !isValidDate(start)) return undefined
  let dueDate = start

  if (offset) dueDate = offsetDate(dueDate, period, offset) ?? dueDate

  if ('EOP' === adjustment) {
    dueDate.setUTCHours(23, 59, 59, 999)
    if ('month' === period) {
      dueDate.setUTCMonth(dueDate.getUTCMonth() + 1)
      dueDate.setUTCDate(0)
    } else if ('quarter' === period) {
      dueDate.setUTCMonth(Math.floor(dueDate.getUTCMonth() / 3) * 3 + 3)
      dueDate.setUTCDate(0)
    } else if ('year' === period) {
      dueDate.setUTCFullYear(dueDate.getUTCFullYear() + 1)
      dueDate.setUTCMonth(0)
      dueDate.setUTCDate(0)
    }
  } else if ('BOP' === adjustment) {
    dueDate.setUTCHours(0, 0, 0, 0)
    if ('month' === period) {
      dueDate.setUTCDate(1)
    } else if ('quarter' === period) {
      dueDate.setUTCMonth(Math.floor(dueDate.getUTCMonth() / 3) * 3)
      dueDate.setUTCDate(1)
    } else if ('year' === period) {
      dueDate.setUTCMonth(0)
      dueDate.setUTCDate(1)
    }
  }

  return dueDate
}

export const firstMainDueDate = (
  confirmationDate: Date | undefined = undefined,
  mainPaymentTerms: MainPaymentTerms
): Date | undefined => {
  if (!confirmationDate) return undefined
  const { adjustment, period, offset } = mainPaymentTerms
  return calculateDueDate(confirmationDate, adjustment, period, offset)
}

export const createFirstMainIteration = (
  mainPaymentTerms: MainPaymentTerms,
  principal = 0,
  orderDates: { [key: string]: Date | string | undefined } = {}
): Partial<Commitment> => {
  const priority = mainPaymentTerms.priority
  const commitment: Partial<Commitment> = {
    priority,
    nature: 'main',
    status: 'pending',
    level: 'primary'
  }

  const startDate = getDateForKey(orderDates, mainPaymentTerms.start)
  if (startDate) commitment.dueDate = firstMainDueDate(startDate, mainPaymentTerms)

  if (principal !== 0) {
    commitment.principal = principal
    if (priority === 'credit' || commitment.dueDate) {
      commitment.status = 'active'
      commitment.activeDate = today()
    }
  }
  return commitment
}

export const createFirstInterestIteration = (
  interestPaymentTerms: InterestPaymentTerms,
  principal = 0,
  orderDates: { [key: string]: Date | string | undefined } = {},
  mainPriority?: Priority, // ici volontairement je ne vérifie pas si cet argument est valide, car il est censé être fourni par la fonction appelante
  principalDueDate?: Date | undefined
): Partial<Interest> => {
  const { rate, priority, start, period } = interestPaymentTerms

  const interest: Partial<Interest> = {
    priority: 'sameAsMain' === priority ? mainPriority : priority,
    rate,
    nature: 'interest',
    status: 'pending',
    level: 'secondary'
  }

  const startDate = getDateForKey(orderDates, start)

  if (startDate) {
    interest.startDate = startDate
    if ('sameAsMain' === period) {
      if (isValidDate(principalDueDate)) interest.dueDate = principalDueDate
      // if principal Due Date is not valid, we will assign the Interest due date later
    } else {
      interest.dueDate = calculateDueDate(startDate, 'none', period, 1)
      const duration = calculateDuration(interest.dueDate, principalDueDate) ?? 0
      // if principal due date is before the calculated interest due date, we assign the principal due date to the interest due date
      if (duration < 0) interest.dueDate = principalDueDate
    }
  }

  if (principal !== 0) {
    interest.principal = principal
    if (interest.startDate && (priority === 'credit' || interest.dueDate)) {
      interest.status = 'active'
      interest.activeDate = today()
    }
  }
  return interest
}

export const createFirstTokenIteration = (
  referenceIndex = 0,
  principal = 0,
  level: CommitmentLevel,
  canProjectRequestBuyback = false
): Partial<Token> => {
  if (!(Number(referenceIndex) > 0))
    throw Error('Cannot create a token without a positive referenceIndex')

  const token: Partial<Token> = {
    priority: 'token',
    nature: 'token',
    status: 'pending',
    level,
    referenceIndex: referenceIndex
  }
  // console.log('principal', principal)
  // console.log('referenceIndex', referenceIndex)

  if (canProjectRequestBuyback) token.canProjectRequestBuyback = true

  if (Number(principal) > 0 && referenceIndex) {
    token.principal = Number(principal)
    token.numberOfTokenUnits = token.principal / referenceIndex
    token.status = 'active'
    token.activeDate = today()
  }
  return token
}

export const createFirstIterations = (
  paymentTerms: PaymentTerms,
  principal = 0,
  orderDates: { [key: string]: Date | string | undefined } = {},
  referenceIndex = 0,
  riskFactor = 0
): Partial<Commitment>[] => {
  const commitments: Partial<Commitment>[] = []
  const priority = paymentTerms?.main?.priority

  // if (!priority || !Priorities.includes(priority))
  //   throw new Error("Cannot create a primary commitment without a valid principal priority")

  if (priority === 'token') {
    // if (!isValidNumber(referenceIndex)) {
    //   throw new Error("Cannot create a token without a valid referenceIndex")
    // }

    const primaryToken = createFirstTokenIteration(
      referenceIndex,
      principal,
      'primary',
      paymentTerms.canProjectRequestBuyback
    )
    commitments.push(primaryToken)
  } else {
    const main = createFirstMainIteration(paymentTerms.main, principal, orderDates)
    commitments.push(main)

    if (riskFactor < 1 && riskFactor > 0) {
      const secondaryToken = createFirstTokenIteration(
        referenceIndex,
        principal * riskFactor,
        'secondary',
        paymentTerms.canProjectRequestBuyback
      )
      commitments.push(secondaryToken)
    }

    if (paymentTerms?.interest) {
      const interest = createFirstInterestIteration(
        paymentTerms.interest,
        principal,
        orderDates,
        main.priority,
        main.dueDate
      )
      commitments.push(interest)
    }
  }
  return commitments
}
