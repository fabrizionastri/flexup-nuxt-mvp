import { identifierDatas } from 'mock/inMemory/identifier'
import type { IdentifierData } from 'entities/identifier'

export const createIdentifierAdapter = () => {
  const identifiers: IdentifierData[] = identifierDatas

  const getUserId = (identifier: string): Promise<string | undefined> => {
    if (!identifier)
      return Promise.reject(new Error('Missing identifier (username, email or phone)'))
    const result = identifiers.find((item) => item.id === identifier)
    return result?.userId
      ? Promise.resolve(result.userId)
      : Promise.reject(new Error('createIdentifierAdapter -> Invalid identifier'))
  }

  return {
    getUserId
  }
}

export const identifierAdapter = createIdentifierAdapter()
