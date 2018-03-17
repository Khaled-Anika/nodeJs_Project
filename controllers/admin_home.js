// Declaration
var express = require('express');
var router = express.Router();
/*var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');*/
var loginModel = require.main.require('./models/login-model');

// Request Handler
router.get('/', function(req, res){
	loginModel.getAll(function(result){
	 res.render('admin_home');
	});
});

/*router.get('/info/:id', function(req, res){
	var data = {
		id: req.params.id
	};
	res.render('home/info', data);
});*/

// Export (mandatory)
module.exports = router;