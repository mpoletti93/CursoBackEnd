//Calculadora de Edad

const moment = require('moment')

const hoy = moment()

console.log (hoy)

const nacimiento = moment("07/09/1993", "DD/MM/YYYY")

const diferenciaAnios = hoy.diff(nacimiento, 'years')
const diferenciaDias = hoy.diff(nacimiento, "days")

console.log(`hoy es ${hoy.format("DD/MM/YYYY")}`)
console.log(`naci el ${nacimiento.format("DD/MM/YYYY")}`)
console.log(`Desde mi nacimiento han pasado ${diferenciaAnios} anios`)
console.log(`Desde mi nacimiento han pasado ${diferenciaDias} dias`)