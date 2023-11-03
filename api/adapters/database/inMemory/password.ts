import { passwordDatas } from 'mock/inMemory'

// TODO - TOCHECK : we may convert this back to a Promise function, and adjust the tests accordingly
export const passwordAdapter = {
  checkPassword: (userId: string, password: string): boolean => {
    const pwd = passwordDatas.find((pwd) => pwd.id === userId)
    if (!pwd) throw new Error('Invalid user')
    if (pwd.password !== password) throw new Error('Invalid password')
    return true
  }
}
