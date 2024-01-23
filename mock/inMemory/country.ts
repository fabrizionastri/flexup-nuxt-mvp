import type { Country } from 'entities/country'

export const franceData: Country = {
  id: 'FRA',
  name: 'France',
  iso2: 'FR'
}
export const belgiumData: Country = {
  id: 'BEL',
  name: 'Belgium',
  iso2: 'BE'
}
export const usaData: Country = {
  id: 'USA',
  name: 'United States',
  iso2: 'US'
}
export const swissData: Country = {
  id: 'CHE',
  name: 'Switzerland',
  iso2: 'CH'
}

export const countryDatas: Country[] = [franceData, belgiumData, usaData, swissData]
