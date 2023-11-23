export const calculatePayableRatio = (dueAmount = 0, availableCash = 0): number => {
  return availableCash && dueAmount ? Math.min(1, availableCash / dueAmount) : 0
}
