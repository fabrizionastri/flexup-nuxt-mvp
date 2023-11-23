import { formatDate } from './formatDate'

describe('formatDate', () => {
  it('should format a date correctly for a given locale', () => {
    const testDate = new Date('2023-09-23')
    const locale = 'fr-FR'
    expect(formatDate(testDate, locale)).toEqual('23/09/2023')
  })
  it('should format a date correctly for a given locale', () => {
    const testDate = new Date('2023-09-23')
    const locale = 'en-US'
    expect(formatDate(testDate, locale)).toEqual('9/23/2023')
  })
  it('should format a date correctly for a given locale', () => {
    const testDate = new Date('2023-09-23')
    const locale = 'ja-JP'
    expect(formatDate(testDate, locale)).toEqual('2023/9/23')
  })
})
