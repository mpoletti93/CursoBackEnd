const fs = require('fs')

fs.readFile('./package.json', 'utf-8', (err, data) =>{
    if (err){
        console.log("Hubo un error")
        throw new Error("Hubo un error" + err)
    }
    console.log("la lectura fue exitosa")

    const info = {
        contenidoStr: data, //me traigo todo el archivo
        contenidoObj: JSON.parse(data), //transformo el Json en un objeto
        size: data.length 
    }
        console.log(info)
        fs.writeFile('./info.txt', JSON.stringify(info, null, 2), err =>  {
            if (err) {
                console.log("hubo error en la escritura")
                throw new Error ("Hubo errro en la escritura"+ err)
            }
            console.log("La escritura fue exitosa")
        })
})



console.log("hola")


