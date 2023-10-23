import { identifierDatas } from 'mock/inMemory/identifier'
import { IdentifierData } from 'entities/identifier'

export const createIdentifierAdapter = () => {
  const identifiers: IdentifierData[] = identifierDatas

  const getUserId = (identifier: string): Promise<string | undefined> => {
    const result = identifiers.find((item) => item.id === identifier)
    return result?.userId
      ? Promise.resolve(result.userId)
      : Promise.reject(new Error('Invalid identifier'))
  }

  return {
    getUserId
  }
}

export const identifierAdapter = createIdentifierAdapter()
