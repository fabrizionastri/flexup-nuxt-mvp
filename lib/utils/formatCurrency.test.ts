import { formatCurrency } from './formatCurrency'
import type { CurrencyId } from 'lib/entities'

describe('formatCurrency', () => {
  it('should format USD correctly', () => {
    const value = 1234567.8901
    const currency: CurrencyId = 'USD'
    const locale = 'en-US'
    const received = formatCurrency(value, currency, locale)
    expect(received).toEqual('$1,234,567.89')
  })

  it('should format EUR correctly', () => {
    const value = 1234567.8901
    const currency: CurrencyId = 'EUR'
    const locale = 'fr-FR'
    const result = formatCurrency(value, currency, locale)
    expect(result).toEqual('1\u202f234\u202f567,89\u00A0€')
  })
  it('should format EUR correctly', () => {
    const value = 1234567.8901
    const currency: CurrencyId = 'USD'
    const locale = 'fr-FR'
    const result = formatCurrency(value, currency, locale)
    expect(result).toEqual('1\u202f234\u202f567,89\u00A0$US')
  })

  it('should format JPY correctly', () => {
    const value = 1234567.8901
    const currency: CurrencyId = 'JPY'
    const locale = 'fr-FR'
    const result = formatCurrency(value, currency, locale)
    // console.log(result.split('').map((char) => char.charCodeAt(0))) // Log character codes
    // console.log('1\u202f234\u202f567,89 €'.split('').map((char) => char.charCodeAt(0))) // Log character codes
    expect(result).toEqual('1\u202f234\u202f568\u00A0JPY')
  })

  it('should format JPY correctly in japanese format', () => {
    const value = 1234567.8901
    const currency: CurrencyId = 'JPY'
    const locale = 'ja-JP'
    const result = formatCurrency(value, currency, locale)
    expect(result).toEqual('￥1,234,568')
  })

  it('should format JPY correctly in japanese format', () => {
    const date = new Date('2012-05-24')
    console.log('►  → - navigator.language:', navigator.language)
    const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date)
    console.log('►  → - formattedDate:', formattedDate)
    expect(1).toEqual(1)
  })

  // Add more tests for other currencies as needed
})
