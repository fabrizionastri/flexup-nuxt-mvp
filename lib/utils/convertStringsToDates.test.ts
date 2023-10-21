import { convertStringsToDates } from './convertStringsToDates'

describe('convertStringsToDates', () => {
  it('should convert string dates to Date objects', () => {
    const obj = {
      date1: '2022-01-01T00:00:00.000Z',
      date2: '2022-02-01T00:00:00.000Z',
      nested: {
        date3: '2022-03-01T00:00:00.000Z',
        date4: '2022-04-01T00:00:00.000Z'
      }
    }
    const expected = {
      date1: new Date('2022-01-01T00:00:00.000Z'),
      date2: new Date('2022-02-01T00:00:00.000Z'),
      nested: {
        date3: new Date('2022-03-01T00:00:00.000Z'),
        date4: new Date('2022-04-01T00:00:00.000Z')
      }
    }
    const result = convertStringsToDates(obj)
    expect(result).toEqual(expected)
  })

  it('should not modify non-string values', () => {
    const obj = {
      date: new Date(),
      number: 123,
      boolean: true,
      array: [1, 2, 3],
      object: { foo: 'bar' },
      nullValue: null,
      undefinedValue: undefined
    }
    const expected = { ...obj }
    const result = convertStringsToDates(obj)
    expect(result).toEqual(expected)
  })

  it('should handle empty objects', () => {
    const obj = {}
    const expected = {}
    const result = convertStringsToDates(obj)
    expect(result).toEqual(expected)
  })
})
