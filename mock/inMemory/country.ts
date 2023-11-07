import type { CountryData } from 'entities/country'

export const franceData: CountryData = {
  id: 'FRA',
  name: 'France',
  iso2: 'FR'
}
export const belgiumData: CountryData = {
  id: 'BEL',
  name: 'Belgium',
  iso2: 'BE'
}
export const usaData: CountryData = {
  id: 'USA',
  name: 'United States',
  iso2: 'US'
}
export const swissData: CountryData = {
  id: 'CHE',
  name: 'Switzerland',
  iso2: 'CH'
}

export const countryDatas: CountryData[] = [franceData, belgiumData, usaData, swissData]
