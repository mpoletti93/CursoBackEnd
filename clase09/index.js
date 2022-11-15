//CLASE 09 MOTOR DE PLANTILLA
const express = require ('express')

const app = express()

app.use(express.static('public'))

app.listen(8080)
//index.html Handlebar library
