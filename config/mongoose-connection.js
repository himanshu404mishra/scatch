const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://men_backend_sheryians:himanshukodb@men.nwiiu.mongodb.net/scatch?retryWrites=true&w=majority")
.then(function(){
    console.log("Connected to DB!")
})
.catch(function(err){
    console.log(err)
})


module.exports = mongoose.connection
