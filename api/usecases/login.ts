import { identifierAdapter } from '../adapters/database/inMemory'
import { User } from '../entities/user'

export const login = async (identifier: string, password: string): Promise<User> => {
  const userId = await identifierAdapter.getUserId(identifier)
  if (!userId) throw new Error('Invalid user identifier (username, email or phone)')
  const isValidPassword = await identifierAdapter.isValidPassword(userId, password)

  return user
}
