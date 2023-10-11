export const round6 = (value: number): number => {
  return value ? Math.round(value * 1000000) / 1000000 : 0
}
