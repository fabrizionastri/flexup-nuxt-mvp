import { sumNumbers } from './sumNumbers'

export const roundAndAdjustNumbersToMatchRoundedSum = (values: number[]): number[] => {
  const sumOfValues = sumNumbers(values)
  const roundedSumOfValues = Math.round(sumOfValues)
  const roundedValues = values.map(Math.round)
  let delta = roundedSumOfValues - sumNumbers(roundedValues)

  const sortedValues = values
    .map((value, index) => ({
      value,
      index,
      decimalPart: Math.abs(value - Math.round(value))
    }))
    .sort((a, b) => b.decimalPart - a.decimalPart)

  sortedValues.forEach(({ index }) => {
    if (delta === 0) return

    const currentAdjustment = delta > 0 ? 1 : -1
    roundedValues[index] += currentAdjustment
    delta -= currentAdjustment
  })

  return roundedValues
}
