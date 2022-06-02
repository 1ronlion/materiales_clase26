const {validationResult} = require('express-validator')

module.exports = {

    index: (req,res) => {

        res.render("index")

    },

    store: (req,res) => {

    errors = validationResult(req)
    console.log("🚀 ~ file: mainController.js ~ line 14 ~ errors", errors)

    }



}