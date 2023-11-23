import { isDate } from './isDate'

describe('isDate', () => {
  it('should return true for valid Date objects', () => {
    const date = new Date()
    expect(isDate(date)).toBe(true)
  })

  it('should return false for invalid Date objects', () => {
    const date = new Date('invalid date')
    expect(isDate(date)).toBe(false)
  })

  it('should return true for valid date strings', () => {
    const date = '2022-01-01T00:00:00.000Z'
    expect(isDate(date)).toBe(true)
  })

  it('should return false for invalid date strings', () => {
    const date = 'invalid date'
    expect(isDate(date)).toBe(false)
  })

  it('should return false for other types', () => {
    expect(isDate(123)).toBe(false)
    expect(isDate({})).toBe(false)
    expect(isDate([])).toBe(false)
    expect(isDate(null)).toBe(false)
    expect(isDate(undefined)).toBe(false)
  })
})
