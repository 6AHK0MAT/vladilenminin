// 1. string
const name = 'Marta'
transformVal(name)

// 2. number
const age = 18
transformVal(age)

// 3. boolean
const isRed = true
transformVal(isRed)

// 4. null - пусто, значение не известно
const getName = null
transformVal(getName)

// 5. underfined - значение не было присловено
const setName = undefined
transformVal(setName)

// 6. object
const brakfast = {dish: 'eggs', drink: 'coffe'}
transformVal(brakfast)

// 7. bigint - большое число 2^53 -1
const bigN = BigInt(10)
transformVal(bigN)

// 8. symbol
const idSym = Symbol('id')
transformVal(idSym)


function transformVal (val) {
    if (typeof val === "symbol") {
        console.log(val,  ' - Boolean(), String() - ', Boolean(val), String(val))
    } else {
        console.log(val + ' - Number(), Boolean(), String() - ', Number(val), Boolean(val), String(val))
    }
}
