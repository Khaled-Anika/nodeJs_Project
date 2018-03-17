// Declaration
var express = require('express');
var router = express.Router();

var userloginModel = require.main.require('./models/user-login-model');

// Request Handler
router.get('/', function(req, res,next){
	res.render('login',{msg: []});
});

router.post('/', function(req, res){

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	userloginModel.getAll(user, function(valid){
		if(valid)
		{
			if(user.password === '123'){
				req.session.loggedUser = user;
				res.redirect('/admin_home');
			}
			else
			{
				req.session.loggedUser = user;
				res.redirect('/user_home');
			}
		}
		else
		{
			res.render('login', {msg: 'invalid username or password'});
		}
	});
	

});

// Export (mandatory)
module.exports = router;