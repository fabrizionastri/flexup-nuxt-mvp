export const sumNumberProps = <T extends Record<string, any>>(obj: T): number => {
  return Object.keys(obj)
    .map((k) => {
      const value = obj[k]
      return typeof value === 'number' ? value : 0
    })
    .reduce((acc, value) => acc + value, 0)
}
