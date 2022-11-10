//ROUTER & MULTER
const express = require('express')
const { Router } = express

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const mascotas = []
const personas = []

const routerMascotas = new Router()

routerMascotas.get('/', (req, res) => {
    res.json(mascotas)
})

routerMascotas.post('/', (req, res) => {
    mascotas.push(req.body)
    res.json({ok: 'ok'})
})

const routerPersonas = new Router()

routerPersonas.get('/', (req, res) => {
    res.json(personas)
})

routerPersonas.post('/', (req, res) => {
    personas.push(req.body)
    res.json({ok: 'ok'})
})

app.use('/mascotas', routerMascotas)
app.use('/personas', routerPersonas)

const server = app.listen(8080, () => {
    console.log('escuchando en el 8080')
})