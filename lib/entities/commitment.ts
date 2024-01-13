import type { Priority } from 'entities/paymentTerms'
import type { Entity } from '.'

export type CommitmentLevel = 'primary' | 'secondary'

export type CommitmentType = 'principal' | 'interest' | 'token' | 'distribution'

export type CommitmentStatus =
  | 'pending' // (!due date || !principal)
  | 'active' // (due date && principal && !payableAmount)
  | 'resolved' // has been processed by resolution, payableAmount === 0
  | 'payable' // has been processed by resolution, payableAmount > 0
  | 'paid' // (payableAmount > 0 && amountPaid === payableAmount)
  | 'onHold'
  | 'cancelled'
  | 'converted'

export interface Commitment extends Entity {
  id: string
  payorId?: string // TODO: check avec Frend
  payeeId?: string // payorId et payeeId sont obtenus via la tranche, donc pas besoin de les mettre ici
  trancheId?: string
  priority: Priority
  level: CommitmentLevel
  type: CommitmentType
  status: CommitmentStatus
  principal?: number // different calculation for each type & level. May not be know at order confirmation, but should be know at latest at order delivery
  dueDate?: Date
  createDate?: Date
  activeDate?: Date // date when princial and due date are both set
  resolveDate?: Date // resolution date when it was processed
  previousIterationId?: string // not applicable for first Iteration
  nextIterationId?: string // added during a resolution if there is a residue, and a new iteration is created
  //TODO: how can I manipulate calculated fields ...???
  outstandingAmount?: number // different calculation for each type & level, not applicable for distributions
  dueAmount?: number // for buybacks: due = oustanding * requested %, for monthly: due = outstanding
  payableAmount?: number // assigned during the resolution process
  residueAmount?: number // dueAmount - payableAmount
  paidAmount?: number // sum of amount paid for a related all lettering
}

export interface Equity extends Commitment {
  buybackRequestedByProject?: number
  buybackRequestedByAssociate?: number
  buybackRequested(): number
}

// en fait c'est bon, il faut d'abord passer par Equity, puis Token
export interface Token extends Equity {
  referenceIndex: number
  numberOfTokenUnits?: number
  residueNumberOfTokenUnits?: number
  canProjectRequestBuyback?: boolean
  buybackPrice?: number
  currentIndex(): number
}

export interface Interest extends Commitment {
  interestRate: number
  interestStartDate?: Date
  //TODO: how can I manipulate calculated fields ...???
  newInterest?: number // interest rate applied from startDate to dueDate
  carriedInterest?: number // residue of interest from previous iteration
  interestAmount?: number // carried interest + new interest
  interestBasis?: number // principal + interest
}
