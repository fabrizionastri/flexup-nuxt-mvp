export const isSameDay = (d1: Date, d2: Date): boolean => {
  // print some debug info to check the year, month, and date for both dates
  // console.log('date 1:', d1.getFullYear(), d1.getMonth(), d1.getDate())
  // console.log('date 2:', d2.getFullYear(), d2.getMonth(), d2.getDate())
  // use the getUTCFullYear, getUTCMonth, and getUTCDate methods to compare the dates in UTC, otherwise the dates may not match if you create a date using "new Date()" and "new Date().toISOString()", because new Date() uses UTC.
  return (
    d1.getUTCFullYear() === d2.getUTCFullYear() &&
    d1.getUTCMonth() === d2.getUTCMonth() &&
    d1.getUTCDate() === d2.getUTCDate()
  )
}
