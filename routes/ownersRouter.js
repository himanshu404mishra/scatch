const express = require("express")
const router = express.Router();
const ownerModel = require("../models/ownersModel")

if(process.env.NODE_ENV == "development"){
    router.get("/create", async function (req,res) {
        let owner = await ownerModel.find()   
        if(owner.length>0) return res.status(400).send("Unauthorized! user already exists")

            let {fullName, email, password} = req.body
         let createdOwner = await ownerModel.create({
            fullName,
            email,
            password
         })   

        res.status(200).send(createdOwner)
    })

}



router.get("/", function (req,res) {
    res.send("hey")    
})



module.exports = router