import { identifierDatas } from 'mock/inMemory/identifier'
import type { IdentifierData } from 'entities/identifier'

export const createIdentifierAdapter = () => {
  const identifiers: IdentifierData[] = identifierDatas

  const getUserId = (identifier: string): string => {
    // if (!identifier)
    //   return Promise.reject(new Error('Missing identifier (username, email or phone)'))
    const result = identifiers.find((item) => item.id === identifier)
    if (!result) throw new Error('Invalid identifier')
    return result.userId
  }

  return {
    getUserId
  }
}

export const identifierAdapter = createIdentifierAdapter()
