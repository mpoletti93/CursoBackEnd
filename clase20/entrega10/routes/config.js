let catalog = undefined
//connector
const connector = process.env.CONNECTOR || 'firebase'
switch (connector) {
    case 'firebase':
        const CartDaoFirebase = require("../daos/carts/CartDaoFirebase");
        cart = new CartDaoFirebase();
        const ProductDaoFirebase = require("../daos/products/ProductDaoFirebase.js");
        catalog = new ProductDaoFirebase();
        break;
    case 'mongodb':
        const mongoose = require('mongoose')
        const { mongoConn } = require('../persistence/config/connection')
        mongoose.connect(mongoConn.url, mongoConn.options)
        const CartDaoMongoDB = require("../daos/carts/CartDaoMongoDB");
        cart = new CartDaoMongoDB();
        const ProductDaoMongoDB = require("../daos/products/ProductDaoMongoDB");
        catalog = new ProductDaoMongoDB();
        break;
}

module.exports = {catalog, cart}