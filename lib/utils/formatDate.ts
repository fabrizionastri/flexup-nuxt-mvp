export const formatDate = (value: Date, locale: string = 'fr-FR') => {
  return new Intl.DateTimeFormat(locale).format(value)
}
