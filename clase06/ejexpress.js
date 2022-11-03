const express = require('express')

const app = express()

app.get('/', (req, res) =>{
    res.send('Hola Mariano')
})

const server = app.listen (8080, () => {
    console.log('Servidor escuchando 8080')
})

server.on('error', error => console.log('hubo un error ' + error))