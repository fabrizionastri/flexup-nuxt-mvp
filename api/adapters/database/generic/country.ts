import type { CountryData } from 'lib/entities'
import { createGetById } from './methods'

export const countryAdapter = {
  getById: createGetById<CountryData>('country')
}
