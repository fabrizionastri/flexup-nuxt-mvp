import { roundNumberToPrecision } from './roundNumberToPrecision'

export const calculateInterest = (interestBasis = 0, interestRate = 0, duration = 0): number => {
  return roundNumberToPrecision(
    interestBasis * (Math.pow(1 + interestRate, duration / 365.25) - 1),
    2
  )
}
