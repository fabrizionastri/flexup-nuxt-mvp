export const getMiddleDate = (
  startDate: Date | null = null,
  finishDate: Date | null = null
): Date | null => {
  if (!startDate) return finishDate ?? null
  if (!finishDate) return startDate
  const startNr = startDate.getTime ? startDate.getTime() : 0
  const finishNr = finishDate.getTime ? finishDate.getTime() : 0
  if (!startNr || !finishNr) return null
  const midNr = (startNr + finishNr) / 2
  return new Date(midNr)
}
