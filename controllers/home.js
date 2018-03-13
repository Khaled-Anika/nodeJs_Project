// Declaration
var express = require('express');
var router = express.Router();

// Request Handler
router.get('/', function(req, res){
	res.render('home/index');
});

router.get('/index', function(req, res){
	res.render('interface/index');
});


// Export (mandatory)
module.exports = router;