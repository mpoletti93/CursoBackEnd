const fs = require('fs')

fs.promises.readFile('./info.txt', 'utf-8')
    .then(data => {
    const info = JSON.parse(data) //aca solo leo el archivo
    console.log(info)

    const pkjObj = info.contenidoObj

    pkjObj.author = "Coderhouse"

    fs.promises.writeFile('./package.json.coder', JSON.stringify(pkjObj), null, 2)
    .then(() => {
        console.log("escritura Exitosa")
    })
    .catch(err => {
        console.log("Error en la Escritura")
    })
})
    .catch(err => console.log("error en la lectura"))

