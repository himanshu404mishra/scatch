const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    iamge: String,
    name: String,
    price: Number,
    discount:{
        type: Number,
        default: 0
    },
    bgColor: String,
    pannelColor: String,
    textColor: String
    
})

module.exports = mongoose.model("product", productSchema)