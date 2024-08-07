import {
  getEndOfMonth,
  getMiddleDate,
  isValidDate,
  isValidNumber,
  sumNumbers,
  sumCappedNumbers,
  scaleNumbersByMagnitude,
  roundNumberToPrecision,
  roundNumbersToPrecision,
  roundAndAdjustNumbersToPrecision,
  roundAndAdjustNumbersToMatchRoundedSum,
  getNumberForKey,
  getNumberByKey,
  getNumberByKeys,
  getTotalForKey,
  getTotalsByKeys,
  sumValuesForKeys,
  calculatePayableRatio,
  calculatePayableRatioFromArray,
  calculatePayableCapFromArray,
  getTotalAmountDue,
  // clone,
  isInBound,
  isInBoundPercent,
  sumNumberProps,
  dateOnly,
  today,
  getDateForKey,
  isSameDay,
  calculateInterest,
  calculateDuration
} from 'lib/utils'

// import { zeroBalances } from 'lib/entities/balance' // CHECK / TODOS : this used to work with out lib/, with just 'entities', but now it doesn't. Why?

describe('Utils functions', () => {
  describe('getEndOfMonth', () => {
    it('should return undefined if no date is provided', () => {
      expect(getEndOfMonth()).toBeNull()
    })
    it.each([
      {
        date: new Date('2020-01-15'),
        end: new Date('2020-01-31T23:59:59.999')
      },
      {
        date: new Date('2020-02-15'),
        end: new Date('2020-02-29T23:59:59.999')
      },
      {
        date: new Date('2023-02-15'),
        end: new Date('2023-02-28T23:59:59.999')
      },
      {
        date: new Date('2023-03-01'),
        end: new Date('2023-03-31T23:59:59.999')
      }
    ])('should return end=$end for date=$date ', ({ date, end }) => {
      expect(getEndOfMonth(date)).toEqual(end)
    })
  })

  describe('getMiddleDate', () => {
    it.each([
      {
        startDate: new Date('2020-01-01'),
        finishDate: new Date('2020-01-19'),
        expected: new Date('2020-01-10')
      },
      {
        startDate: new Date('2020-01-01'),
        finishDate: new Date('2020-01-20'),
        expected: new Date('2020-01-10T12:00:00.000Z')
      },
      {
        startDate: new Date('2020-01-01'),
        finishDate: new Date('2020-05-20'),
        expected: new Date('2020-03-11T00:00:00.000Z')
      },
      {
        finishDate: new Date('2020-05-20'),
        expected: new Date('2020-05-20')
      },
      {
        startDate: new Date('2020-05-20'),
        expected: new Date('2020-05-20')
      }
      // {
      //   startDate: '2020-05-20',
      //   finishDate: new Date('2020-05-20'),
      //   expected: null
      // }
    ])(
      'should return $expected for $start and $finish ',
      ({ startDate, finishDate: finishDate, expected: expectedDate }) => {
        expect(getMiddleDate(startDate, finishDate)).toEqual(expectedDate)
      }
    )
  })

  describe('isValidDate', () => {
    it.each([
      {
        date: new Date('2020-01-01'),
        expected: true
      },
      {
        date: new Date('2020-12-25T23:00:45.123Z'),
        expected: true
      },
      {
        date: new Date('2020-25-55'),
        expected: false
      },
      {
        date: 46549.12354,
        expected: false
      },
      {
        expected: false
      },
      {
        date: undefined,
        expected: false
      }
    ])('should return $expected for $date ', ({ date, expected }) => {
      expect(isValidDate(date)).toEqual(expected)
    })
  })

  describe('isValidNumber', () => {
    it.each([
      {
        myVar: 123,
        expected: true
      },
      {
        myVar: 46549.12354,
        expected: true
      },
      {
        myVar: '123',
        expected: true
      },
      {
        myVar: 'plop',
        expected: false
      },
      {
        myVar: NaN,
        expected: false
      },
      {
        myVar: {},
        expected: false
      },
      {
        myVar: { plop: 3 },
        expected: false
      },
      {
        myVar: null,
        expected: false
      },
      {
        expected: false
      },
      {
        myVar: undefined,
        expected: false
      }
    ])('should return $expected for $myVar', ({ myVar, expected }) => {
      expect(isValidNumber(myVar)).toEqual(expected)
    })
  })

  describe('isSameDay', () => {
    it('Returns true for the same date', () => {
      const date1 = new Date('2022-01-01T00:00:00')
      const date2 = new Date('2022-01-01T00:00:00')

      expect(isSameDay(date1, date2)).toBe(true)
    })

    it('Returns true for the same day but different times', () => {
      const date1 = new Date('2022-01-01T00:00:00')
      const date2 = new Date('2022-01-01T23:59:59')

      expect(isSameDay(date1, date2)).toBe(true)
    })

    it('Returns false for different days', () => {
      const date1 = new Date('2022-01-01T00:00:00')
      const date2 = new Date('2022-01-02T00:00:00')

      expect(isSameDay(date1, date2)).toBe(false)
    })

    it('Returns false for different months', () => {
      const date1 = new Date('2022-01-01T00:00:00')
      const date2 = new Date('2022-02-01T00:00:00')

      expect(isSameDay(date1, date2)).toBe(false)
    })

    it('Returns false for different years', () => {
      const date1 = new Date('2022-01-01T00:00:00')
      const date2 = new Date('2023-01-01T00:00:00')

      expect(isSameDay(date1, date2)).toBe(false)
    })
  })

  describe('today', () => {
    it.only('Returns the current date without time', () => {
      const result = today()
      const now = new Date()
      // console.log('result', result)
      // console.log('results.getDate()', result.getDate())
      // console.log('result.getHours()', result.getHours())
      // console.log('result.getMinutes()', result.getMinutes())
      // console.log('resault.getSeconds()', result.getSeconds())
      // console.log('result.getMilliseconds()', result.getMilliseconds())
      // console.log('now', now)
      // console.log('result', result)
      // console.log('isSameDay(result, now)', isSameDay(result, now))

      expect(isSameDay(result, now)).toBe(true)
      expect(result.getUTCHours()).toBe(0)
      expect(result.getMinutes()).toBe(0)
      expect(result.getSeconds()).toBe(0)
      expect(result.getMilliseconds()).toBe(0)
    })
  })

  describe('dateOnly', () => {
    const testCases = [
      {
        description: 'Removes time from a date with time',
        input: new Date('2023-05-03T12:34:56'),
        expectedResult: new Date('2023-05-03')
      },
      {
        description: 'Returns the same date when given a date without time',
        input: new Date('2023-05-03'),
        expectedResult: new Date('2023-05-03')
      },
      {
        description: 'Handles date near daylight saving time change (spring forward)',
        input: new Date('2023-03-12T03:30:00'),
        expectedResult: new Date('2023-03-12')
      },
      {
        description: 'Handles date near daylight saving time change (fall back)',
        input: new Date('2023-11-05T03:30:00'),
        expectedResult: new Date('2023-11-05')
      }
    ]

    testCases.forEach(({ description, input, expectedResult }) => {
      it(description, () => {
        expect(dateOnly(input)).toEqual(expectedResult)
      })
    })
  })

  describe('isInBound', () => {
    describe('isInBound Suite', () => {
      it('should return true for a number', () => {
        expect(isInBound(1, 1, 2)).toBeTruthy()
      })
      it('should return false for a number', () => {
        expect(isInBound(0, 1, 2)).toBeFalsy()
      })
    })
  })

  describe('isInBoundPourcent', () => {
    it('should return true for a number in percentage', () => {
      expect(isInBoundPercent(2)).toBeTruthy()
    })
    it('should return false for a number out pourcentage', () => {
      expect(isInBoundPercent(202)).toBeFalsy()
    })
  })

  describe('getNumberForKey', () => {
    it.each([
      { obj: {}, key: 'a', expected: 0 },
      { obj: { a: 1, b: 2 }, key: 'a', expected: 1 },
      { obj: { a: 1 }, key: 'b', expected: 0 },
      { obj: { a: 1 }, key: 2, expected: 0 },
      { obj: { a: 1, b: 'hello' }, key: 'b', expected: 0 },
      { obj: { a: '3' }, key: 'a', expected: 3 },
      { obj: { a: 'hello' }, key: 'a', value: 99, expected: 99 }
    ])(
      'should return $expected for obj:$obj, key:$key, value:$value',
      ({ obj, key, value, expected }) => {
        expect(getNumberForKey(obj, key, value)).toBe(expected)
      }
    )
  })

  describe('getDateForKey', () => {
    const testCases = [
      {
        description: 'Returns date from object with valid date string',
        obj: { confirmation: '2023-05-03' },
        key: 'confirmation',
        expectedResult: new Date('2023-05-03')
      },
      {
        description: 'Returns date from object with valid Date instance',
        obj: { date: new Date('2023-05-03') },
        key: 'date',
        expectedResult: new Date('2023-05-03')
      },
      {
        description: 'Returns error value when key not present in object',
        obj: { otherKey: '2023-05-03' },
        key: 'date',
        errorValue: null,
        expectedResult: null
      },
      {
        description: 'Returns error value when value is not a valid date',
        obj: { date: 'invalid-date' },
        key: 'date',
        errorValue: null,
        expectedResult: null
      },
      {
        description: 'Returns custom error value when value is not a valid date',
        obj: { date: 'invalid-date' },
        key: 'date',
        errorValue: new Date('1970-01-01'),
        expectedResult: new Date('1970-01-01')
      }
    ]

    testCases.forEach(({ description, obj, key, errorValue, expectedResult }) => {
      it(description, () => {
        expect(getDateForKey(obj, key, errorValue)).toEqual(expectedResult)
      })
    })
  })

  describe('sumNumbers', () => {
    it.each([
      { arrayOfNumbers: [1, 2, 3], expected: 6 },
      { arrayOfNumbers: [], expected: 0 },
      { arrayOfNumbers: [-5, 5], expected: 0 }
    ])('should return $expected for $arrayOfNumbers', ({ arrayOfNumbers, expected }) => {
      expect(sumNumbers(arrayOfNumbers)).toBe(expected)
    })
  })

  describe('sumCappedNumbers', () => {
    it.each([
      { arrayOfNumbers: [1, 2, 3], cap: 2, expected: 5 },
      { arrayOfNumbers: [], cap: 99, expected: 0 },
      { arrayOfNumbers: [-5, 5, 17, 3, 1], cap: 2, expected: 2 }
    ])(
      'should return $expected for $arrayOfNumbers and cap $cap',
      ({ arrayOfNumbers, cap, expected }) => {
        expect(sumCappedNumbers(arrayOfNumbers, cap)).toBe(expected)
      }
    )
  })

  describe('scaleNumbersByMagnitude', () => {
    it.each([
      { values: [0, 1, 5], magnification: 0, expected: [0, 1, 5] },
      { values: [0, 1, 5], magnification: 2, expected: [0, 100, 500] },
      { values: [0, 2.4, 2.7], magnification: 1, expected: [0, 24, 27] },
      { values: [0, 1, 5], magnification: -2, expected: [0, 0.01, 0.05] },
      { values: [0, 1, 5], magnification: 2.45, expected: [0, 100, 500] },
      { values: [0, 1, 5], magnification: 2.51, expected: [0, 100, 500] }
    ])(
      'for $values and $magnification magnification, should return $expected',
      ({ values, magnification, expected }) => {
        expect(scaleNumbersByMagnitude(values, magnification)).toEqual(expected)
      }
    )
  })

  describe('roundNumberToPrecision', () => {
    it.each([
      { value: 0.49, precision: 0, expected: 0 },
      { value: 1.48, precision: 0, expected: 1 },
      { value: 2.4000000000000004, precision: 1, expected: 2.4 },
      { value: 270.545, precision: 1, expected: 270.5 },
      { value: -51.2525, precision: 1, expected: -51.3 }
    ])(
      'for $value and $precision precision, should return $expected',
      ({ value, precision, expected }) => {
        expect(roundNumberToPrecision(value, precision)).toBe(expected)
      }
    )
  })

  describe('roundNumbersToPrecision', () => {
    it.each([
      { values: [0.49, 1.48], precision: 0, expected: [0, 1] },
      {
        values: [2.4000000000000004, 270.545, -51.2525],
        precision: 1,
        expected: [2.4, 270.5, -51.3]
      }
    ])(
      'for $values and $precision precision, should return $expected',
      ({ values, precision, expected }) => {
        expect(roundNumbersToPrecision(values, precision)).toEqual(expected)
      }
    )
  })

  describe('roundAndAdjustNumbersToMatchRoundedSum', () => {
    it.each([
      { values: [0.49, 1.48], expected: [1, 1] },
      { values: [2.47, 1.48, 0.49], expected: [2, 1, 1] },
      { values: [0.51, 1.53, 2.52], expected: [0, 2, 3] },
      { values: [-0.49, 1.53, 2.52], expected: [-1, 2, 3] }
    ])('for $values and $decimals decimals, should return $expected', ({ values, expected }) => {
      expect(roundAndAdjustNumbersToMatchRoundedSum(values)).toEqual(expected)
    })
  })

  describe('roundAndAdjustNumbersToPrecision', () => {
    it.each([
      { values: [0.49, 1.48], precision: 0, expected: [1, 1] },
      { values: [0.49, 1.48], precision: 1, expected: [0.5, 1.5] },
      { values: [2.47, 1.48, 0.49], precision: 1, expected: [2.4, 1.5, 0.5] }
    ])(
      'for $values and $decimals decimals, should return $expected',
      ({ values, precision, expected }) => {
        expect(roundAndAdjustNumbersToPrecision(values, precision)).toEqual(expected)
      }
    )
  })

  describe('getNumbersByKeys', () => {
    it.each([
      { obj: {}, key: undefined, expected: { '': 0 } },
      { obj: {}, key: 'a', expected: { a: 0 } },
      { obj: { a: 1, b: 2 }, key: 'a', expected: { a: 1 } },
      { obj: { a: 1, b: 'hello' }, key: 'b', expected: { b: 0 } }
    ])('should return $expected for $obj and $key key', ({ obj, key, expected }) => {
      expect(getNumberByKey(obj, key)).toEqual(expected)
    })
  })

  describe('getNumberByKeys', () => {
    it.each([
      { obj: {}, keys: [], expected: {} },
      { obj: {}, keys: undefined, expected: { '': 0 } },
      { obj: {}, keys: ['a'], expected: { a: 0 } },
      { obj: { a: 5 }, keys: ['a'], expected: { a: 5 } },
      { obj: { a: 'hello' }, keys: ['a'], expected: { a: 0 } },
      { obj: { b: 5 }, keys: ['a'], expected: { a: 0 } },
      { obj: { a: 3, b: 5 }, keys: ['b'], expected: { b: 5 } }
    ])('should return $expected for $obj and $keys keys', ({ obj, keys, expected }) => {
      expect(getNumberByKeys(obj, keys)).toEqual(expected)
    })
  })

  describe('getTotalForKey', () => {
    it.each([
      { values: [{}], key: 'a', expected: 0 },
      { values: [{ a: 1 }, { a: 2 }, { a: 3 }], key: 'a', expected: 6 },
      { values: [{ a: 1 }, { b: 2 }, { a: 3 }], key: 'b', expected: 2 },
      // { values: [{ a: 1 }, { a: 2 }, { a: 3 }], key: undefined, expected: 0 }, // these scenarios don't pass the linter, so needless to test them
      // { values: [{ a: 1 }, { a: 2 }, { a: 3 }], key: null, expected: 0 }, // these scenarios don't pass the linter, so needless to test them
      { values: [{ a: 1 }, { a: 2 }, { a: 3 }], key: '', expected: 0 },
      {
        values: [
          { a: 1, b: 2 },
          { a: 2, b: 3 },
          { b: 4, c: 2 },
          { a: 1, c: 4 }
        ],
        key: 'b',
        expected: 9
      }
    ])('for $values and $key key, should return $expected', ({ values, key, expected }) => {
      expect(getTotalForKey(values, key)).toBe(expected)
    })
  })

  describe('getTotalsByKeys', () => {
    it.each([
      { values: [], keys: [], expected: {} },
      { values: [{ a: 1 }], keys: [], expected: {} },
      { values: [{}], keys: ['a', 'b'], expected: { a: 0, b: 0 } },
      {
        values: [{ a: 1 }, { a: 2 }, { a: 3 }],
        keys: ['a', 'b'],
        expected: { a: 6, b: 0 }
      },
      {
        values: [{ a: 'bad' }, { b: 2 }, { a: 3 }],
        keys: ['a', 'b'],
        expected: { a: 3, b: 2 }
      },
      {
        values: [{ a: 1 }, { a: 2 }, { a: 3 }],
        keys: undefined,
        expected: { '': 0 }
      },
      {
        values: [
          { a: 1, b: 2 },
          { a: 2, b: 3 },
          { b: 4, c: 2 },
          { a: 1, C: 4 }
        ],
        keys: ['a', 'b'],
        expected: { a: 4, b: 9 }
      }
    ])('for $values and $keys keys, should return $expected', ({ values, keys, expected }) => {
      expect(getTotalsByKeys(values, keys)).toEqual(expected)
    })
  })

  describe('sumValuesForKeys', () => {
    it.each([
      { obj: {}, keys: [], expected: 0 },
      { obj: {}, keys: ['a'], expected: 0 },
      { obj: { a: 1 }, keys: ['a'], expected: 1 },
      { obj: { a: 1, b: 2 }, keys: ['a', 'b'], expected: 3 },
      { obj: { a: 1, b: 2 }, keys: ['a', 'c'], expected: 1 }
    ])('should return $expected for obj=$obj and keys=$keys', ({ obj, keys, expected }) => {
      expect(sumValuesForKeys(obj, keys)).toEqual(expected)
    })
  })

  describe('calculatePayableRatio (Annex 6.C)', () => {
    it.each([
      { amount: undefined, availableCash: 0, expected: 0 },
      { amount: 0, availableCash: undefined, expected: 0 },
      { amount: 0, availableCash: 0, expected: 0 },
      { amount: 100, availableCash: 0, expected: 0 },
      { amount: 0, availableCash: 100, expected: 0 },
      { amount: 100, availableCash: 60, expected: 0.6 },
      { amount: 50, availableCash: 100, expected: 1 }
    ])(
      'should return $expected for dueAmount=$dueAmount and availableCash=$availableCash',
      ({ amount: dueAmount, availableCash, expected }) => {
        expect(calculatePayableRatio(dueAmount, availableCash)).toBe(expected)
      }
    )
  })

  describe('calculatePayableRatioFromArray (Annex 6.C)', () => {
    it.each([
      { amounts: [], availableCash: 0, expected: 0 },
      { amounts: [0], availableCash: undefined, expected: 0 },
      { amounts: [0, 0], availableCash: 0, expected: 0 },
      { amounts: [100, 200], availableCash: 0, expected: 0 },
      { amounts: [0], availableCash: 100, expected: 0 },
      { amounts: [100, 300], availableCash: 100, expected: 0.25 },
      { amounts: [10, 30, 40], availableCash: 100, expected: 1 }
    ])(
      'should return $expected for amounts=$amounts and availableCash=$availableCash',
      ({ amounts, availableCash, expected }) => {
        expect(calculatePayableRatioFromArray(amounts, availableCash)).toBe(expected)
      }
    )
  })

  // TODO: implement
  describe.todo('assignPayableAmountFromRatio (Annex 6.C)', () => {
    it('true === true', () => {
      expect(true).toBe(true)
    })
  })

  describe('calculatePayableCapFromArray (Annex 6.D)', () => {
    it.each([
      { amounts: [], availableCash: 0, expected: 0 },
      { amounts: [], availableCash: undefined, expected: 0 },
      { amounts: [], availableCash: 100, expected: 0 },
      { amounts: [0], availableCash: 0, expected: 0 },
      { amounts: [100], availableCash: 0, expected: 0 },
      { amounts: [60], availableCash: 100, expected: 60 },
      { amounts: [60, 60], availableCash: 100, expected: 50 },
      { amounts: [30, 90], availableCash: 100, expected: 70 },
      { amounts: [30, 90, 60], availableCash: 100, expected: 35 },
      { amounts: [30, 90, 60], availableCash: 200, expected: 90 }
    ])(
      'should return $expected for amounts=$amounts and availableCash=$availableCash',
      ({ amounts, availableCash, expected }) => {
        expect(calculatePayableCapFromArray(amounts, availableCash)).toBe(expected)
      }
    )
  })

  // TODO: implement
  describe.todo('assignPayableAmountFromCap (Annex 6.D)', () => {
    it('true === true', () => {
      expect(true).toBe(true)
    })
  })

  describe('getTotalAmountDue', () => {
    it.each([
      { commitments: [], expected: 0 },
      { commitments: [{ a: 1 }], expected: 0 },
      { commitments: [{ dueAmount: 1 }], expected: 1 },
      {
        commitments: [{ dueAmount: 1 }, { b: 2 }, { dueAmount: 3, c: 5 }],
        expected: 4
      },
      {
        commitments: [{ dueAmount: 1 }, { dueAmount: 'hello', b: 2 }, { dueAmount: 3, c: 5 }],
        expected: 4
      }
    ])('should return $expected for commitments=$commitments', ({ commitments, expected }) => {
      expect(getTotalAmountDue(commitments)).toBe(expected)
    })
  })

  describe('sumNumberProps', () => {
    it('should return 0 if no number properties supplied', () => {
      const req: { a: string; b: Date } = {
        a: 'plop',
        b: new Date()
      }
      expect(sumNumberProps(req)).toEqual(0)
    })
    it('should return 21 ', () => {
      const req: { a: number; b: Date; c: number } = {
        a: 10,
        b: new Date(),
        c: 11
      }
      expect(sumNumberProps(req)).toEqual(21)
    })
  })

  describe('calculateDuration', () => {
    it('+1 year should return 365', () => {
      const startDate: Date = new Date('01-01-2019')
      const dueDate: Date = new Date('01-01-2020')
      const expected = 365
      expect(calculateDuration(startDate, dueDate)).toEqual(expected)
    })
    it('-15 days should return -15', () => {
      const startDate: Date = new Date('01-16-2019')
      const dueDate: Date = new Date('01-01-2019')
      const expected = -15
      expect(calculateDuration(startDate, dueDate)).toEqual(expected)
    })
    it('missing start should return null', () => {
      const startDate = null
      const dueDate: Date = new Date('01-01-2019')
      const expected = null
      expect(calculateDuration(startDate, dueDate)).toEqual(expected)
    })
  })

  describe('calculateInterest', () => {
    it('should return 5 for 5% on 100 and 1 year', () => {
      const interestBasis = 100
      const interestRate = 0.05
      const duration = 365.25
      const expected = 5
      expect(calculateInterest(interestBasis, interestRate, duration)).toEqual(expected)
    })
  })
})
