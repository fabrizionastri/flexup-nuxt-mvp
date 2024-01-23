import { countryDatas } from 'mock/inMemory'
import type { Entity } from '.'

export type CountryId = (typeof countryDatas)[number]['id']

export interface Country extends Entity {
  id: string // iso3
  name: string
  iso2: string
}
