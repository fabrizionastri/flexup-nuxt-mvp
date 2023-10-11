import add from './add'

describe('sample add test suite', () => {
  it('should add two numbers', () => {
    const assertion = add(1, 2)
    const result = 3
    expect(assertion).toEqual(result)
  })
})
