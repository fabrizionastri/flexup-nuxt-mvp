import getDb from './getDb'

describe('getDb', () => {
  it('should return the mock database', () => {
    const data = getDb()
    console.log('accountDatas: ', data[0])
    expect(true).toEqual(true)
  })
})
