import { accountGateway } from './accountGateway'

describe('accountGateway.test.ts', () => {
  it('should return a gateway for a given userId', () => {
    const gateway = accountGateway()
    expect(gateway).toBeDefined()
  })
})
