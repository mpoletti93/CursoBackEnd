import express from 'express'
import session from 'express-session'

const app = express()

app.use(session({
    secret: "TeGaneAlan!",
    resave: false,
    saveUninitialized: false
}))

app.get('/', (req,res)=>{
    if(!req.session.contador){
    req.session.contador = 1
    req.session.nombre = req.query.nombre || "Anakin"
    res.send("Hello there " + req.session.nombre)
    } else {
        req.session.contador++
        res.send("Hello there " + req.session.nombre + " you have visited the page " + req.session.contador + " times.")
    }
})

//Crear el Post
app.get("/olvidar", (req, res) => {
    req.session.destroy( err => {
        if (err){
            res.json({error: "algo hiciste mal", descripcion: err})
        } else {
            res.json({respuesta: "Hasta luego " + req.session.nombre})
        }
    })
    })


const PORT = 8080

app.listen(PORT, () => {console.log("escuchando en el 8080")})