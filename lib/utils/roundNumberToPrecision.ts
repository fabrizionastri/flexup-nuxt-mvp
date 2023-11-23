export const roundNumberToPrecision = (value: number, precision: number): number => {
  return Number(value.toFixed(precision))
}
