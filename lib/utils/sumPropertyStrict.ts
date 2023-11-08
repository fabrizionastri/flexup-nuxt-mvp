import { round6 } from '../../lib/utils'

export const sumPropertyStrict = <T>(
  property: keyof T & string,
  items: any,
  rejectZeroSum: boolean = false
): number | undefined => {
  if (items.length === 0) return undefined
  // if any item has no amountExclTax (ie: missing property, or value is null or undefined), then return undefined
  if (items.some((item: any) => item[property] === undefined || item[property] === null))
    return undefined

  const sum = round6(items.reduce((sum: number, item: any) => sum + item[property], 0))

  // if sum is 0 and rejectZeroSum is true, then return undefined
  if (sum === 0 && rejectZeroSum) return undefined
  return sum
}
