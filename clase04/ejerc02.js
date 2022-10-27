const fs = require('fs')

try{
    fs.writeFileSync('./fyh.txt', new Date().toLocaleString() + "\n" +  "esto es el horario de ahora") //con esta funcion escribo sobre un
} catch (err) {
    throw new Error("Error en la escritura del archivo " + err)
}

try { 
    const fechayhora = fs.readFileSync('./fyh.txt', 'utf-8') //aca entro a leer lo que esta en el archivo 
    console.log(fechayhora)
} catch {
    throw new Error ('Error en la lectura del archivo' + err)
}