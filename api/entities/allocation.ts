import { Balances } from 'entities/balance'
import { ReserveName } from 'entities/reserve'

export interface Allocation {
  source: ReserveName
  destination: ReserveName
  allocation: number
}

export interface AllocationInstance extends Allocation {
  accountId: string
  referenceDate: Date
}

/* If there has been any errors in the arguments provided to the function that generates the Allocation Report, the resulting element of the Allocation Report is not inserted. No error message is thrown */
export type AllocationReport = {
  availableCash?: number
  // allocationRequested: number,
  allocationRealised?: number
  // allocationRatio: number,
  // allocationResidue: number,
  newBalances: Balances
  allocations?: Allocation[]
}
