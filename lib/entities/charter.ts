import type { Entity } from '.'

export interface CharterData extends Entity {
  id: string
  accountId: string
  startDate: Date
  holderAccountId: string
  secretaryAccountId: string
  mainResolutionDate: number // a number between 1 and 28
  secondaryResolutionDate: number // at least 10 days after / before mainResolutionDate
  tokenInitialIndex: number
  tokenIndexingRate: number // the annual rate at which the token index is updated, given in decimal form (e.g. 0.1 for 10%)
  description: string
  creationSignatures: SignatureData[]
}

export interface CharterWithCompute extends CharterData {
  holderName: string
  secretaryName: string
  tokenIndexDate: Date // the date at which the token index was last updated, generally the current date
  tokenIndexValue: number // the value of the token index on the index date
}
