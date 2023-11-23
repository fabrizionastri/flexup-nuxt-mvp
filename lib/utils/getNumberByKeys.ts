import { getNumberForKey } from './getNumberForKey'

export const getNumberByKeys = (obj: any, keys: Array<string> = ['']): Record<string, number> => {
  const result: Record<string, number> = {}
  keys.forEach((key) => (result[key] = getNumberForKey(obj, key)))
  return result
}
