export const getNumberForKey = (
  obj: any = {},
  key: string | symbol | number = '',
  errorValue = 0
): number => {
  const keyValue = obj[key]
  const isNumber =
    typeof keyValue === 'number' || (typeof keyValue === 'string' && !isNaN(Number(keyValue)))
  return Object.hasOwn(obj, key) && isNumber ? Number(keyValue) : Number(errorValue)
}
