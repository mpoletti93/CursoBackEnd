import express from 'express'
import ApiUsuariosMock from '../api/usuarios.js'

class UsuariosRouter extends express.Router {
constructor() {
    super()

    const apiUsuarios = new ApiUsuariosMock()

    this.post('/popular', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.popular(req.query.cant))
        } catch (err) {
            next(err)
        }
    })
    this.get('/', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.listarAll())
        } catch (err) {
            next(err)
        }
    })
    this.get('/:id', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.listar(req.params.id))
        } catch (err) {
            next(err)
        }
    })
    this.post('/', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.guardar(req.body))
        } catch (err) {
            next(err)
        }
    })
    this.put('/:id', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.actualizar({ ...req.body, id: req.params.id }))
        } catch (err) {
            next(err)
        }
    })
    this.delete('/:id', async (req, res, next) => {
        try {
            res.json(await apiUsuarios.borrar(req.params.id))
        } catch (err) {
            next(err)
        }
    })
    this.use((err, req, res, next) => {
        const erroresNoEncontrado = [
            'Error al listar: elemento no encontrado',
            'Error al actualizar: elemento no encontrado',
            'Error al borrar: elemento no encontrado'
        ]

        if (erroresNoEncontrado.includes(err.message)) {
            res.status(404)
        } else {
            res.status(500)
        }
        res.json({ message: err.message })
    })
}
}

export default UsuariosRouter