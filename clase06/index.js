// Servidores HTTPS 

const http = require('https')

const server = http.createServer((mensaje,respuesta) =>{
    respuesta.end('Hola mariano')
})

const connection = server.listen(8080,() =>{
    console.log('Servidor escuchando en el 8080')
})