import * as g from './_generic'
import inMemory from 'mock/inMemory'
import { CredentialData } from 'entities/credential'

// interface CredentialData extends Entity

const credentials: CredentialData[] = inMemory.credential

// export interface CredentialAdapter {
//   getById: (id: string) => Promise<CredentialData | undefined>
//   getByProperty: (property: keyof CredentialData, value: unknown) => Promise<CredentialData[]>
// }

export const credentialAdapter /* : CredentialAdapter */ = {
  getById: g.createGetById(credentials),
  getByProperty: g.createGetByProperty(credentials),
  getByProperties: g.createGetByProperties(credentials),
  getByUserId: g.createGetBySelectedProperty(credentials, 'userId')
}
