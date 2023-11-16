import { formatCurrency } from './formatCurrency'

export const format = (value: any, type: string = 'string') => {
  switch (type) {
    case 'currency':
      return formatCurrency(value, 'EUR')
    default:
      return value
  }
}
