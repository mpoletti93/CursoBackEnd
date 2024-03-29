import fs from 'fs'

//config dirname
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default class FileContainer {

    constructor(nameFile) {
        this.pathFile = `${__dirname}/datafiles/${nameFile}.json`
        //create file if not exists
        if (!fs.existsSync(this.pathFile)) {
            fs.writeFileSync(this.pathFile, '[]', { encoding: "utf-8" })
        }
        this.elements = JSON.parse(fs.readFileSync(this.pathFile, 'utf-8'))
    }

    save = (object) => {
        try {
            const cnt = this.elements.length
            console.log(this.elements);
            console.log('cnt');
            console.log(cnt);
            const idCreated = cnt > 0 ? this.elements[cnt - 1].id + 1 : 1
            fs.writeFileSync(this.pathFile, JSON.stringify([...this.elements, { ...object, id: idCreated }], null, 2), 'utf-8')
            this.updateElements()
            console.log('despues de la creacion');
            console.log(idCreated)
            return idCreated
        } catch (err) {
            console.error('[ERROR] on Save > ' + err)
            return { 'error': 1, 'description': `[ERROR] on Save: ${err}` }
        }
    }

    getAll = () => {
        return this.elements;
    }

    getById = (id) => {
        let ret = { 'error': 2, 'description': `Element ID ${id} Not Found` }
        const element = this.elements.find(elem => elem.id === id)
        return element ? element : ret
    }

    update = (id, element) => {
        let ret = { 'error': 2, 'description': `Element ID ${id} Not Found` }
        const item = this.elements.find(elem => elem.id === id)
        if (item) {
            this.elements = this.elements.map(elem =>
                elem.id === id
                    ? { ...elem, ...element }
                    : elem
            )
            fs.writeFileSync(this.pathFile, JSON.stringify(this.elements, null, 2), 'utf-8')
            this.updateElements()
            console.log(`[OK] update id ${id}`)
            ret = { 'error': 0, 'description': `Update ID ${id} Successful` }
        }
        return ret
    }

    deleteById = (id) => {
        let ret = { 'error': 2, 'description': `Element ID ${id} Not Found` }
        const item = this.elements.find(elem => elem.id === id)
        if (item) {
            this.elements = this.elements.filter(elem => elem.id !== id)
            fs.writeFileSync(this.pathFile, JSON.stringify(this.elements, null, 2), 'utf-8')
            this.updateElements()
            console.log(`[OK] delete id ${id}`)
            ret = { 'error': 0, 'description': `Delete ID ${id} Successful` }
        }
        return ret
    }

    deleteAll = () => {
        fs.writeFileSync(this.pathFile, '[]', 'utf-8')
        this.updateElements()
        console.log('[OK] delete ALL')
        return { 'error': 0, 'description': `Delete ALL Successful` }
    }

    updateElements() {
        this.elements = JSON.parse(fs.readFileSync(this.pathFile, 'utf-8'))
    }

}