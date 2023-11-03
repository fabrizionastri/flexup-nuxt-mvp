// import { HTTPException } from 'hono/http-exception'
//
// import { passwordAdapter } from 'adapters/database/inMemory'
// import { identifierAdapter } from '../adapters/database/inMemory'
import type { User } from 'entities/user'
import { userGateway } from '../gateways'

export const login = async (identifier: string, password: string): Promise<User> =>
  userGateway.login(identifier, password)

// export const login = userGateway.login
