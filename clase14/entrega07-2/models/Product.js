class Product {
    constructor(title, description, code, image, price, stock) {
        this.timestamp = new Date(Date.now()).toLocaleString()
        this.title = title || ""
        this.description = description || ""
        this.code = code || ""
        this.image = image || ""
        this.price = price || ""
        this.stock = stock || ""
    }
}

module.exports = Product