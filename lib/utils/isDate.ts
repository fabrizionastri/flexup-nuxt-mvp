export const isDate = (value: any) => {
  if (value instanceof Date) {
    return !isNaN(value.getTime()) // Check if the Date object is valid
  }
  if (typeof value === 'string') {
    const date = new Date(value)
    return !isNaN(date.getTime()) && date.toISOString().startsWith(value) // Additional check for string format
  }
  return false // Return false for other types
}
