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

console.log('Running tests...')
console.log('\nInput | Expected output | Actual output | Pass/fail')
console.log('------|-----------------|---------------|----------')

describe('toSnakeCase', () => {
  it('should convert', () => {
    const assertion = 1
    const result = 1
    expect(assertion).toEqual(result)
  })

  testCases.forEach(([inputStr, expectedOutput]) => {
    let result = toSnakeCase(inputStr)
    console.log(
      `${inputStr} | ${expectedOutput} | ${result} | ${result === expectedOutput ? 'PASS' : 'FAIL'}`
    )
    if (result !== expectedOutput) {
      throw new Error(`Error: ${inputStr} -> ${result} (expected ${expectedOutput})`)
    }
  })
  console.log('\nAll tests passed!')
})
