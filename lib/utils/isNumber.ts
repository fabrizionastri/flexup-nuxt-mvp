// check if a value is a number or a string that can be converted to a number
export const isNumber = (value: any) => {
  if (typeof value === 'number') {
    return true
  }
  if (typeof value === 'string') {
    const number = Number(value)
    return !isNaN(number) && String(number) === value
  }
  return false
}
