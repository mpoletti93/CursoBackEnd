const http = require('https')

const server = http.createServer((request,response) =>{
    const mensaje = getMensajeSegunHora()
    response.end()
})

function getMensajeSegunHora() {
    const hora = new Date().getHours()
    if (hora >= 6 && hora <= 12){
        return 'Buenos Dias!'
    }
    if (hora >= 13 && hora <= 19){
        return 'Buenas Tardes!'
    }
    return 'Buenas Noches!'
}

const PORT = 8080

const connectedServer = server.listen(PORT, () => {
    console.log('Servidor escuchando en el '+ PORT)
})