export const formatDate = (value: Date | string, locale: string = 'fr-FR'): string => {
  try {
    const date = value instanceof Date ? value : new Date(value)
    return new Intl.DateTimeFormat(locale).format(date)
  } catch (e) {
    // convert value to string and return it
    return String(value)

    // throw new Error(`Invalid date : ${value}`)
  }
}
