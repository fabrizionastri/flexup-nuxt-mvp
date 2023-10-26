import { passwordAdapter } from 'adapters/database/inMemory'
import { identifierAdapter } from '../adapters/database/inMemory'
import type { User } from 'entities/user'
import { userGateway } from '../gateways'

export const login = async (identifier: string, password: string): Promise<User> => {
  const userId = await identifierAdapter.getUserId(identifier)
  if (!userId) return Promise.reject(new Error('Invalid identifier (username, email or phone)'))

  const isValidPassword = await passwordAdapter.checkPassword(userId, password)
  if (!isValidPassword) return Promise.reject(new Error('Invalid password'))

  const user = await userGateway.getById(userId)
  if (!user) return Promise.reject(new Error('User not found'))

  return user
}
