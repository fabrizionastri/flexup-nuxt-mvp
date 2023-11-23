import { sumNumbers } from './sumNumbers'
import { calculatePayableRatio } from './calculatePayableRatio'

export const calculatePayableRatioFromArray = (
  amounts: Array<number>,
  availableCash = 0
): number => {
  const totalAmount = sumNumbers(amounts)
  return calculatePayableRatio(totalAmount, availableCash)
}
