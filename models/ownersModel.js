const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    products: [],
    picture: String,
    gstin:String
    
})

module.exports = mongoose.model("owner", ownerSchema)