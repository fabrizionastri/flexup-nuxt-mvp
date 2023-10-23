export const getEndOfMonth = (date: Date | null = null): Date | null => {
  if (!date) return null
  const year = date.getFullYear()
  const month = date.getMonth()
  const endOfMonth = new Date(year, month + 1, 1, 0, 0, 0, 0)
  endOfMonth.setMilliseconds(endOfMonth.getMilliseconds() - 1)
  return endOfMonth
}

export const getMiddleDate = (
  startDate: Date | null = null,
  finishDate: Date | null = null
): Date | null => {
  if (!startDate) return finishDate ?? null
  if (!finishDate) return startDate
  const startNr = startDate.getTime ? startDate.getTime() : 0
  const finishNr = finishDate.getTime ? finishDate.getTime() : 0
  if (!startNr || !finishNr) return null
  const midNr = (startNr + finishNr) / 2
  return new Date(midNr)
}

export const isValidDate = (date: unknown = null): boolean => {
  if (!(date instanceof Date)) return false
  return !isNaN(date.getTime())
}

export const isValidNumber = (value: any = null): boolean => {
  if (!value && typeof value !== 'number') return false
  return !isNaN(Number(value))
}

export const isSameDay = (d1: Date, d2: Date): boolean => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
}

export const today = (): Date => {
  return new Date(new Date().toISOString().split('T')[0])
}

export const dateOnly = (dateTime: Date): Date => {
  return new Date(dateTime.toISOString().split('T')[0])
}

export const isInBound = (
  source: number,
  minimum: number = Number.MIN_VALUE,
  maximum: number = Number.MAX_VALUE
): boolean => {
  return source >= minimum && source <= maximum
}

export const isInBoundPercent = (source = 0): boolean => {
  return isInBound(source, 0, 100)
}

export const getNumberForKey = (
  obj: any = {},
  key: string | symbol | number = '',
  errorValue = 0
): number => {
  const keyValue = obj[key]
  const isNumber =
    typeof keyValue === 'number' || (typeof keyValue === 'string' && !isNaN(Number(keyValue)))
  return Object.hasOwn(obj, key) && isNumber ? Number(keyValue) : Number(errorValue)
}

export const getDateForKey = (
  obj: any = {},
  key: string | symbol | number = '',
  errorValue: Date | null = null
): Date | null => {
  const keyValue = obj[key]
  const isDate =
    keyValue instanceof Date || (typeof keyValue === 'string' && !isNaN(Date.parse(keyValue)))

  return Object.hasOwn(obj, key) && isDate ? new Date(keyValue) : errorValue
}

export const sumNumbers = (values: number[]): number => {
  return values.reduce((a, b) => a + b, 0)
}

export const sumCappedNumbers = (values: number[], cap: number): number => {
  return values.reduce((sum, numb) => sum + Math.min(numb, cap), 0)
}

export const scaleNumbersByMagnitude = (values: number[], magnification: number): number[] => {
  const multiplier = Math.pow(10, Math.floor(magnification))
  return values.map((numb) => numb * multiplier)
}

export const roundNumberToPrecision = (value: number, precision: number): number => {
  return Number(value.toFixed(precision))
}

export const roundNumbersToPrecision = (values: number[], precision: number): number[] => {
  return values.map((numb) => roundNumberToPrecision(numb, precision))
}

export const roundAndAdjustNumbersToPrecision = (values: number[], precision: number): number[] => {
  return roundNumbersToPrecision(
    scaleNumbersByMagnitude(
      roundAndAdjustNumbersToMatchRoundedSum(scaleNumbersByMagnitude(values, precision)),
      -precision
    ),
    precision
  )
}

export const roundAndAdjustNumbersToMatchRoundedSum = (values: number[]): number[] => {
  const sumOfValues = sumNumbers(values)
  const roundedSumOfValues = Math.round(sumOfValues)
  const roundedValues = values.map(Math.round)
  let delta = roundedSumOfValues - sumNumbers(roundedValues)

  const sortedValues = values
    .map((value, index) => ({
      value,
      index,
      decimalPart: Math.abs(value - Math.round(value))
    }))
    .sort((a, b) => b.decimalPart - a.decimalPart)

  sortedValues.forEach(({ index }) => {
    if (delta === 0) return

    const currentAdjustment = delta > 0 ? 1 : -1
    roundedValues[index] += currentAdjustment
    delta -= currentAdjustment
  })

  return roundedValues
}

export const getNumberByKey = (obj: any, key = ''): any => {
  return { [key]: getNumberForKey(obj, key) }
}

export const getNumberByKeys = (obj: any, keys: Array<string> = ['']): Record<string, number> => {
  const result: Record<string, number> = {}
  keys.forEach((key) => (result[key] = getNumberForKey(obj, key)))
  return result
}

export const getTotalForKey = (arr: Array<any>, key: string): number => {
  return arr.reduce((sum, obj) => sum + getNumberForKey(obj, key), 0)
}

export const getTotalsByKeys = (
  arr: Array<any>,
  keys: Array<string> = ['']
): Record<string, number> => {
  const result: Record<string, number> = {}
  keys.forEach((key) => (result[key] = getTotalForKey(arr, key)))
  return result
}

export const sumValuesForKeys = (obj: any, keys: Array<string> = ['']): number => {
  return keys.reduce((sum, key) => sum + getNumberForKey(obj, key), 0)
}

export const calculatePayableRatio = (dueAmount = 0, availableCash = 0): number => {
  return availableCash && dueAmount ? Math.min(1, availableCash / dueAmount) : 0
}

export const calculatePayableRatioFromArray = (
  amounts: Array<number>,
  availableCash = 0
): number => {
  const totalAmount = sumNumbers(amounts)
  return calculatePayableRatio(totalAmount, availableCash)
}

// TODO: implement
export const assignPayableAmountFromRatio = (): void => {
  throw new Error('Not implemented')
}

export const calculatePayableCapFromArray = (
  amounts: Array<number>,
  availableCash = 0,
  precision = 2
): number => {
  const totalAmount = roundNumberToPrecision(sumNumbers(amounts), precision)
  if (!totalAmount || !availableCash || amounts.length === 0) return 0

  if (availableCash >= totalAmount) return Math.max(...amounts)

  let cap = availableCash / amounts.length
  let sumCappedAmounts = 0
  let numberOfAmountsPaidinFull = 0

  while (Math.abs(sumCappedAmounts - availableCash) > 0.01) {
    sumCappedAmounts = 0
    numberOfAmountsPaidinFull = 0
    amounts.forEach((amount) => {
      if (amount <= cap) {
        sumCappedAmounts += amount
        numberOfAmountsPaidinFull++
      } else {
        sumCappedAmounts += cap
      }
    })

    if (sumCappedAmounts < availableCash) {
      const denominator = amounts.length - numberOfAmountsPaidinFull
      if (denominator !== 0) {
        cap += (availableCash - sumCappedAmounts) / denominator
      }
    } else {
      if (numberOfAmountsPaidinFull !== 0) {
        cap -= (sumCappedAmounts - availableCash) / numberOfAmountsPaidinFull
      }
    }
    // attempt++
  }

  cap = roundNumberToPrecision(cap, precision)
  return cap
}

// TODO: implement
export const assignPayableAmountFromCap = (): void => {
  throw new Error('Not implemented')
}

export const getTotalAmountDue = (commitments: Array<any>): number => {
  return getTotalForKey(commitments, 'dueAmount')
}

export const clone = <T extends object>(source: T): T => {
  return JSON.parse(JSON.stringify(source))
}

export const sumNumberProps = <T extends object>(obj: T): number => {
  type Key = keyof T
  return Object.keys(obj)
    .map((k) => (typeof obj[k as Key] === 'number' ? obj[k as Key] : 0))
    .reduce((acc, value) => acc + value, 0)
}

export const calculateDuration = (
  startDate: Date | null = null,
  dueDate: Date | null = null
): number | null => {
  if (!startDate || !dueDate) return null
  return Math.round((dueDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24))
}

export const calculateInterest = (interestBasis = 0, interestRate = 0, duration = 0): number => {
  return roundNumberToPrecision(
    interestBasis * (Math.pow(1 + interestRate, duration / 365.25) - 1),
    2
  )
}

/*
export const sumOnArray<T extends object>(obj: T, array: Array<keyof T>): number {
  type Key = keyof T
  return array.map((k) => (typeof obj[k as Key] === 'number' ? obj[k] : 0))
    .reduce((acc, value) => acc + value, 0)
}
*/
