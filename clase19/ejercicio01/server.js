import mongoose from 'mongoose'
import * as models from './models/estudiante.js'

CRUD()

function CRUD() {

    const URL = "mongodb://127.0.0.1:27017/colegio"

    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Conectados correctamente")
        
// Create
const estudiantes = [
        { nombre: "Pedro", apellido: "Mei", edad: 21, dni: "12345678", curso: "1A", nota: 7 },
        { nombre: "Ana", apellido: "Gonzalez", edad: 32, dni: "87654321", curso: "1A", nota: 8 },
        { nombre: "Jose", apellido: "Picos", edad: 29, dni: "12345672", curso: "2A", nota: 6 },
        { nombre: "Lucas", apellido: "Blanco", edad: 22, dni: "87654324", curso: "3A", nota: 10 },
        { nombre: "Federico", apellido: "Perez", edad: 41, dni: "12345673", curso: "2A", nota: 5 },
        { nombre: "Tomas", apellido: "Sierra", edad: 19, dni: "12345674", curso: "2B", nota: 4 },
        { nombre: "Carlos", apellido: "Fernandez", edad: 33, dni: "12345675", curso: "3B", nota: 2 },
        { nombre: "Fabio", apellido: "Pieres", edad: 39, dni: "12345676", curso: "1B", nota: 9 },
        { nombre: "Daniel", apellido: "Gallo", edad: 25, dni: "12345677", curso: "3B", nota: 2 },
        ];

        models.estudiantes.create(estudiantes)
        .then(() => {
            console.log("estudiantes creados correctamente")
        })
    })
    .catch(err => {
        console.log(err)
    })
}