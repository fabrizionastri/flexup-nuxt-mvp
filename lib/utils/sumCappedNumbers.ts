export const sumCappedNumbers = (values: number[], cap: number): number => {
  return values.reduce((sum, numb) => sum + Math.min(numb, cap), 0)
}
