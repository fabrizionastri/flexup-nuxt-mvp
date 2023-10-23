export const fabrizioIndividialData = {
  id: 'fabrizioIndividual',
  firstName: 'Fabrizio',
  lastName: 'Nastri',
  dateOfBirth: new Date('1975-01-01')
}

export const totoIndividialData = {
  id: 'totoIndividual',
  firstName: 'Toto',
  lastName: 'La Riflette',
  dateOfBirth: new Date('1985-01-01')
}

export const individualDatas = [fabrizioIndividialData, totoIndividialData]

export const fabrizioIndividual = {
  ...fabrizioIndividialData,
  fullName: 'Fabrizio Nastri'
}

export const totoIndividual = {
  ...totoIndividialData,
  fullName: 'Toto La Riflette'
}

export const individuals = [fabrizioIndividual, totoIndividual]
