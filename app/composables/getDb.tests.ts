import getDb from './getDb'
import { accountDatas } from 'mock/inMemory'

describe('getDb', () => {
  it('should return the mock database', () => {
    console.log('accountDatas: ', accountDatas)
    expect(getDb()).toEqual('Hello')
  })
})
