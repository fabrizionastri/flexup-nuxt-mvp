import type { CommitmentData } from 'entities/commitment'
import type { ReserveName } from 'entities/reserve'
import type { AllocationReport } from 'entities/allocation'
import type { Priority } from './paymentTerms'
import type { Entity } from '.'

export const ResolutionMechanisms = {
  cap: 'cap',
  ratio: 'ratio',
  manual: 'manual'
} as const

export type ResolutionMechanism = keyof typeof ResolutionMechanisms

export const ResolutionNatures = [
  'outflow',
  'reserveTarget',
  'surplus',
  'topup',
  'buyback',
  'distribution'
] as const

export type ResolutionNature = (typeof ResolutionNatures)[number]

export const ResolutionNames = [
  'firmOutflow',
  'preferredOutflow',
  'baseReserveTarget',
  'flexOutflow',
  'flexReserveTarget',
  'superflexOutflow',
  'creditBuyback',
  'tokenBuyback',
  'distribution'
] as const

export type ResolutionName = (typeof ResolutionNames)[number]

export type AmountsRequested = {
  [key in ResolutionName]?: number
}

export type ResolutionStep = {
  resolutionName: ResolutionName
  nature: ResolutionNature
  priority?: Priority
  sources: ReserveName[]
  destination: ReserveName
}

export interface Resolution extends Entity {
  id: string
  accountId: string
  frequency: 'monthly' | 'annual'
  resolutionSteps: ResolutionStep
  status: 'new' | 'draft' | 'confirmed' | 'cancelled'
  mechanism: ResolutionMechanism
  dates?: {
    referenceDate?: Date
    cutoffDate?: Date
    runDate?: Date
  }
  tokenBuybackPrice?: number
  allocationReport?: AllocationReport
  commitments?: {
    selectedCommitments?: CommitmentData[]
    resolvedCommitments?: CommitmentData[]
    newIterations?: CommitmentData[]
  }
}
