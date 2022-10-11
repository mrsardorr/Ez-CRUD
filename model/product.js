const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    name: {
        type: String,
        required: true  
    },
    price: Number,
    category: String,
})

module.exports = model('productt', productSchema)