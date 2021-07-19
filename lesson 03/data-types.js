// 1. string
const name = 'Marta'
console.log('name - ', name, ' ', 'typeof - ', typeof name)

// 2. number
const age = 18
console.log('age - ', age, ' ', 'typeof - ', typeof age)

// 3. boolean
const isRed = true
console.log('isRed - ', isRed, ' ', 'typeof - ', typeof isRed)

// 4. null - пусто, значение не известно
const getName = null
console.log('getName - ', getName, ' ', 'typeof - ', typeof getName)

// 5. underfined - значение не было присловено
const setName = undefined
console.log('setName - ', setName, ' ', 'typeof - ', typeof setName)

// 6. object
const brakfast = {dish: 'eggs', drink: 'coffe'}
console.log('brakfast - ', brakfast, ' ', 'typeof - ', typeof brakfast)

// 7. symbol
const idSym = Symbol('id')
console.log('idSym - ', idSym, ' ', 'typeof - ', typeof idSym)

// 8. bigint - большое число 2^53 -1
const bigN = BigInt(10)
console.log('bigN - ', bigN, ' ', 'typeof - ', typeof bigN)
