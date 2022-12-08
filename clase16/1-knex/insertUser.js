const { options } = require ('./options/mysqlconn.js')
const knex = require ('knex')(options)

const usuarios = [
    {nombre: 'federico', apellido: 'la selva',edad: 32, email:'tufedefavorito@gmail.com'},
    {nombre: 'mariano', apellido: 'poletti',edad: 29, email:'mpoetti@gmail.com'},
    {nombre: 'mariano2', apellido: 'poletti2',edad: 30, email:'mpoetti22@gmail.com'},
]

knex('usuario').insert(usuarios)
    .then(()=> console.log('se ingresaron correctamente'))
    .catch (err => console.log(err))
    .finally(()=>
    knex.destroy()
    )
