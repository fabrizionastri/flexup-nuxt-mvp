import { getTotalForKey } from './getTotalForKey'

export const getTotalsByKeys = (
  arr: Array<any>,
  keys: Array<string> = ['']
): Record<string, number> => {
  const result: Record<string, number> = {}
  keys.forEach((key) => (result[key] = getTotalForKey(arr, key)))
  return result
}
