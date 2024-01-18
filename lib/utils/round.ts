export const round6 = (value: number): number => {
  return value ? Math.round(value * 1000000) / 1000000 : 0
}

export const round4 = (value: number): number => {
  return value ? Math.round(value * 10000) / 10000 : 0
}

export const round2 = (value: number): number => {
  return value ? Math.round(value * 100) / 100 : 0
}
