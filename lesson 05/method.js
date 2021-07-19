const animal = 'Lion'
console.log('up', animal.toUpperCase(animal))

//Найти символы
const txt = 'Мой любимый язык JS'
console.log('indexOf', txt.indexOf('JS'))
console.log('includes', txt.includes('JS')) //true

//Обрезка строки
const newTxt = 'Мой любимый язык JS'
console.log('slice', newTxt.slice(1, 5))
console.log('slice', newTxt.substring(1, 5))

//Замена символов
console.log('replace', newTxt.replace('JS', 'Java'))
console.log('replaceAll', newTxt.replaceAll('M', 'N'))
