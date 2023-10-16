/*
Run this file from this local directory "ts-node test.ts"
It will generate a warning but will work
*/

import data from './data.json' assert { type: 'json' }

console.log('Hello')
console.log(data)
