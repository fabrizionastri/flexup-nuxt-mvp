import { isObject } from './isObject'

describe('isObject', () => {
  it('should return true for objects', () => {
    expect(isObject({})).toBe(true)
    expect(isObject({ a: 1, b: 2 })).toBe(true)
  })

  it('should return false for arrays', () => {
    expect(isObject([1, 2, 3])).toBe(false)
  })

  it('should return false for null', () => {
    expect(isObject(null)).toBe(false)
  })

  it('should return false for non-objects', () => {
    expect(isObject(123)).toBe(false)
    expect(isObject('abc')).toBe(false)
    expect(isObject(true)).toBe(false)
    expect(isObject(undefined)).toBe(false)
  })
})
