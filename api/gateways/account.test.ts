import { createAccountGateway } from './account'

describe.todo('accountGateway', () => {
  it('should return a gateway for a given userId', () => {
    const accountGateway = createAccountGateway('totoUser')
    expect(accountGateway).toBeDefined()
  })
  it('should be true', () => {
    const result = 1
    const expected = 1
    expect(result).toEqual(expected)
  })
})
