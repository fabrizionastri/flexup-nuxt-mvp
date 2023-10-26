import { individualAdapter } from 'adapters/database/generic/individual'
import { userAdapter } from 'adapters/database/generic/user'
import type { UserData, User } from 'entities/user'

export const computeUser = async (userData: UserData): Promise<User | undefined> => {
  const individualData = await individualAdapter.getByUserId(userData.id)
  if (individualData === undefined) {
    // console.log('no individual data found for user with Id:', userData.id) // // TEMPORARY - commented out for tests
    return undefined
  }
  const user = {
    ...userData,
    firstName: individualData.firstName,
    lastName: individualData.lastName,
    fullName: `${individualData.firstName} ${individualData.lastName}`
  }
  return user
}

export const createUserGateway = () => {
  const getById = async (id: string): Promise<User | undefined> => {
    const userData = await userAdapter.getById(id)
    if (userData === undefined) {
      console.log('no user data found for user with Id:', id)
      return undefined
    }
    const user = await computeUser(userData)
    return user
  }

  return {
    getById
  }
}

export const userGateway = createUserGateway()
