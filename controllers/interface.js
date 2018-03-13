// Declaration
var express = require('express');
var router = express.Router();

// Request Handler
router.get('/index', function(req, res){
	res.render('interface/index');
});

// Export (mandatory)
module.exports = router;