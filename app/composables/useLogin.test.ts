import { sortById } from './../../lib/utils/sortById'
import { convertStringsToDates } from 'lib/utils/convertStringsToDates'
import * as mock from '../../mock/inMemory'
import { useLogin } from './'

describe('app/composables/login.test', () => {
  it('logs user in and updates state', async () => {
    const identifier = mock.totoUsernameIdentifierData.id
    const password = mock.totoUserPasswordData.password
    const result = await useLogin(identifier, password)

    // Verify that the result is correct
    expect(result?.token.slice(0, 50)).toEqual(mock.totoUserToken.slice(0, 50))
    expect(convertStringsToDates(result?.user)).toEqual(mock.totoUser)
    expect(sortById(convertStringsToDates(result?.accounts))).toEqual(
      sortById(mock.accountsForTotoUser)
    )
  })
})
