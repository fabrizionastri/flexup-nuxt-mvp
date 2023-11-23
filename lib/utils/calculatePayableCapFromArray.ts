import { roundNumberToPrecision } from './roundNumberToPrecision'
import { sumNumbers } from './sumNumbers'

export const calculatePayableCapFromArray = (
  amounts: Array<number>,
  availableCash = 0,
  precision = 2
): number => {
  const totalAmount = roundNumberToPrecision(sumNumbers(amounts), precision)
  if (!totalAmount || !availableCash || amounts.length === 0) return 0

  if (availableCash >= totalAmount) return Math.max(...amounts)

  let cap = availableCash / amounts.length
  let sumCappedAmounts = 0
  let numberOfAmountsPaidinFull = 0

  while (Math.abs(sumCappedAmounts - availableCash) > 0.01) {
    sumCappedAmounts = 0
    numberOfAmountsPaidinFull = 0
    amounts.forEach((amount) => {
      if (amount <= cap) {
        sumCappedAmounts += amount
        numberOfAmountsPaidinFull++
      } else {
        sumCappedAmounts += cap
      }
    })

    if (sumCappedAmounts < availableCash) {
      const denominator = amounts.length - numberOfAmountsPaidinFull
      if (denominator !== 0) {
        cap += (availableCash - sumCappedAmounts) / denominator
      }
    } else {
      if (numberOfAmountsPaidinFull !== 0) {
        cap -= (sumCappedAmounts - availableCash) / numberOfAmountsPaidinFull
      }
    }
    // attempt++
  }

  cap = roundNumberToPrecision(cap, precision)
  return cap
}
