import { getCutoffDate } from 'usecases/resolution'
import { Commitment } from 'entities/commitment'
import { MonthlyPriorities, AnnualPriorities } from 'entities/paymentTerms'

export class CommitmentAdapter {
  private _commitments: Commitment[]
  constructor() {
    this._commitments = []
  }
  feedWith(commitments: Commitment[]) {
    this._commitments = commitments
  }
  get(): Commitment[] {
    return this._commitments
  }
  getMonthlyCommitments(accountId: string, resolutionDate: Date): Commitment[] {
    const cutoffDate = getCutoffDate(resolutionDate)
    const commitments = this._commitments.filter((commitment) => {
      return (
        commitment.payorId === accountId &&
        commitment.dueDate &&
        commitment.dueDate <= cutoffDate &&
        commitment.priority &&
        MonthlyPriorities.includes(commitment.priority) &&
        commitment.status === 'active' &&
        commitment.activeDate &&
        commitment.activeDate <= resolutionDate
      )
    })
    return commitments
  }
  getAnnualCommitments(accountId: string, resolutionDate: Date): Commitment[] {
    const commitments = this._commitments.filter((commitment) => {
      return (
        commitment.payorId === accountId &&
        commitment.priority &&
        AnnualPriorities.includes(commitment.priority) &&
        commitment.status === 'active' &&
        commitment.activeDate &&
        commitment.activeDate <= resolutionDate
      )
    })
    return commitments
  }
}
