let a1 = console.log
transformToAll(a1)

let a2 = { name: 'Maxim' }
transformToAll(a2)

let a3 = Symbol('key')
transformToAll(a3)

let a4 = Number
transformToAll(a4)

let a5 = ''
transformToAll(a5)

let a6 = 0
transformToAll(a6)

let a7 = -10
transformToAll(a7)

let a8 = '-105'
transformToAll(a8)


function transformToAll (val){
    if (typeof val === 'symbol'){
        console.log(val, String(val), Boolean(val))
    }else {
        console.log(val, String(val), Number(val), Boolean(val))
    }

}
