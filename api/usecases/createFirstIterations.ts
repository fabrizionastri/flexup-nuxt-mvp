import type {
  Period,
  PaymentTerms,
  InterestPeriod,
  SecondaryPriority,
  MainAdjustment
} from 'entities/paymentTerms'
import { periodLengths, primaryPriorities } from 'entities/paymentTerms'
import type {
  CommitmentData,
  TokenCommitmentData,
  InterestCommitmentData,
  CommitmentLevel
} from 'entities/commitment'
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

export const adjustDate = (
  date: Date,
  adjustment: MainAdjustment = 'none',
  period: 'day' | 'month' | 'quarter' | 'year' = 'month'
): Date => {
  const adjustedDate = new Date(date)

  if ('EOP' === adjustment) {
    adjustedDate.setUTCHours(23, 59, 59, 999)
    if ('month' === period) {
      adjustedDate.setUTCMonth(adjustedDate.getUTCMonth() + 1)
      adjustedDate.setUTCDate(0)
    } else if ('quarter' === period) {
      adjustedDate.setUTCMonth(Math.floor(adjustedDate.getUTCMonth() / 3) * 3 + 3)
      adjustedDate.setUTCDate(0)
    } else if ('year' === period) {
      adjustedDate.setUTCFullYear(adjustedDate.getUTCFullYear() + 1)
      adjustedDate.setUTCMonth(0)
      adjustedDate.setUTCDate(0)
    }
  } else if ('BOP' === adjustment) {
    adjustedDate.setUTCHours(0, 0, 0, 0)
    if ('month' === period) {
      adjustedDate.setUTCDate(1)
    } else if ('quarter' === period) {
      adjustedDate.setUTCMonth(Math.floor(adjustedDate.getUTCMonth() / 3) * 3)
      adjustedDate.setUTCDate(1)
    } else if ('year' === period) {
      adjustedDate.setUTCMonth(0)
      adjustedDate.setUTCDate(1)
    }
  }

  return adjustedDate
}

export const calculateDueDate = (
  startDate?: Date,
  adjustment: MainAdjustment = 'none',
  period: Period = 'month',
  offset = 1
): Date | undefined => {
  if (!isValidDate(startDate)) return undefined

  let dueDate = startDate

  if (offset) {
    dueDate = offsetDate(dueDate, period, offset) ?? dueDate
  }

  dueDate = adjustDate(dueDate, adjustment, period)

  return dueDate
}

export const firstMainDueDate = (
  confirmationDate: Date | undefined = undefined,
  paymentTerms: PaymentTerms
): Date | undefined => {
  if (!confirmationDate) return undefined
  const { mainAdjustment, mainPeriod, mainOffset } = paymentTerms
  return calculateDueDate(confirmationDate, mainAdjustment, mainPeriod, mainOffset)
}

export const createFirstMainIteration = (
  paymentTerms: PaymentTerms,
  principal = 0,
  orderDates: { [key: string]: Date | string | undefined } = {}
): CommitmentData => {
  const priority = paymentTerms.primaryPriority
  const commitment: CommitmentData = {
    priority,
    type: 'main',
    status: 'pending',
    level: 'primary'
  }

  const mainStartDate = getDateForKey(orderDates, paymentTerms.mainStart)
  if (mainStartDate && priority !== 'credit') {
    commitment.dueDate = firstMainDueDate(mainStartDate, paymentTerms)
  }

  if (principal !== 0) {
    commitment.principal = principal
    if (priority === 'credit' || commitment.dueDate) {
      commitment.status = 'active'
      commitment.activeDate = today()
    }
  }
  return commitment
}

export const calculateInterestDueDate = (
  interestStartDate: Date | undefined,
  interestPeriod: InterestPeriod = 'sameAsPrimary',
  interestPriority: SecondaryPriority = 'sameAsPrimary',
  principalDueDate?: Date
): Date | undefined => {
  if (interestPriority === 'credit' || !interestStartDate) {
    return undefined // No due date if interestPriority is credit or start date is undefined
  }

  if (interestPeriod === 'sameAsPrimary') {
    return isValidDate(principalDueDate) ? principalDueDate : undefined
  } else {
    let interestDueDate = calculateDueDate(interestStartDate, 'none', interestPeriod, 1)
    const isInterestDueAfterMain = calculateDuration(interestDueDate, principalDueDate) < 0
    if (isInterestDueAfterMain) interestDueDate = principalDueDate
    return interestDueDate
  }
}

export const createFirstInterestIteration = (
  paymentTerms: PaymentTerms,
  principal = 0,
  orderDates: { [key: string]: Date | string | undefined } = {},
  principalDueDate?: Date
): InterestCommitmentData => {
  const {
    primaryPriority: priority,
    interestRate,
    interestStart: interestStart = 'deliveryFinish',
    interestPeriod = 'sameAsPrimary'
  } = paymentTerms

  // this check is redundant with the one in createFirstIterations, but it helps to filter out the allowed values for interestStart in the following if statements
  if (!interestRate)
    throw new Error('Cannot create a first interest iteration without an interest rate ')
  if (interestStart == 'deferral')
    throw new Error('Cannot create a first interest iteration if interestStart is deferral')

  let { interestPriority = priority } = paymentTerms
  if (interestPriority === 'sameAsPrimary') interestPriority = priority
  if (interestPriority == 'token')
    throw new Error('Cannot create an interest commitment with token priority')

  const interestStartDate = getDateForKey(orderDates, interestStart)
  console.log('api/usecases/createFirstIterations.ts → interestStartDate: ', interestStartDate)
  console.log('api/usecases/createFirstIterations.ts → interestPeriod: ', interestPeriod)
  console.log('api/usecases/createFirstIterations.ts → interestPriority: ', interestPriority)
  console.log('api/usecases/createFirstIterations.ts → principalDueDate: ', principalDueDate)

  const interestDueDate = calculateInterestDueDate(
    interestStartDate,
    interestPeriod,
    interestPriority,
    principalDueDate
  )
  console.log('api/usecases/createFirstIterations.ts → interestDueDate: ', interestDueDate)

  const interest: InterestCommitmentData = {
    interestRate,
    priority: interestPriority,
    type: 'interest',
    level: 'secondary',
    status: 'pending' // changed to active below, if conditions met
  }

  // Conditionally adding properties if they are defined
  if (interestStartDate) interest.interestStartDate = interestStartDate
  if (interestDueDate) interest.dueDate = interestDueDate
  if (principal !== 0) interest.principal = principal
  if (interestStartDate && (interestPriority === 'credit' || interestDueDate)) {
    interest.status = 'active'
    interest.activeDate = today()
  }

  // if both start and due dates are defined, we can calculate the new interest amount at the due date
  if (interestStartDate && interestDueDate && principal) {
    const duration = calculateDuration(interestStartDate, interestDueDate)
    const interestFactor = (1 + interestRate) ** (duration / periodLengths['year']) - 1
    interest.newInterest = principal * interestFactor
  }

  return interest
}

export const createFirstTokenIteration = (
  referenceIndex: number = 0,
  principal: number = 0,
  level: CommitmentLevel,
  canProjectRequestBuyback: boolean = false
): TokenCommitmentData => {
  if (!referenceIndex) throw Error('Cannot create a token without a positive referenceIndex')

  const token: TokenCommitmentData = {
    priority: 'token',
    type: 'token',
    status: 'pending',
    level,
    referenceIndex: referenceIndex
  }
  // console.log('principal', principal)
  // console.log('referenceIndex', referenceIndex)

  if (canProjectRequestBuyback) token.canProjectRequestBuyback = true

  if (principal) {
    token.principal = principal
    token.numberOfTokens = token.principal / referenceIndex
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
): CommitmentData[] => {
  const commitments: CommitmentData[] = []
  const priority = paymentTerms?.primaryPriority

  if (!priority || !primaryPriorities.includes(priority))
    throw new Error('Cannot create a primary commitment without a valid principal priority')

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
    const principalIteration = createFirstMainIteration(paymentTerms, principal, orderDates)
    commitments.push(principalIteration)

    if (riskFactor > 0 && riskFactor < 1) {
      const secondaryToken = createFirstTokenIteration(
        referenceIndex,
        principal * riskFactor,
        'secondary',
        paymentTerms.canProjectRequestBuyback
      )
      commitments.push(secondaryToken)
    }

    if (paymentTerms.interestRate && paymentTerms.interestStart !== 'deferral') {
      const interest = createFirstInterestIteration(
        paymentTerms,
        principal,
        orderDates,
        principalIteration.dueDate
      )
      commitments.push(interest)
    }
  }
  return commitments
}
