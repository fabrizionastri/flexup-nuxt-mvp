import { loadObjectJS } from './loadObjectJS.js'
import { account } from './mock.js'

describe.todo('loadObjectJS', () => {
  it('it should load and return a file', async () => {
    const result = await loadObjectJS('./mocks.js', 'account')
    const expected = account
    expect(result).toEqual(expected)
  })
})
