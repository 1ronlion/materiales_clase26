const { body } = require ('express-validator')

const validation = [

    body('name del input').isLength({min:1}),

]

module.exports = validation