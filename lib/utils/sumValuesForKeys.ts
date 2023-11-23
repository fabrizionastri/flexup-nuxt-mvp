import { getNumberForKey } from './getNumberForKey'

export const sumValuesForKeys = (obj: any, keys: Array<string> = ['']): number => {
  return keys.reduce((sum, key) => sum + getNumberForKey(obj, key), 0)
}
