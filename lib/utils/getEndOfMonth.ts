export const getEndOfMonth = (date: Date | null = null): Date | null => {
  if (!date) return null
  const year = date.getFullYear()
  const month = date.getMonth()
  const endOfMonth = new Date(year, month + 1, 1, 0, 0, 0, 0)
  endOfMonth.setMilliseconds(endOfMonth.getMilliseconds() - 1)
  return endOfMonth
}
