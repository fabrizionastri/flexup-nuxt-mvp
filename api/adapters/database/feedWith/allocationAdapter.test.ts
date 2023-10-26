import { allocation1, allocation2 } from 'mock/inMemory/allocation'
import type { AllocationAdapter } from './allocationAdapter'

describe.todo('Adatper primary allocate', () => {
  let adapter: AllocationAdapter

  beforeEach(() => {
    adapter = new AllocationAdapter()
  })

  it('should return an instance of AllocationAdapter', () => {
    expect(adapter).toBeInstanceOf(AllocationAdapter)
  })

  it('should have a method called feedWith', () => {
    expect(adapter.feedWith).toBeDefined()
  })

  it('should return an array of AllocationInstance 1 and 2', () => {
    const expected = [allocation1, allocation2]
    adapter.feedWith(expected)
    expect(adapter.get()).toEqual(expected)
  })
})
