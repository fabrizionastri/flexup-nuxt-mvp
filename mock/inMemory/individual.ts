import { IndividualData, Individual } from 'entities/individual'

export const fabrizioIndividualData: IndividualData = {
  id: 'fabrizioIndividual',
  firstName: 'Fabrizio',
  lastName: 'Nastri',
  dateOfBirth: new Date('1975-01-01')
}

export const totoIndividualData: IndividualData = {
  id: 'totoIndividual',
  firstName: 'Toto',
  lastName: 'La Riflette',
  dateOfBirth: new Date('1985-01-01')
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
