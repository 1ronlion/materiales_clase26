const {validationResult} = require('express-validator')


module.exports = {

    index: (req,res) => {

        res.render("index")

    },

    store: (req,res) => {

    let validationErrors = validationResult(req)

    console.log("🚀 ~ file: mainController.js ~ line 15 ~ validationErrors", validationErrors)


        res.redirect("/")

    }



}