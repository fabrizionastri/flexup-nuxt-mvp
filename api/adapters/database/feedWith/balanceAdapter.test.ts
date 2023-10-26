import { balanceInstance1, balanceInstance2 } from 'mock/inMemory/balance'
import type { BalanceAdapter } from './balanceAdapter'

describe.todo('Adapter primary balance', () => {
  let adapter: BalanceAdapter

  beforeEach(() => {
    adapter = new BalanceAdapter()
  })
  it('should return an instance of BalanceAdapter', () => {
    expect(adapter).toBeInstanceOf(BalanceAdapter)
  })
  it('should have a method called feedWith', () => {
    expect(adapter.feedWith).toBeDefined()
  })
  it('should return an array of BalanceInstance 1 and 2', () => {
    const expected = [balanceInstance1, balanceInstance2]
    adapter.feedWith(expected)
    expect(adapter.get()).toEqual(expected)
  })
})
