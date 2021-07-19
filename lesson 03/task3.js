let ageOfPerson1 = 18
let ageOfPerson2 = '20'

let nameOfAnimal1 = null
let nameOfAnimal2 = 'Charlie'

const bestProgrammingLanguage1 = 'JavaScript'
doNotChange(bestProgrammingLanguage1)
const bestProgrammingLanguage2 = 'Java'
doNotChange(bestProgrammingLanguage2)

let initialValue1
let initialValue2 = 0

var isJavaScriptProgrammer1 = true
sayOld()
var isJavaScriptProgrammer2 = false
sayOld()

let helloText1 = 'Hello!'
let helloText2 = 'Привет!'

ageOfPerson2 = ageOfPerson1
console.log('ageOfPerson2 - ', ageOfPerson2, ' ', 'typeof - ', typeof ageOfPerson2)

nameOfAnimal2 = nameOfAnimal1
console.log('nameOfAnimal2 - ', nameOfAnimal2, ' ', 'typeof - ', typeof nameOfAnimal2)

initialValue2 = initialValue1
console.log('initialValue2 - ', initialValue2, ' ', 'typeof - ', typeof initialValue2)

helloText2 = helloText1
console.log('nameOfAnimal2 - ', helloText2, ' ', 'typeof - ', typeof helloText2)

function sayOld () {
    console.log('var является устаревшим')
}

function doNotChange (value) {
    console.log('Переменную с const переопределить нельзя')
    console.log(value, ' ', 'typeof - ', typeof value)
}
