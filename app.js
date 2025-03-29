const express = require("express")
const app = express()
const path = require("path")
const cookieParse = require("cookie-parser")

const db = require("./config/mongoose-connection") 
// routes
const ownersRouter = require("./routes/ownersRouter")
const productsRouter = require("./routes/productsRouter")
const usersRouter = require("./routes/usersRouter")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParse())

app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.use("/owners", ownersRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)

app.listen(3000)