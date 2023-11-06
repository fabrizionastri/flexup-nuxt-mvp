import { passwordAdapter } from './password'

// TODO - TOCHECK : we may convert the function back to a Promise function, and adjust the tests accordingly

describe('password adapter', () => {
  describe('checkPassword', async () => {
    it('should return true for valid userID / password pair', async () => {
      const result = await passwordAdapter.checkPassword('fabrizioUser', 'plop')
      expect(result).toBe(true)
    })
    it('should throw error for valid userID but invalid password', async () => {
      await expect(
        passwordAdapter.checkPassword('fabrizioUser', 'invalidPassword')
      ).rejects.toThrowError('Invalid password')
    })
    it('should throw an error for invalid userID', async () => {
      await expect(() =>
        passwordAdapter.checkPassword('invalidUserId', 'plop')
      ).rejects.toThrowError('Invalid user')
    })
  })
})
