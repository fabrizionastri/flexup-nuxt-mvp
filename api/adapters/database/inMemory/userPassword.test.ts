import { userPasswordAdapter } from './userPassword'

describe('userPassword adapter', () => {
  describe('checkPassword', async () => {
    it('should return true for valid userID / password pair', async () => {
      const result = await userPasswordAdapter.checkPassword('fabrizioUser', 'plop')
      const expected = true
      expect(result).toEqual(expected)
    })
    it('should return false for valid userID / password pair', async () => {
      const result = await userPasswordAdapter.checkPassword('fabrizioUser', 'plop2')
      const expected = false
      expect(result).toEqual(expected)
    })
  })
})
