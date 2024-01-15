import type { CashPriority, Priority } from 'entities/paymentTerms'
// import type { Entity } from '.' // Fabrizio: I have removed to in order to make "id" optional, but this means we can no longer use the generic adapter methods

export type CommitmentLevel = 'primary' | 'secondary'

export type CommitmentType = 'principal' | 'interest' | 'token' | 'distribution'
export type ExtendedPriority = Priority | 'distribution'

export type CommitmentStatus =
  | 'pending' // (!due date || !principal)
  | 'active' // (due date && principal && !payableAmount)
  | 'resolved' // has been processed by resolution, payableAmount === 0
  | 'payable' // has been processed by resolution, payableAmount > 0
  | 'paid' // (payableAmount > 0 && amountPaid === payableAmount)
  | 'onHold'
  | 'cancelled'
  | 'converted'

export interface CommitmentData {
  id?: string // required in the database, but not in the core business logic
  payorId?: string // TODO: check avec Frend
  payeeId?: string // payorId et payeeId sont obtenus via la tranche, donc pas besoin de les mettre ici
  trancheId?: string
  priority: ExtendedPriority
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
}

export interface PrimaryData {
  priority: Priority
}

export interface Commitment extends CommitmentData {
  //TODO: how can I manipulate calculated fields ...???
  outstandingAmount(): number // different calculation for each type & level, see below
  dueAmount(): number // for buybacks: due = oustanding * requested %, for monthly: due = outstanding
  payableAmount(): number // assigned during the resolution process
  residueAmount(): number // dueAmount - payableAmount
  paidAmount(): number // sum of amount paid for a related all lettering
}

export interface EquityData extends CommitmentData {
  priority: Priority
  buybackRequestedByProject?: number
  buybackRequestedByAssociate?: number
}
export interface Equity extends Commitment, EquityData {
  priority: Priority
  buybackRequested(): number
}

// en fait c'est bon, il faut d'abord passer par Equity, puis Token
export interface TokenData extends CommitmentData {
  priority: 'token'
  referenceIndex: number
  numberOfTokenUnits?: number
  residueNumberOfTokenUnits?: number
  canProjectRequestBuyback?: boolean
  buybackPrice?: number
}
export interface Token extends Commitment, TokenData {
  priority: 'token'
  level: 'secondary'
  currentIndex(): number
}

export interface InterestData extends CommitmentData {
  priority: CashPriority
  interestRate: number
  interestStartDate?: Date
  carriedInterest?: number // residue of interest from previous iteration
  newInterest?: number // interest rate applied from startDate to dueDate
}

export interface Interest extends Commitment, InterestData {
  priority: CashPriority
  interestAmount?: number // carried interest + new interest
  interestBasis?: number // principal + interest
}

export interface Distribution extends CommitmentData {
  priority: 'distribution'
  distributionAmount: number
}
