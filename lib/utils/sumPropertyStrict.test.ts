import type { ItemComputed } from 'entities/item'
import * as orders from 'mock/inMemory/order'
import { sumPropertyStrict } from './sumPropertyStrict'

// describe('orderGateway', () => {
//   let orderGateway: OrderGateway
describe('sumPropertyStrict', () => {
  it('should return sum for array of items', () => {
    const items = orders.commercialOrder.items
    const expected = 221
    const result = sumPropertyStrict('amountExclTax', items, true)
    expect(result).toEqual(expected)
  })
  it('should return undefined for empty array', () => {
    const items = [] as ItemComputed[]
    const expected = undefined
    const result = sumPropertyStrict('amountExclTax', items, true)
    expect(result).toEqual(expected)
  })
  it('should return undefined if any amount is undefined', () => {
    const items = [{ amountExclTax: 1 }, { amountExclTax: undefined }] as ItemComputed[]
    const expected = undefined
    const result = sumPropertyStrict('amountExclTax', items, true)
    expect(result).toEqual(expected)
  })
  it('should return undefined if any amount is null', () => {
    const items = [{ amountExclTax: 1 }, { amountExclTax: null }] as ItemComputed[]
    const expected = undefined
    const result = sumPropertyStrict('amountExclTax', items, true)
    expect(result).toEqual(expected)
  })
  it('should return undefined if any amount is missing', () => {
    const items = [{ amountExclTax: 1 }, { plop: 3 }] as ItemComputed[]
    const expected = undefined
    const result = sumPropertyStrict('amountExclTax', items, true)
    expect(result).toEqual(expected)
  })
  it('should return undefined if sum is 0 and rejectZeroSum is true', () => {
    const items = [{ amountExclTax: 0 }, { amountExclTax: 0 }] as ItemComputed[]
    const expected = undefined
    const result = sumPropertyStrict('amountExclTax', items, true)
    expect(result).toEqual(expected)
  })
  it('should return 0 if sum is 0 and rejectZeroSum is false', () => {
    const items = [{ amountExclTax: 0 }, { amountExclTax: 0 }] as ItemComputed[]
    const expected = 0
    const result = sumPropertyStrict('amountExclTax', items, false)
    expect(result).toEqual(expected)
  })
})
