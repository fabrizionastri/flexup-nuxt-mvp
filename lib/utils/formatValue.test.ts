import { formatValue } from './formatValue'
import type { CurrencyId } from 'lib/entities/currency'

describe('formatValue', () => {
  it('should return an empty string for null or undefined values', () => {
    expect(formatValue(null)).toEqual('')
    expect(formatValue(undefined)).toEqual('')
  })

  it('should format a Date correctly', () => {
    const testDate = new Date('2023-01-01')
    const locale = 'fr-FR'
    expect(formatValue(testDate, locale)).toEqual('01/01/2023')
  })

  it('should format a number as currency correctly', () => {
    const value = 1234.56
    const currency: CurrencyId = 'EUR'
    const locale = 'fr-FR'
    expect(formatValue(value, locale, currency)).toEqual('1\u202f234,56\u00A0€')
  })

  it('should return the value as is for non-Date, non-Number values', () => {
    expect(formatValue('test string')).toEqual('test string')
  })
})
