import { toSnakeCase } from './toSnakeCase'

let testCases = [
  ['ThisIsATest', 'this_is_a_test'],
  ['This is a Test', 'this_is_a_test'],
  ['This_is_a_test', 'this_is_a_test'],
  ['This_is a _Test', 'this_is_a_test'],
  ['BIC/SWIFT', 'bic_swift'],
  ['ID Account', 'id_account'],
  ['ID_Account', 'id_account'],
  ['IDAccount', 'id_account'],
  ['PostgreSQL', 'postgre_sql'],
  ['PostgreSQLDatabase', 'postgre_sql_database'],
  ['KContractPaymentStructure', 'k_contract_payment_structure'],
  ['LQAccountCharter', 'lq_account_charter'],
  ['ISBNAccount', 'isbn_account']
]

describe('toSnakeCase', () => {
  testCases.forEach(([inputStr, expectedOutput]) => {
    it(`should convert '${inputStr}' to '${expectedOutput}'`, () => {
      const result = toSnakeCase(inputStr)
      expect(result).toEqual(expectedOutput)
    })
  })
})
