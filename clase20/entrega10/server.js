//server
const express = require('express')
//routes
const onlyAdmin = require('./routes/validations.js')
const prodRouter = require('./routes/product.js')
const cartRouter = require('./routes/cart.js')
//config server
const app = express()
const PORT = process.env.PORT || 8081
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//config routes
app.use('/api/products', onlyAdmin, prodRouter)
app.use('/api/cart', cartRouter)
//default
app.all('*', (req, res) => {
    res.status(404)
        .json(
            {
                'error': -1,
                'description': `${req.method} on ${req.path} not implemented`
            })
})
//listener
app.listen(PORT, () => console.log(`Server UP on ${PORT}`));