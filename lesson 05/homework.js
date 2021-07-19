const name = 'Максим';
const job = 'Front-End разработчик';
const result1 = name + ' ' + job;
const result2 = `${name} ${job}`
//console.log(result1)
//console.log(result2)

// =========Task1==========
const myName = 'Vladimir'
const programmingLanguage = 'JS'
const courseCreatorName = 'V.Minin'
const reasonText = 'Можно хорошо зарабатывать'
const numberOfMonth = '48'

let btn1 = document.createElement('button')
let btnText1 = document.createTextNode('Выполнить задание 1')
btn1.appendChild(btnText1)
document.body.appendChild(btn1).onclick = () => {
    console.log(
        `Всем привет! Меня зовут ${myName}. 
    Сейчас я изучаю язык программирования ${programmingLanguage} 
    на курсе по ${programmingLanguage} у ${courseCreatorName}. 
    Я хочу стать веб-разработчиком, потому что ${reasonText}. 
    До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. 
    Я уверен, что пройду данный курс до конца!`)
}

// =========Task2==========
let myInfoText = 'JavaScript'
let btn2 = document.createElement('button')
let btnText2 = document.createTextNode('Выполнить задание 2')
btn2.appendChild(btnText2)
document.body.appendChild(btn2).onclick = () => {
    task2(myInfoText)
    function task2(val) {
        myInfoText = val.replaceAll().toUpperCase()
        console.log('myInfoText - ', myInfoText)
        console.log('Длина строки - ', myInfoText.length)
        console.log('Первый символ - ', myInfoText[0])
        console.log('Последний символ - ', myInfoText[myInfoText.length - 1])
    }
}

// =========Task3==========
let btn3 = document.createElement('button')
let btnText3 = document.createTextNode('Выполнить задание 3')
btn3.appendChild(btnText3)

document.body.appendChild(btn3).onclick = () => {
    promQ3()
}
function promQ3 () {
    let userName = prompt('Как вас зовут?')
    alert(`Вас зовут - ${userName.replaceAll().toLowerCase().trim()}`)
}

// =========Task4==========
let btn4 = document.createElement('button')
let btnText4 = document.createTextNode('Выполнить задание 4')
btn4.appendChild(btnText4)
document.body.appendChild(btn4).onclick = () => {
    promQ4()
}
function promQ4 () {
    let userName = prompt('Как вас зовут?')
    let userAge = prompt('Сколько вам лет? (Проверки на ввод НЕТ, вводите только цифры!)')
    alert(`Вас зовут - ${userName.replaceAll().toLowerCase().trim()} и вам ${Number(userAge.trim())} лет`)
}

// =========Task5==========
let btn5 = document.createElement('button')
let btnText5 = document.createTextNode('Выполнить задание 5')
btn5.appendChild(btnText5)
document.body.appendChild(btn5).onclick = () => {
    promQ5()
}
function promQ5 () {
    let userString = prompt('Введите текст для обрезки')
    let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки (Вводите только цифры!)')
    let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки (Вводите только цифры!)')
    alert(`Итог после обрезки получился - ${userString.trim().slice(startSliceIndex, endSliceIndex)}`)
}

// =========Task6==========
let btn6 = document.createElement('button')
let btnText6 = document.createTextNode('Выполнить задание 6')
btn6.appendChild(btnText6)
document.body.appendChild(btn6).onclick = () => {
    promQ6()
}
function promQ6 () {
    let userText = prompt('Введите текст')
    let wordFromText = prompt('Введите слово из текста')
    let indexOfWord = userText.indexOf(wordFromText)
    alert(`Результат - ${userText.trim().slice(0, indexOfWord)}`)
}

// =========Task7==========
let btn7 = document.createElement('button')
let btnText7 = document.createTextNode('Доп. задание')
btn7.appendChild(btnText7)
document.body.appendChild(btn7).onclick = () => {
    promQ7()
}
let javaScriptDescription = `"JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."`
function promQ7 () {
    let textLength = javaScriptDescription.length
    let newStr = javaScriptDescription.slice(1, textLength/2).replaceAll('a', 'A').replaceAll(' ', '').repeat(3)
    console.log(`Строка - ${newStr}`)
    let half = newStr.length/2
    console.log(`Символ посередине - ${newStr.slice(half, half+1)}`)
}
