import { scaleNumbersByMagnitude } from './scaleNumbersByMagnitude'
import { roundAndAdjustNumbersToMatchRoundedSum } from './roundAndAdjustNumbersToMatchRoundedSum'
import { roundNumbersToPrecision } from './roundNumbersToPrecision'

export const roundAndAdjustNumbersToPrecision = (values: number[], precision: number): number[] => {
  return roundNumbersToPrecision(
    scaleNumbersByMagnitude(
      roundAndAdjustNumbersToMatchRoundedSum(scaleNumbersByMagnitude(values, precision)),
      -precision
    ),
    precision
  )
}
