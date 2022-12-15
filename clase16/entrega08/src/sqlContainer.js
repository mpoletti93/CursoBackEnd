import knex from 'knex'

export class ClienteSQL {

    constructor(options) {
        this.knex = knex(options)
    }

    crearTabla() {
        return this.knex.schema.dropTableIfExists('mensajes')
            .finally(() => {
                return this.knex.schema.createTable('mensajes', table => {
                    table.increments('id').primary()
                    table.string('nombre', 15).notNullable()
                    table.string('mensaje', 50).notNullable()
                    table.string('fecha', 50).notNullable()
                })
            })
    }

    insertarMensaje(mensaje) {
        return this.knex('mensajes').insert(mensaje)
    }

    listarMensaje() {
        return this.knex('mensajes').select('*')
    }

    close() {
        this.knex.destroy()
    }
}
