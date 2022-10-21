//Desafio 01
class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
    this.nombre = nombre //string
    this.apellido = apellido //string
    this.libros = libros //objeto 
    this.mascotas = mascotas // string 
}
getFullName () {
    return `${this.nombre} , ${this.apellido}` //devuelvo los valores con un return 
}

addMascota (nombreMascota) {
    this.mascotas.push(nombreMascota) //utilizo funcion push para agregar strings al array
}

countMascotas (){
    return this.mascotas.length; //utilizo funcion length para contar objetos dentro de un array
}

addBook (titulo, nombreAutor){
    this.libros.push({nombre: titulo, autor: nombreAutor}) //utilizo la funcion push para agregar objetos a un array
}

getBookNames () {
    return this.libros.map((libros) => libros.nombre) //utilizo la funcion map y una arrow function para traer los nombres de los objetos del array
}
}

let libros = [{
    nombre: "Libro1",
    autor: "autor1"
},
{
    nombre: "Libro2",
    autor: "autor2"
}]


let usuario = new Usuario (
    "Mariano","Poletti",libros, []
)


usuario.addMascota('aquiles') //agrego 1 mascota
usuario.addMascota('pepo') //agrego mas mascota

console.log(usuario.getFullName(usuario)) //aca se muestra como se utiliza la funcion de getNames
console.log(usuario.mascotas) //muestro las mascotas
console.log(usuario.countMascotas()) //cuento cantidad de mascotas 2 

usuario.addBook("Libro3","autor3") //agrego un libro
console.log(usuario.libros) //muestro los 3 libros del usuario

console.log(usuario.getBookNames()) //obtengo los nombres de los libros