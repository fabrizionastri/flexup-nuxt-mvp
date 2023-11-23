export const isValidNumber = (value: any = null): boolean => {
  if (!value && typeof value !== 'number') return false
  return !isNaN(Number(value))
}
