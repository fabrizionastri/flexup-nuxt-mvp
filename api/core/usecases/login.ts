import { totoUser } from 'mock/inMemory/user'
import { User } from '../entities/user'
// import { IdentifierData } from '../entities/identifier'

export const login = async (/* identifiers: IdentifierData */): Promise<User> => {
  // const user = await userGateway.getByIdentifier(identifiers)
  const user = totoUser
  if (!user) {
    throw new Error('Invalid identifiers')
  }
  return user
}
