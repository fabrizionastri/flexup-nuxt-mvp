import { sumSelectedBalances } from 'usecases/balance'
import { clone, getNumberForKey } from 'usecases/utils'
import type { Allocation, AllocationReport } from 'entities/allocation'
import type { ReserveName } from 'entities/reserve'
import type { Balances } from 'entities/balance'

/* Allocate will return a newReserveBalance for every reserve mentionned in either initialReserveBalance, in sources, or in destination */
export function allocate(
  allocationRequested = 0 as number,
  initialBalances: Balances = {},
  sources: ReserveName[] = [],
  destination: ReserveName | '' = ''
): AllocationReport {
  const newBalances = clone(initialBalances)
  const allocationReport: AllocationReport = {
    newBalances
    //   allocations,
  }
  //  as AllocationReport

  if (
    !Object.keys(initialBalances).length ||
    !sources.length ||
    !allocationRequested ||
    !destination
  ) {
    return allocationReport
  }

  // if allocationRequested is negative, we swap the destination and the first source
  if (allocationRequested < 0) {
    const temp = destination
    destination = sources[0]
    sources = [temp]
    allocationRequested = -allocationRequested
  }

  // if destination is not already in initial Balances, add it with value 0
  if (!newBalances[destination]) newBalances[destination] = 0

  // if any source is not already in initial Balances, add it with value 0
  sources.forEach((source) => {
    if (newBalances[source] == undefined) newBalances[source] = 0
  })

  const allocations: Allocation[] = []
  const availableCash = sumSelectedBalances(newBalances, sources)

  let amountRemaining = Math.min(allocationRequested, availableCash)
  let allocationRealised = 0

  for (const source of sources) {
    if (amountRemaining <= 0) break
    const sourceBalance = getNumberForKey(newBalances, source)
    if (!sourceBalance || sourceBalance <= 0) continue
    const destinationBalance = getNumberForKey(newBalances, destination)
    const allocation = Math.min(amountRemaining, sourceBalance)
    // if (allocation > 0) {
    allocations.push({
      source: source,
      destination: destination,
      allocation
    })
    amountRemaining -= allocation
    allocationRealised += allocation
    newBalances[source] = sourceBalance - allocation
    newBalances[destination] = destinationBalance + allocation
  }
  allocationReport.allocations = allocations
  allocationReport.availableCash = availableCash
  allocationReport.allocationRealised = allocationRealised
  return allocationReport
}
