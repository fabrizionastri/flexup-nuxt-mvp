import { Priority } from 'entities/paymentTerms'

export type CommitmentLevel = 'primary' | 'secondary'

export type CommitmentNature = 'main' | 'interest' | 'token' | 'distribution'

export type CommitmentStatus =
  | 'pending' // (!due date || !principal)
  | 'active' // (due date && principal && !payableAmount)
  | 'resolved' // has been processed by resolution, payableAmount === 0
  | 'payable' // has been processed by resolution, payableAmount > 0
  | 'paid' // (payableAmount > 0 && amountPaid === payableAmount)
  | 'onHold'
  | 'cancelled'
  | 'converted'

export interface Commitment {
  id: string
  payorId?: string // TODO: check avec Frend
  payeeId?: string // payorId et payeeId sont obtenus via la tranche, donc pas besoin de les mettre ici
  trancheId?: string
  level: CommitmentLevel
  nature: CommitmentNature
  status: CommitmentStatus
  principal?: number
  priority?: Priority
  dueDate?: Date
  createDate?: Date
  activeDate?: Date // date when princial and due date are both set
  resolveDate?: Date // resolution date when it was processed
  previousIterationId?: string
  nextIterationId?: string
  //TODO: ask Fred how I can manipulate calculated fields ...???
  dueAmount?: number // different calculation for each nature
  outstandingAmount?: number // different calculation for each nature
  payableAmount?: number // assigned during the resolution process
  paidAmount?: number // sum of amount paid for a related all lettering
  residueAmount?: number // dueAmount - payableAmount1
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
  rate: number
  startDate?: Date
  //TODO: ask Fred how I can manipulate calculated fields ...???
  newInterest?: number // interest rate applied from startDate to dueDate
  carriedInterest?: number // residue of interest from previous iteration
  interestAmount?: number // carried interest + new interest
  interestBasis?: number // principal + interest
}
