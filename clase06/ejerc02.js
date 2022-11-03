const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send(`<h1>"Hello World"</h1>`);
});

app.get("/b", (req, res) => {
    res.render(`<h1>"Hello World"</h1>`);
});

let visitas = 0

app.get('/visitas', (req, res) =>{
    visitas++
    res.send('la cantidad de visitas es ' + visitas)
})


app.get('/fyh', (req, res) =>{
    res.send({fyh: new Date().toLocaleString()})
})

const server = app.listen(8080, () =>{
    console.log('Escuchando al puerto 8080')
})