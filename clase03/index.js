
const sumar = num1 => {
    return num1 + num1
} 
// = 
const sumar2 = num1 => num1 + num1 


// CALLBACKS


let saludo = () => {
    console.log("basta chicos")
}

function saludar(func){
    func()
}

saludar (saludo)



let finish = () => {
    console.log("la suma termino")
}

function suma (num1,num2, fini){
    setTimeout(() => {
    console.log(num1 + num2)
    }, 10000)
    fini()
}

suma(2, 3, finish)



const operacion = (num1, num2, operac) => {
    return operac(num1, num2)
}

const suma = (num1, num2) => {
    return num1 + num2
}
const resta = (num1, num2) => {
    return num1 - num2
}
const multiplicacion = (num1, num2) => {
    return num1 * num2
}
const division = (num1, num2) => {
    return num1 / num2
}

console.log(operacion(2,3,suma))
console.log(operacion(10,5,resta))
console.log(operacion(2,3,multiplicacion))
console.log(operacion(10,2,division))
console.log(Math.floor(operacion(10,3,division))) //el floor devuelve valor turncado 


// PROMESAS

function dividir (num1, num2)  {
    return new Promise((resolve,reject) =>{
        if (num2 ==0){
            reject("no se puede dividir por 0!")
        } else {
            resolve (num1 / num2)
        }
    })
}

dividir(4,2)
    .then((result) => {
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })
