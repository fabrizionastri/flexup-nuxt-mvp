import type { Country } from 'lib/entities'
import { createGetById } from './methods'

export const countryAdapter = {
  getById: createGetById<Country>('country')
}
