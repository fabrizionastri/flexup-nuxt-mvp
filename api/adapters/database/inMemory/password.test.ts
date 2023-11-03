import { passwordAdapter } from './password'

// TODO - TOCHECK : we may convert the function back to a Promise function, and adjust the tests accordingly

describe('password adapter', () => {
  describe('checkPassword', async () => {
    it('should return true for valid userID / password pair', () => {
      const result = passwordAdapter.checkPassword('fabrizioUser', 'plop')
      expect(result).toBe(true)
    })
    it('should throw error for valid userID but invalid password', () => {
      expect(() => passwordAdapter.checkPassword('fabrizioUser', 'invalidPassword')).toThrowError(
        'Invalid password'
      )
    })
    it('should throw an error for invalid userID', () => {
      expect(() => passwordAdapter.checkPassword('invalidUserId', 'plop')).toThrowError(
        'No password has been defined for this user'
      )
    })
  })
})
