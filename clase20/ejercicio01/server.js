import mongoose from "mongoose";
import * as models from "./models/usuario.js"
//despues de la barra de la / y antes del ? va el nombre de la base de datos
const URL = "mongodb+srv://mpoletti:poletti12@miprimercluster.78oud0k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    try {
        await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
    console.log("conectados correctamente")

    const usuarios = await models.usuarios.find()

    console.log(usuarios)

    const newusuario = new models.usuarios({
        nombre: "Federico",
        apellido: "Perez",
        dni: "123456789"
    })
    
    await newusuario.save()

    console.log("usuario agrgado correctamente")

} catch (error) {
    console.log(error)
} finally{
    mongoose.disconnect()
}