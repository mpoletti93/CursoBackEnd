import express from 'express'
const app = express()

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana', 'Roberto','Frank','Sebastian','Alan']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei','Aguero','Messi','Dybala']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta','blanco','negro']

app.get('/test', (req,res)=>{
    const objs=[]
    
    for (let i = 0; i<10; i++){
        objs.push(getUser())
    }

    return objs

    res.json(objs)
})

function getRandomElement(arr){
    return arr[Math.floor(Math.random()* arr.length)]
}

function getUser(){
    return {
        nombre: getRandomElement(nombres),
        apellido: getRandomElement(apellidos),
        color: getRandomElement(colores)
    }
}