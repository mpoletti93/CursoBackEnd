const fs = require('fs')

class Contenedor {
	constructor(fileName) {
		this.filename = fileName
		this.readFileOrCreateNewOne()
	}

	// readFileOrCreateNewOne: Lee el archivo para las proximas funciones y si no existe crea uno nuevo
	readFileOrCreateNewOne() {
		try {
			fs.readFileSync(this.filename, 'utf-8') //Si encuentra archivo, lo lee y devuelve el filename
		} catch (error) {
			error.code === 'ENOENT' //error de que no se encuentra el archivo
				? this.createEmptyFile() //si no encuentra el archivo crea un nuevo archivo vacio
				: console.log(`Error: ${error.code} `)
		}
	}

	//createEmptyFile: crea un nuevo archivo vacio con el filename proporcionado
	createEmptyFile() {
		fs.writeFileSync(this.filename, '[]', (error) => {
			error ? console.log(error) : console.log(`File ${this.filename} `)
		})
	}

	//getData: me traigo toda la data del archivo en una constante
	async getData() {
		const data = await fs.promises.readFile(this.filename, 'utf-8')
		return data
	}

	//save(Object): Recibe un objeto, lo guarda en el archivo y devuelve el id asignado
	async save(object) {
		try {
			const allData = await this.getData()
			const parsedData = JSON.parse(allData)

			object.id = parsedData.length + 1
			parsedData.push(object)

			await fs.promises.writeFile(
				this.filename,
				JSON.stringify(parsedData)
			)
			return object.id
		} catch (error) {
			console.log(`Error: ${error.code} `)
		}
	}

	//getById recibe un id y devuelve el objeto con ese id o
	async getById(id) {
		try {
			const data = await this.getData()
			const parsedData = JSON.parse(data)

			return parsedData.find((producto) => producto.id === id)
		} catch (error) {
			console.log(
				`Error: ${error.code} | No se encuentra el siguiente ID (${id})`
			)
		}
	}

	//getAll: devuelve un array con los objetos presentes en el archivo

	async getAll() {
		const data = await this.getData()
		return JSON.parse(data)
	}

	//deleteById: Elimina del archivo el objeto con el id buscado
	async deleteById(id) {
		try {
			const data = await this.getData()
			const parsedData = JSON.parse(data)
			const objectIdToBeRemoved = parsedData.find(
				(producto) => producto.id === id
			)
			if (objectIdToBeRemoved) {
				const index = parsedData.indexOf(objectIdToBeRemoved)
				parsedData.splice(index, 1)
				await fs.promises.writeFile(
					this.filename,
					JSON.stringify(parsedData)
				)
			} else {
				console.log(`El ID=${id} no existe en el archivo`)
				return null
			}
		} catch (error) {
			console.log(
				`Error: ${error.code} Hubo un error tratando de eliminar el producto con id (${id})`
			)
		}
	}

	//deleteAll: Elimina todos los objetos presentes en el archivo
	async deleteAll() {
		try {
			await this.createEmptyFile()
		} catch (error) {
			console.log(
				`Error:${error.code} cuando intenta eliminar todos los archivos`
			)
		}
	}
}

const prueba = async () => {
	const contenedor = new Contenedor('productos.txt') //creo un contenedor de productos

	const id1 = await contenedor.save({ title: 'Pantalon', price: 100 })
	const id2 = await contenedor.save({ title: 'Remera', price: 50 })
	const id3 = await contenedor.save({ title: 'Buzo', price: 150 })

	console.log(id1, id2, id3) //Devuelvo todo los archivos

const object2 = await contenedor.getById(2);
    console.log(object2); // { title: 'Remera', price: 50, id: 2 }

    await contenedor.deleteById(2); //Elimino la remera 

const allCurrentObjects = await contenedor.getAll(); //me traigo todos los objetos que quedan 
    console.log(allCurrentObjects);

	/*
        [
        { title: 'Pantalon', price: 100, id: 1 },
        { title: 'Buzo', price: 150, id: 3 }
        ]
      */

	//EJEMPLEO DE deletAll (no lo corro porque me borra todo =P)
	//await contenedor.deleteAll();
}

prueba()