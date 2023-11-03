import { individualGateway } from '.'
import { organizationAdapter } from '../adapters/database/generic'
import type { LegalPerson } from 'lib/entities'

export const computeLegalPerson = async (id: string): LegalPerson => {
  if (id[1] !== ':' || (id[0] !== 'o' && id[0] !== 'i'))
    throw new Error(`Invalid legalPerson id: ${id}`)
  const type = id[0] === 'o' ? 'organization' : 'individual'
  const personId = id.slice(1)
  let name: string
  if (type === 'organization') {
    name = (await organizationAdapter.getById(personId)).name
  } else {
    name = (await individualGateway.getById(personId)).fullName ?? ''
  }
  return {
    id,
    type,
    personId: id.slice(1),
    typeSymbol: accountTypeIcons[type],
    label: `${legalPerson.name} ${type}`
  }
}

export const computeLegalPersonFromId = (id: string): LegalPerson => {
  const legalPersonData = legalPersonAdapter.getById(id)
  return computeLegalPerson(legalPersonData)
}
