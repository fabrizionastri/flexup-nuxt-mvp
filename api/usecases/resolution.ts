import { allocate } from 'usecases/allocate'
import type { Balances } from 'entities/balance'
import { sumSelectedBalances } from 'usecases/balance'
import { clone, getNumberForKey } from 'usecases/utils'
import type { ReserveName } from 'entities/reserve'
import type { AmountsRequested, ResolutionName, ResolutionStep } from 'entities/resolution'
import type { AllocationReport } from 'entities/allocation'

export const forOutflow = (
  availableCash = 0,
  amountsRequested: AmountsRequested = {},
  resolutionName: ResolutionName | '' = ''
): number => {
  const dueAmount = getNumberForKey(amountsRequested, resolutionName)
  return Math.max(Math.min(availableCash, dueAmount), 0)
}

export const forReserveTarget = (
  availableCash = 0,
  initialBalances: Balances = {},
  amountsRequested: AmountsRequested = {},
  resolutionName: ResolutionName | '' = '',
  destination: ReserveName | '' = ''
): number => {
  const reserveBalance = getNumberForKey(initialBalances, destination)
  const reserveTarget = getNumberForKey(amountsRequested, resolutionName)
  return Math.min(availableCash, reserveTarget - reserveBalance)
}

export const forSurplus = (
  initialBalances: Balances = {},
  source: ReserveName | '' = '',
  amountsRequested: AmountsRequested = {},
  resolutionName: ResolutionName | '' = ''
): number => {
  const reserveBalance = getNumberForKey(initialBalances, source)
  const reserveTarget = getNumberForKey(amountsRequested, resolutionName)
  return Math.max(0, reserveBalance - reserveTarget)
}

export const forTopup = (
  initialBalances: Balances = {},
  source: ReserveName | '' = '',
  amountsRequested: AmountsRequested = {},
  resolutionName: ResolutionName | '' = '',
  destination: ReserveName | '' = ''
): number => {
  const sourceBalance = getNumberForKey(initialBalances, source)
  const sourceTarget = getNumberForKey(amountsRequested, resolutionName)
  const sourceDelta = sourceBalance - sourceTarget

  const destinationBalance = getNumberForKey(initialBalances, destination)
  const destinationTarget = getNumberForKey(amountsRequested, destination)
  const destinationDelta = destinationBalance - destinationTarget

  if (sourceDelta > 0 && destinationDelta < 0) {
    return Math.min(sourceDelta, Math.abs(destinationDelta))
  }
  return 0
}

export const forDistribution = (
  initialBalances: Balances = {},
  source: ReserveName | '' = ''
): number => {
  return getNumberForKey(initialBalances, source)
}

export const runResolutionSteps = (
  initialBalances: Balances,
  amountsRequested: AmountsRequested,
  resolutionSteps: ResolutionStep[]
): AllocationReport[] => {
  let intermediateBalances = clone(initialBalances)

  const resolutionsReport: AllocationReport[] = []
  let allocationReport: AllocationReport

  resolutionSteps.forEach(({ nature, resolutionName, sources, destination }) => {
    const availableCash = sumSelectedBalances(intermediateBalances, sources)
    let allocationRequested = 0

    if ('outflow' === nature)
      allocationRequested = forOutflow(availableCash, amountsRequested, resolutionName)

    if ('reserveTarget' === nature)
      allocationRequested = forReserveTarget(
        availableCash,
        intermediateBalances,
        amountsRequested,
        resolutionName,
        destination
      )

    if ('topup' === nature)
      allocationRequested = forTopup(
        intermediateBalances,
        sources[0],
        amountsRequested,
        resolutionName,
        destination
      )

    if ('surplus' === nature)
      allocationRequested = forSurplus(
        intermediateBalances,
        sources[0],
        amountsRequested,
        resolutionName
      )

    if ('distribution' === nature)
      allocationRequested = forDistribution(intermediateBalances, sources[0])

    if (allocationRequested !== 0) {
      allocationReport = allocate(allocationRequested, intermediateBalances, sources, destination)
      resolutionsReport.push(allocationReport)
      intermediateBalances = clone(allocationReport.newBalances)
    }
  })
  return resolutionsReport
}

export const getCutoffDate = (resolutionDate: Date, tippingDate = 15): Date => {
  if (tippingDate < 0 || tippingDate > 28) tippingDate = 15
  const cutoffDate = new Date(resolutionDate)
  if (resolutionDate.getDate() <= tippingDate) {
    cutoffDate.setMonth(cutoffDate.getMonth() + 1)
    cutoffDate.setDate(0) // Set date to the last day of the current month
  } else {
    cutoffDate.setMonth(cutoffDate.getMonth() + 2)
    cutoffDate.setDate(0) // Set date to the last day of the next month
  }
  return cutoffDate
}

export const resolutionGeneric =
  (steps: ResolutionStep[]) =>
  (initialBalances: Balances, amountsRequested: AmountsRequested): AllocationReport[] => {
    return runResolutionSteps(initialBalances, amountsRequested, steps)
  }
