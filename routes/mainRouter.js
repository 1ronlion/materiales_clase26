var express = require('express');
var router = express.Router();
const validation = require('../middlewares/validation')
const mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', mainController.index);


router.post('/', mainController.store);

module.exports = router;
