import { zeroBalances } from 'lib/entities/balance'
import { clone } from './clone'

describe('clone', () => {
  it.each([
    // { obj: null, expected: null },
    // { obj: undefined, expected: undefined },
    { obj: 1, expected: 1 },
    { obj: 'hello', expected: 'hello' },
    { obj: true, expected: true },
    { obj: false, expected: false },
    { obj: [], expected: [] },
    { obj: [1, 2, 3], expected: [1, 2, 3] },
    { obj: {}, expected: {} },
    { obj: { a: 1 }, expected: { a: 1 } },
    { obj: { a: 1, b: { c: 2 } }, expected: { a: 1, b: { c: 2 } } },
    { obj: zeroBalances, expected: zeroBalances },
    {
      obj: { name: 'plop', balances: zeroBalances },
      expected: { name: 'plop', balances: zeroBalances }
    }
  ])('should return $expected for obj=$obj', ({ obj, expected }) => {
    expect(clone(obj)).toEqual(expected)
  })
})
