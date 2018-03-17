// Declaration
var express = require('express');
var router = express.Router();

// Request Handler
router.get('/', function(req, res){
	res.render('medical_news');
});

// Export (mandatory)
module.exports = router;