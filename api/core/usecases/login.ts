import { totoUser } from 'mock/inMemory/user'
import { User } from '../entities/user'
// import { CredentialData } from '../entities/credential'

export const login = async (/* credentials: CredentialData */): Promise<User> => {
  // const user = await userGateway.getByCredential(credentials)
  const user = totoUser
  if (!user) {
    throw new Error('Invalid credentials')
  }
  return user
}
