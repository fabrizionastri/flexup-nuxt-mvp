import { vi } from 'vitest'
import Cookies from 'js-cookie'
// import axios from 'axios'
// import type { Mock } from 'vitest'
import { getUser } from './getUser'
// import { convertStringsToDates } from '../../lib/utils/convertStringsToDates'

// Mock the js-cookie module
vi.mock('js-cookie', () => ({
  default: {
    get: vi.fn()
  },
  get: vi.fn().mockReturnValue('mocked-token')
}))
// const CookiesGetMock = Cookies.get as Mock
// const mockUserData = { userId: 'totoUser', userName: 'Toto La Riflette' }
// Mock the axios module
vi.mock('axios', async () => {
  const actualAxios = await vi.importActual('axios')

  return {
    default: actualAxios,

    // Mock get method
    get: vi.fn().mockResolvedValue({ userId: 'totoUser', userName: 'Toto La Riflette' })
  }
})
// const axiosGetMock = axios.get as Mock

// Mock the convertStringsToDates utility function
vi.mock('../../lib/utils/convertStringsToDates', () => ({
  convertStringsToDates: vi.fn((data) => data) // Mock as a pass-through
}))

describe.todo('app/composable/getUser - mocked', () => {
  it('should retrieve the user data when a token is present', async () => {
    // Mock cookie retrieval
    // CookiesGetMock.mockReturnValue('mocked-token')

    // Mock axios response

    // axiosGetMock.mockResolvedValue({ data: mockUserData })

    // Run the composable function
    await getUser()

    // Assertions
    expect(Cookies.get).toHaveBeenCalledWith('token')
    // expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/user'), {
    //   headers: {
    //     Authorization: 'Bearer mocked-token'
    //   }
    // })
    // expect(convertStringsToDates).toHaveBeenCalledWith(mockUserData)
    // expect(result).toEqual(mockUserData)
  })

  //   it('should throw an error when no token is found', async () => {
  //     // Mock cookie retrieval to return undefined
  //     Cookies.get.mockReturnValue(undefined)
  //
  //     // Assert that an error is thrown when calling getUser
  //     await expect(getUser()).rejects.toThrow('No token found')
  //   })
})
