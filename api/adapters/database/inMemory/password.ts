import { passwordDatas } from 'mock/inMemory'

export const passwordAdapter = {
  checkPassword: (userId: string, password: string): Promise<boolean> => {
    if (!userId) return Promise.reject(new Error('Missing user id'))
    if (!userId || !password) return Promise.reject(new Error('Missing password'))
    const pwd = passwordDatas.find((pwd) => pwd.id === userId)
    if (!pwd) return Promise.reject(new Error('Invalid user id'))
    if (pwd.password !== password) return Promise.reject(new Error('Invalid password'))
    return Promise.resolve(true)
  }
}
