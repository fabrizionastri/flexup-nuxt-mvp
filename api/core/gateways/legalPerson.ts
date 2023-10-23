export const computeLegalPerson = (legalPerson: string): LegalPerson => {
  if (id[1] !== ':' || (id[0] !== 'o' && id[0] !== 'i'))
    throw new Error(`Invalid legalPerson id: ${id}`)
  type = id[0] === 'o' ? 'organization' : 'individual'
  return {
    ...legalPerson,
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
