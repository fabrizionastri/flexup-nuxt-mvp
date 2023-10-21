import { convertDatesToStrings } from './convertDatesToStrings'

describe('convertDatesToStrings', () => {
  it('should convert dates to ISO strings', () => {
    const result = convertDatesToStrings(new Date('2022-01-01T00:00:00.000Z'))
    const expected = '2022-01-01T00:00:00.000Z'
    expect(result).toEqual(expected)
  })
  it('should convert new dates to ISO strings', () => {
    const result = convertDatesToStrings(new Date())
    const expected = new Date().toISOString()
    expect(result).toEqual(expected)
  })
  it('should not modify numbers', () => {
    expect(convertDatesToStrings(123)).toEqual(123)
  })
  it('should not modify strings', () => {
    expect(convertDatesToStrings('hello')).toEqual('hello')
  })
  it('should convert nested dates in objects', () => {
    const obj = {
      date: new Date('2022-01-01T00:00:00.000Z'),
      nested: {
        date: new Date('2022-02-02T00:00:00.000Z'),
        array: [
          {
            date: new Date('2022-01-03T00:00:00.000Z')
          }
        ]
      }
    }
    const expected = {
      date: '2022-01-01T00:00:00.000Z',
      nested: {
        date: '2022-02-02T00:00:00.000Z',
        array: [
          {
            date: '2022-01-03T00:00:00.000Z'
          }
        ]
      }
    }
    expect(convertDatesToStrings(obj)).toEqual(expected)
  })

  it('should not modify non-date nested values in objects', () => {
    const obj = {
      date: new Date(),
      string: 'hello',
      number: 123,
      array: [1, 2, 3],
      boolean: true,
      null: null,
      undefined: undefined
    }
    const result = convertDatesToStrings(obj)
    const expected = {
      ...obj,
      date: obj.date.toISOString()
    }
    expect(result).toEqual(expected)
  })

  it('should handle empty objects and arrays', () => {
    expect(convertDatesToStrings({})).toEqual({})
    expect(convertDatesToStrings([])).toEqual([])
  })
})
