// Declaration
var express = require('express');
var router = express.Router();

// Request Handler
router.get('/', function(req, res){
	//loginModel.getAll(function(result){
	 res.render('user_home/index', {name: req.session.loggedUser.username});
	//});
});

/*router.get('/info/:id', function(req, res){
	var data = {
		id: req.params.id
	};
	res.render('home/info', data);
});*/

// Export (mandatory)
module.exports = router;