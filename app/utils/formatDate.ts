export const formatDate3 = (date: Date): string =>
  new Intl.DateTimeFormat(navigator.language).format(date)
