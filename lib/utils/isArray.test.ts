import { isArray } from './isArray'

describe('isArray', () => {
  it('should return true for arrays', () => {
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray(['a', 'b', 'c'])).toBe(true)
    expect(isArray([])).toBe(true)
  })

  it('should return false for non-arrays', () => {
    expect(isArray(123)).toBe(false)
    expect(isArray('abc')).toBe(false)
    expect(isArray({ plop: 'atchoum' })).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)
  })
})
