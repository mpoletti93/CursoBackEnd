

app.get('/productosRandom', (req,res) =>{
    const num = Math.random()
    const c1 = new Contenedor ('productos.txt')
    const prod = c1getById(num)
    res.send(prod)
})