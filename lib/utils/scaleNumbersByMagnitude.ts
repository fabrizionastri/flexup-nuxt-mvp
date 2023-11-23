export const scaleNumbersByMagnitude = (values: number[], magnification: number): number[] => {
  const multiplier = Math.pow(10, Math.floor(magnification))
  return values.map((numb) => numb * multiplier)
}
