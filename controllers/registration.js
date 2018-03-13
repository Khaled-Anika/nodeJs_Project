// Declaration
var express = require('express');
var router = express.Router();

var asyncValidator = require('async-validator');
var userRules = require.main.require('./validation-rules/user');

var regModel = require.main.require('./models/reg-model');
var loginModel = require.main.require('./models/login-model');

// Request Handler
router.get('/index', function(req, res){
	res.render('registration/index', {errs: []});
});

router.post('/index', function(req, res){
	var user = {
		name: req.body.name,
		email: req.body.email,
		userName: req.body.userName,
		password: req.body.password,
		gender: req.body.gender,
		dob: req.body.dob,
		blood: req.body.blood
	};
	
	var userLogin = {
		userName: req.body.userName,
		password: req.body.password,
		role: 'customer'
	};

	var validator = new asyncValidator(userRules.create);
	validator.validate(user, function(errors, fields){
		if(errors)
		{
			res.render('registration/index', {errs: errors});
		}
		else
		{
			validator.validate(userLogin, function(errors, fields){
					regModel.insert(user, function(result){
						//console.log("okay login");
					loginModel.insert(userLogin, function(result){
						//console.log("okay reg");
						res.render('interface/index');
					});
					});
			});
		}
	});
});

// Export (mandatory)
module.exports = router;