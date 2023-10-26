import { CommitmentAdapter } from 'adapters/database/feedWith/commitmentAdapter'
import type { Commitment } from 'entities/commitment'

export const commitmentGateway =
  (commitmentAdapter: CommitmentAdapter) =>
  (accountId: string, resolutionDate: Date, cycle: 'monthly' | 'annual'): Commitment[] => {
    if (!commitmentAdapter) throw new Error('CommitmentAdapter is not defined')
    if (cycle === 'monthly')
      return commitmentAdapter.getMonthlyCommitments(accountId, resolutionDate)
    if (cycle === 'annual') return commitmentAdapter.getAnnualCommitments(accountId, resolutionDate)
    throw new Error('Invalid cycle')
  }
