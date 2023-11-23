export const isInBound = (
  source: number,
  minimum: number = Number.MIN_VALUE,
  maximum: number = Number.MAX_VALUE
): boolean => {
  return source >= minimum && source <= maximum
}
