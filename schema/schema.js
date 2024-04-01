const mongoose = require('mongoose');

const product = new mongoose.Schema({
    title: { type: String, required: true, index: true },
    product: { type: Object, required: true }
})

const productModel = mongoose.model('product', product);

module.exports = {
    productModel
};
