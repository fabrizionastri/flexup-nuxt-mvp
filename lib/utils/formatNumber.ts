export const formatNumber = (value: number, locale: string = 'fr-FR') => {
  return new Intl.NumberFormat(locale).format(value)
}
