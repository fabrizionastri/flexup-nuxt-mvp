import { getCutoffDate } from 'usecases/resolution'
import type { Commitment } from 'entities/commitment'
import { monthlyPriorities, annualPriorities } from 'entities/paymentTerms'

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
        monthlyPriorities.includes(commitment.priority) &&
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
        annualPriorities.includes(commitment.priority) &&
        commitment.status === 'active' &&
        commitment.activeDate &&
        commitment.activeDate <= resolutionDate
      )
    })
    return commitments
  }
}
