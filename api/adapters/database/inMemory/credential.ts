import { credentialDatas } from 'mock/inMemory/credential'
import { CredentialData } from 'entities/credential'

export const createCredentialAdapter = () => {
  const credentials: CredentialData[] = credentialDatas

  const checkCredentials = (identifier: string, password: string): Promise<string | undefined> => {
    const credential = credentials.find(
      (credential) => credential.identifier === identifier && credential.password === password
    )
    return credential?.userId
      ? Promise.resolve(credential.userId)
      : Promise.reject(new Error('Invalid credentials'))
  }

  return {
    checkCredentials
  }
}

export const credentialAdapter = createCredentialAdapter()
