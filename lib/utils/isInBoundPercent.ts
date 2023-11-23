import { isInBound } from './isInBound'

export const isInBoundPercent = (source = 0): boolean => {
  return isInBound(source, 0, 100)
}
