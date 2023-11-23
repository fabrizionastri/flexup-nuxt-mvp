import { getTotalForKey } from './getTotalForKey'

export const getTotalAmountDue = (commitments: Array<any>): number => {
  return getTotalForKey(commitments, 'dueAmount')
}
