// Declaration
var express = require('express');
var router = express.Router();

// Request Handler
router.get('/', function(req, res){
	res.render('black_meds');
});

// Export (mandatory)
module.exports = router;