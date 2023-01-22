import jwt from 'jsonwebtoken'

const PRIVATE_KEY = "shhhhhhhhhhhhhhhhhhhhhhhhhh"

export function generateAuthToken(nombre) {
    return jwt.sign({ nombre: nombre }, PRIVATE_KEY, { expiresIn: '60s' })
}

export function auth(req, res, next) {
    
    const authHeader = req.headers["authorization"] || req.headers["Authorization"]
    if (!authHeader) {
        return res.status(401).json({
            error: 'no autorizado',
            detalle: 'no te permito que ingreses'
        })
    }

    const token = authHeader.split(" ")[1] //esto saca la segunda parte del token
    if (!token) {
        return res.status(401).json({
            error: 'no autorizado',
            detalle: 'no te permito que ingreses'
        })
    }

    try {
        req.user = jwt.verify(token, PRIVATE_KEY) //se puede hacer por callback o por try/catch
    } catch(err) {
        return res.status(401).json({
            error: 'no autorizado',
            detalle: 'no te permito que ingreses'
        })
    }

    next()
}