export const getDateForKey = (
  obj: any = {},
  key: string | symbol | number = '',
  errorValue: Date | null = null
): Date | null => {
  const keyValue = obj[key]
  const isDate =
    keyValue instanceof Date || (typeof keyValue === 'string' && !isNaN(Date.parse(keyValue)))

  return Object.hasOwn(obj, key) && isDate ? new Date(keyValue) : errorValue
}
