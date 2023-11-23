import { getNumberForKey } from './getNumberForKey'

export const getTotalForKey = (arr: Array<any>, key: string): number => {
  return arr.reduce((sum, obj) => sum + getNumberForKey(obj, key), 0)
}
