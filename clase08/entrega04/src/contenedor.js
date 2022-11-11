const fs = require('fs')

class Contenedor {
	constructor(fileName) {
		this.filename = fileName
	}

	// readFileOrCreateNewOne: Lee el archivo para las proximas funciones y si no existe crea uno nuevo
	async readFileOrCreateNewOne() {
		try {
			await fs.promises.readFile(this.filename, 'utf-8') //Si encuentra archivo, lo lee y devuelve el filename
		} catch (error) {
			error.code === 'ENOENT' //error de que no se encuentra el archivo
				? await this.createEmptyFile() //si no encuentra el archivo crea un nuevo archivo vacio
				: console.log(`Error: ${error.code} `)
		}
	}

	//createEmptyFile: crea un nuevo archivo vacio con el filename proporcionado
	async createEmptyFile() {
		await fs.promises.writeFile(this.filename, '[]', (error) => {
			error 
            ? console.log(error) 
            : console.log(`File ${this.filename} `)
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
			await this.readFileOrCreateNewOne() 

			const allData = await this.getData()
			const parsedData = JSON.parse(allData)

			//object.id = parsedData.length + 1
			let id = 0
			if (parsedData == 0){
				object.id = 1
			} else { 
				let parsedData = JSON.parse(allData)
				object.id = parsedData[parsedData.length - 1].id + 1
			}
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
		id = Number(id);
		try {
			const data = await this.getData()
			const parsedData = JSON.parse(data)

			return parsedData.find((producto) => producto.id === id);
		} catch (error) {
			console.log(`Error: ${error.code} | No se encuentra el siguiente ID (${id})`)
			}		}

	//getAll: devuelve un array con los objetos presentes en el archivo

	async getAll() {
		const data = await this.getData()
		return JSON.parse(data)
	}

	//deleteById: Elimina del archivo el objeto con el id buscado
	async deleteById(id) {
		try {
			id = Number(id);
			const data = await this.getData()
			const parsedData = JSON.parse(data)
			const objectIdToBeRemoved = parsedData.find(
				(producto) => producto.id === id
			)
			if (objectIdToBeRemoved) {
				const index = parsedData.indexOf(objectIdToBeRemoved)
				parsedData.splice(index, 1)
				await fs.promises.writeFile(this.filename,JSON.stringify(parsedData))
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

	//updateByID funcion nueva para actualizar vía HTML
	async updateById(id, newData) {
		try {
		id = Number(id);
		const data = await this.getData();
		const parsedData = JSON.parse(data);
		const objectIdToBeUpdated = parsedData.find(
			(producto) => producto.id === id
		);
		if (objectIdToBeUpdated) {
			const index = parsedData.indexOf(objectIdToBeUpdated);
			const {title, price} = newData;
	
			parsedData[index]['title'] = title;
			parsedData[index]['price'] = price;
			
			await fs.promises.writeFile(this.filename, JSON.stringify(parsedData));
			return true;
		} else {
			console.log(`ID ${id} no existe en el archivo`);
			return null;
		}
	
		} catch (error) {
		`Error Code: ${error.code} | Hubo un error tratando de actualizar el producto con id:(${id})`
		}
	}
}


module.exports = Contenedor;