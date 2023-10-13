import { AllocationGateway } from 'gateways/allocationGateway'

describe('Allocations gateway', () => {
  it('should throw an error if adapter is null', () => {
    expect(AllocationGateway()).toThrowError('Function not implemented.')
  })
})
