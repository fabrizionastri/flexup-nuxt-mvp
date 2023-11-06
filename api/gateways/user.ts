import { individualAdapter } from 'adapters/database/generic/individual'
import { userAdapter } from 'adapters/database/generic/user'
import type { UserData, User } from 'entities/user'
import { identifierAdapter, passwordAdapter } from '../adapters/database/inMemory'
import { CustomError } from '../error'
import { HTTPException } from 'hono/http-exception'

export const computeUser = async (userData: UserData): Promise<User> => {
  const individualData = await individualAdapter.getByUserId(userData.id)
  if (!individualData) throw new Error('Individual not found')
  const user = {
    ...userData,
    firstName: individualData.firstName,
    lastName: individualData.lastName,
    fullName: `${individualData.firstName} ${individualData.lastName}`
  }
  return user
}

export const createUserGateway = () => {
  const getById = async (userId: string): Promise<User> => {
    const userData = await userAdapter.getById(userId)
    if (!userData) throw new Error('User not found')
    return computeUser(userData)
  }

  const login = async (identifier: string, password: string): Promise<User> => {
    let user: User
    try {
      const userId = await identifierAdapter.getUserId(identifier.toLowerCase())
      await passwordAdapter.checkPassword(userId, password)
      user = await getById(userId)
    } catch (error: any) {
      if (error instanceof Error) {
        // console.error(
        //   'CustomError created in userGateway for:',
        //   error.message,
        //   ' with statusCode:',
        //   401
        // )
        throw new HTTPException(401, { message: error.message })
      } else {
        console.error(
          'Unknown created in userGateway from:',
          error.message,
          ' with statusCode:',
          505
        )
        // Handle non-Error thrown values if necessary
        throw new CustomError('Unknown error', 505)
      }
    }
    return user
  }

  return {
    getById,
    login
  }
}

export const userGateway = createUserGateway()
