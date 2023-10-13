import { allocateTestCases } from '~/mock/inMemory/allocate'
import { allocate } from 'usecases/allocate'

describe('allocate function', () => {
  describe('success cases', () => {
    it.each(allocateTestCases)(
      '$summary',
      ({ allocationRequested, initialBalances, sources, destination, expected }) => {
        expect(allocate(allocationRequested, initialBalances, sources, destination)).toEqual(
          expected
        )
      }
    )
  })
})
