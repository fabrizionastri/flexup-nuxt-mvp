import { roundNumberToPrecision } from './roundNumberToPrecision'

export const roundNumbersToPrecision = (values: number[], precision: number): number[] => {
  return values.map((numb) => roundNumberToPrecision(numb, precision))
}
