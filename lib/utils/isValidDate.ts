export const isValidDate = (date: unknown = null): boolean => {
  if (!(date instanceof Date)) return false
  return !isNaN(date.getTime())
}
