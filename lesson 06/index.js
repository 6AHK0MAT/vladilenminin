// =========Task1==========

let btn1 = document.createElement('button')
let btnText1 = document.createTextNode('Выполнить задание 1')
btn1.appendChild(btnText1)
document.body.appendChild(btn1).onclick = () => {
    const login = 'the_best_user'
    const password = 'existedUserPassword'
    let inputLogin = prompt('Введите свой логин').trim()
    let inputPassword = prompt('Введите Пароль').trim()
    if (login === inputLogin && password === inputPassword){
        alert('Добро пожаловать, userLogin!')
    } else {
        alert('Логин или пароль не совпадают')
    }
}

// =========Task2==========

let btn2 = document.createElement('button')
let btnText2 = document.createTextNode('Выполнить задание 2')
btn2.appendChild(btnText2)
document.body.appendChild(btn2).onclick = () => {
    let i = 0
    let j = 0
    while (i < 3) {
        let newStudentWhile = prompt('Введите имя нового студента! (while)');
        newStudentWhile = newStudentWhile.trim();
        if (newStudentWhile) {
            alert(`Добро пожаловать, ${newStudentWhile}!`)
        }
        i++
    }
    do {
        let newStudentdoWhile = prompt('Введите имя нового студента! (doWhile)');
        newStudentdoWhile = newStudentdoWhile.trim();
        if (newStudentdoWhile) {
            alert(`Добро пожаловать, ${newStudentdoWhile}!`)
        }
        j++
    }
    while (j < 3)
}

// =========Task3==========

let btn3 = document.createElement('button')
let btnText3 = document.createTextNode('Выполнить задание 3')
btn3.appendChild(btnText3)
document.body.appendChild(btn3).onclick = () => {
    let val = 100
    let sum = 0
    for (let i = 0; i <= val; i++) {
        sum = sum + i
    }
    console.log('sum - ', sum)
}

// =========Task4==========

let btn4 = document.createElement('button')
let btnText4 = document.createTextNode('Выполнить задание 4')
btn4.appendChild(btnText4)
document.body.appendChild(btn4).onclick = () => {
    let q1 = 'Сколько будет 2 + 2?'
    let q2 = 'Сколько будет 2 * 2?'
    let q3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?'
    let q4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?'
    let q5 = 'Сколько будет 2 + 2 * 2?'
    let correctAnsw = 0
    let incorrectAnsw = 0

    let a1 = prompt(q1)
    let a2 = prompt(q2)
    let a3 = prompt(q3)
    let a4 = prompt(q4)
    let a5 = prompt(q5)

    if (+a1 === 4){
        correctAnsw++
    } else {
        incorrectAnsw++
    }
    if (+a2 === 4){
        correctAnsw++
    } else {
        incorrectAnsw++
    }
    if (+a3 === 1){
        correctAnsw++
    } else {
        incorrectAnsw++
    }
    if (+a4 === 12){
        correctAnsw++
    } else {
        incorrectAnsw++
    }
    if (+a5 === 6){
        correctAnsw++
    } else {
        incorrectAnsw++
    }
    alert(`Правильных ответов - ${correctAnsw}, неправильных ответов - ${incorrectAnsw}`)

}

// =========Task5==========

let btn5 = document.createElement('button')
let btnText5 = document.createTextNode('Выполнить задание 5')
btn5.appendChild(btnText5)
document.body.appendChild(btn5).onclick = () => {
    let clientName = 'Игорь'
    let clientSpentForAllTime = 110
    let clientSpentToday = prompt('Введите сумму которую нужно выставить за обед')
    clientSpentForAllTime = +clientSpentToday + clientSpentForAllTime
    let discount = 0
    if (clientSpentForAllTime > 100 && clientSpentForAllTime <=300) {
        discount = 10
    }
    if (clientSpentForAllTime > 300 && clientSpentForAllTime <=500) {
        discount = 20
    }
    if (clientSpentForAllTime > 500 ) {
        discount = 30
    }
    alert(`
    Спасибо, ${clientName}! К оплате ${clientSpentToday}$. 
    За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.
    С учетом вашей скидки - ${discount}%. Итого к оптале - ${clientSpentToday - clientSpentToday*discount/100}$
    `)
}

// =========Task6==========

let btn6 = document.createElement('button')
let btnText6 = document.createTextNode('Выполнить задание 6')
btn6.appendChild(btnText6)
document.body.appendChild(btn6).onclick = () => {
    let clientName = prompt('Введите имя клиента')

    clientSpentForAllTimeFn()

    function clientSpentForAllTimeFn (){
        let clientSpentForAllTime = (prompt('Введите сумму которую клиент потратил за все время'))
        if (isNaN(Number(clientSpentForAllTime))) {
            alert('Сумму необходимо вводить только цифрами! Пожалуйста повторите ввод.')
            clientSpentForAllTimeFn()
        }
        clientSpentTodayFn(clientSpentForAllTime)
    }

    function clientSpentTodayFn (clientSpentForAllTime){
        let clientSpentToday = prompt('Введите сумму которую нужно выставить за обед')
        if (isNaN(Number(clientSpentToday))) {
            alert('Сумму необходимо вводить только цифрами! Пожалуйста повторите ввод.')
            clientSpentTodayFn()
        }
        dialogFn(clientSpentForAllTime, clientSpentToday)
    }

    function dialogFn(clientSpentForAllTime, clientSpentToday){
        clientSpentForAllTime = +clientSpentToday + +clientSpentForAllTime
        let discount = 0
        if (clientSpentForAllTime > 100 && clientSpentForAllTime <=300) {
            discount = 10
        }
        if (clientSpentForAllTime > 300 && clientSpentForAllTime <=500) {
            discount = 20
        }
        if (clientSpentForAllTime > 500 ) {
            discount = 30
        }
        alert(`
    Спасибо, ${clientName}! К оплате ${clientSpentToday}$. 
    За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.
    С учетом вашей скидки - ${discount}%. Итого к оптале - ${clientSpentToday - clientSpentToday*discount/100}$
    `)
    }
}

// =========Task7==========

let btn7 = document.createElement('button')
let btnText7 = document.createTextNode('Выполнить задание 7 (Дополнительное')
btn7.appendChild(btnText7)
document.body.appendChild(btn7).onclick = () => {

    function isValidPassword(passw) {
        var pattern = new RegExp(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{3,20}/g);
        return pattern.test(passw);
    }
    passInput()
    function passInput(){
        let newPass = prompt('Введите пароль')
        if (isValidPassword(newPass)) {
            alert('Вы ввели пароль в соответсвии с условиями')
        } else {
            alert('Пароль не соответсвует условиям, введите заново')
            passInput()
        }
    }
}
