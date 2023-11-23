export const calculateDuration = (
  startDate: Date | null = null,
  dueDate: Date | null = null
): number | null => {
  if (!startDate || !dueDate) return null
  return Math.round((dueDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24))
}
