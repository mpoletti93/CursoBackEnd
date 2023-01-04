class MongoDBContainer {
    constructor(tableModel) {
        this.tableModel = tableModel
    }

    save = async function (element)  {
        let ret = {}
        const userSaveModel = new this.tableModel(element)
        await userSaveModel.save()
            .then(function (res) {
                ret = res._id
                console.log(`[OK] insert on ${this.tableModel.collection.collectionName} ID: ${ret}`)
            }).catch(function (err) { console.error(err); ret = { 'error': 1, 'description': `[ERROR] Save on ${this.tableModel.collection.collectionName}: ${err}` } })
            .finally(function () { })
        return ret
    }

    getAll = async function ()  {
        let ret = []
        await this.tableModel.find({})
            .then(function (rows)  {
                for (let row of rows) {
                    ret.push(row)
                }
            }).catch(function (err)  { console.error(err); throw err })
            .finally(function () { })
        return ret;
    }

    getById = async function (id)  {
        let ret = { 'error': 2, 'description': `Element ID ${id} on ${this.tableModel.collection.collectionName} Not Found` }
        let element = {}
        await this.tableModel.find({ _id: id })
            .then((row) => {
                element = row
            }).catch(function (err)  { console.error(err); throw err })
            .finally(() => { })
        if (element)
            ret = element[0]
        return ret
    }

    update = async (id, changes) => {
        let ret = { 'error': 2, 'description': `Element ID ${id} on ${this.tableModel.collection.collectionName} Not Found` }
        await this.tableModel.findByIdAndUpdate(id, changes)
            .then(function ()  {
                console.log(`[OK] update ID ${id} on ${this.tableModel.collection.collectionName}`)
                ret = { 'error': 0, 'description': `Update ID ${id} on ${this.tableModel.collection.collectionName} Successful` }
            }).catch(function (err)  { console.error(err); throw err })
            .finally(function () { })
        return ret
    }

    deleteById = async function (id) {
        let ret = { 'error': 2, 'description': `Element ID ${id} on ${this.tableModel.collection.collectionName} Not Found` }
        await this.tableModel.findByIdAndRemove(id)
            .then(function ()  {
                console.log(`[OK] delete ID ${id} on ${this.tableModel.collection.collectionName}`)
                ret = { 'error': 0, 'description': `Delete ID ${id} on ${this.tableModel.collection.collectionName} Successful` }
            }).catch(function (err)  { console.error(err); throw err })
            .finally(function () { })
        return ret
    }

    deleteAll = async function()  {
        await this.tableModel.deleteMany()
            .then(function() { console.log(`[OK] delete ALL on ${this.tableModel.collection.collectionName}`)}
            ).catch(function (err) { console.error(err); throw err })
            .finally(function() { })
        return { 'error': 0, 'description': `Delete ALL on ${this.tableModel.collection.collectionName} Successful` }
    }

}

module.exports = MongoDBContainer