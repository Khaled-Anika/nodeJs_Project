// Declaration
var express = require('express');
var router = express.Router();
var expressSession = require('express-session');

var asyncValidator = require('async-validator');
//var userRules = require.main.require('./validation-rules/user');

var regModel = require.main.require('./models/reg-model');
var loginModel = require.main.require('./models/login-model');

// Request Handler
router.get('/', function(req, res){
	res.render('registration', {errs: []});
	//res.render('registration', {errors: req.session.errors});
});

router.post('/', function(req, res){
	var user = {
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
		gender: req.body.gender,
		dob: req.body.dob,
		blood: req.body.blood
	};
	
	var userLogin = {
		username: req.body.username,
		password: req.body.password,
		role: 'customer'
	};

	req.check('name','invalid name').isLength({min: 6});
	req.check('email','invalid email address').isEmail();
	req.check('password','password is invalid').isLength({min: 6});
	req.check('confirmPassword',' invalid,should be equal to password').isLength({min: 6}).equals(req.body.password);
	req.check('gender','gender is required').isLength({min: 4});
	req.check('dob','dob is required').isLength({min: 5});
	req.check('blood','blood group is required').isLength({min: 2});

	var errors = req.validationErrors();
	//var validator = new asyncValidator(userRules.create);
	//var validator = new asyncValidator(create);
	//validator.validate(user, function(errors, fields){
		if(errors)
		{
			res.render('registration', {errs: errors});
			//req.session.errors = errors; 
		}
		else
		{
			//validator.validate(userLogin, function(errors, fields){
			regModel.insert(user, function(result){
				loginModel.insert(userLogin, function(result){
					res.render('home');
				});
			});
			//});
		}
	//});
});

// Export (mandatory)
module.exports = router;