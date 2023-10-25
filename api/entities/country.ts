import { countryDatas } from 'mock/inMemory'

export type CountryId = (typeof countryDatas)[number]['id']

export interface CountryData {
  id: string // iso3
  name: string
  iso2: string
}
