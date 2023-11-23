export const formatDate2 = (date: Date): string =>
  new Intl.DateTimeFormat(navigator.language).format(date)
