//require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config()

const modo = process.env.MODE ?? 'prod'
const puerto = process.env.PORT ?? 0
const debug = process.env.DEBUG == 'true' ? true : false

console.log({
    modo,
    puerto,
    debug
})
/*
dotenv.config({
   path:
       process.env.MODO == 'byn'
           ? path.resolve(__dirname, 'byn.env')
           : path.resolve(__dirname, 'colores.env')
})
*/