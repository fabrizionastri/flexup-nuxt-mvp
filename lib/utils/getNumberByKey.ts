import { getNumberForKey } from './getNumberForKey'

export const getNumberByKey = (obj: any, key = ''): any => {
  return { [key]: getNumberForKey(obj, key) }
}
