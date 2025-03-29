const mongoose = require("mongoose");
const config = require("config")
const dbgr = require("debug")("development:mongoose")

mongoose.connect(`${config.get("MONGO_URI")}scatch?retryWrites=true&w=majority`)

.then(function(){
    dbgr("Connected to DB!")
})
.catch(function(err){
    dbgr(err)
})


module.exports = mongoose.connection