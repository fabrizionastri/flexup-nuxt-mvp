import type { CashPriority, PrimaryPriority, ExtendedPriority } from 'entities/paymentTerms'
// import type { Entity } from '.' // Fabrizio: I have removed to in order to make "id" optional, but this means we can no longer use the generic adapter methods

export type CommitmentLevel = 'primary' | 'secondary'
export type CommitmentType = 'main' | 'interest' | 'token' | 'distribution'

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
  payableAmount?: number // added during a resolution if there is an amount to pay
  residueAmount?: number // dueAmount - payableAmount
  outstandingAmount?: number
  dueAmount?: number
  paidAmount?: number
}

// TO CHECK: should I use method or static properties for calculated fields?

export interface CommitmentCalc extends CommitmentData {
  //TODO: how can I manipulate calculated fields ...???
  outstandingAmountCalc(): number // different calculation for each type & level, see below
  dueAmountCalc(): number // for buybacks: due = oustanding * requested %, for monthly: due = outstanding
  // residueAmount(): number // dueAmount - payableAmount
  paidAmountCalc(): number // sum of amount paid for a related all lettering
}
export interface MainCommitmentData extends CommitmentData {
  priority: PrimaryPriority
}

export interface EquityCommitmentData extends CommitmentData {
  priority: PrimaryPriority
  buybackRequestedByProject?: number
  buybackRequestedByAssociate?: number
}
export interface EquityCommitmentCalc extends CommitmentCalc, EquityCommitmentData {
  priority: PrimaryPriority
  buybackRequestedCalc(): number
}

// en fait c'est bon, il faut d'abord passer par Equity, puis Token
export interface TokenCommitmentData extends CommitmentData {
  priority: 'token'
  referenceIndex: number
  numberOfTokens?: number
  residueNumberOfTokenUnits?: number
  canProjectRequestBuyback?: boolean
  buybackPrice?: number
}
export interface TokenCommitment extends CommitmentCalc, TokenCommitmentData {
  priority: 'token'
  currentIndex(): number
}

export interface InterestCommitmentData extends CommitmentData {
  priority: CashPriority
  interestRate: number
  interestStartDate?: Date
  carriedInterest?: number // residue of interest from previous iteration
  newInterest?: number // interest rate applied from startDate to dueDate
  interestAmount?: number // carried interest + new interest
  interestBasis?: number // principal + interest
  relatedMainCommitmentId?: string
}

export interface InterestCommitmentCalc extends CommitmentCalc, InterestCommitmentData {
  priority: CashPriority
}

export interface DistributionCommitmentData extends CommitmentData {
  priority: 'distribution'
}
