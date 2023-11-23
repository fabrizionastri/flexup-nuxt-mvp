export const today = (): Date => {
  return new Date(new Date().toISOString().split('T')[0])
}
