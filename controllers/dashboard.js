// Declaration
var express = require('express');
var router = express.Router();

// Request Handler
router.get('/', function(req, res){
	res.render('dashboard', {name: req.session.loggedUser.username});
});


// Export (mandatory)
module.exports = router;