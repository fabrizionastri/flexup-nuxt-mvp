import { formatNumber } from './formatNumber'

describe('formatNumber', () => {
  it('should format a number correctly for a french locale', () => {
    const value = 1234.56
    const locale = 'fr-FR'
    expect(formatNumber(value, locale)).toEqual('1\u202f234,56')
  })
  it('should format a number correctly for a US locale', () => {
    const value = 1234.56
    const locale = 'en-US'
    expect(formatNumber(value, locale)).toEqual('1,234.56')
  })
})
