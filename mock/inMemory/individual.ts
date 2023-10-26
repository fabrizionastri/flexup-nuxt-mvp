import type { IndividualData, Individual } from 'entities/individual'

export const fabrizioIndividualData: IndividualData = {
  id: 'fabrizioIndividual',
  userId: 'fabrizioUser',
  firstName: 'Fabrizio',
  lastName: 'Nastri',
  dateOfBirth: new Date('1975-01-01')
  // sex: 'Male',
}

export const totoIndividualData: IndividualData = {
  id: 'totoIndividual',
  userId: 'totoUser',
  firstName: 'Toto',
  lastName: 'La Riflette',
  dateOfBirth: new Date('1985-01-01')
  // sex: 'Male',
}

export const individualDatas = [fabrizioIndividualData, totoIndividualData]

export const fabrizioIndividual: Individual = {
  ...fabrizioIndividualData,
  fullName: 'Fabrizio Nastri'
}

export const totoIndividual: Individual = {
  ...totoIndividualData,
  fullName: 'Toto La Riflette'
}

export const individuals = [fabrizioIndividual, totoIndividual]
