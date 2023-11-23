export const dateOnly = (dateTime: Date): Date => {
  return new Date(dateTime.toISOString().split('T')[0])
}
