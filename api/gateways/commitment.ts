import type { CommitmentData } from 'entities/commitment'

export const commitmentGateway =
  (commitmentAdapter) =>
  (accountId: string, resolutionDate: Date, cycle: 'monthly' | 'annual'): CommitmentData[] => {
    if (!commitmentAdapter) throw new Error('CommitmentAdapter is not defined')
    if (cycle === 'monthly')
      return commitmentAdapter.getMonthlyCommitments(accountId, resolutionDate)
    if (cycle === 'annual') return commitmentAdapter.getAnnualCommitments(accountId, resolutionDate)
    throw new Error('Invalid cycle')
  }
