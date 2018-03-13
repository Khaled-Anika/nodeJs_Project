// Declaration
var express = require('express');
var router = express.Router();

var userloginModel = require.main.require('./models/user-login-model');

// Request Handler
router.get('/index', function(req, res,next){
	res.render('login/index',{msg: []});
});

router.post('/index', function(req, res){

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	userloginModel.getAll(user, function(valid){
		if(valid)
		{
			if(user.password === '123'){
				req.session.loggedUser = user;
				res.render('admin_home/index');
			}
			else
			{
				req.session.loggedUser = user;
				res.render('user_home/index');
			}
		}
		else
		{
			res.render('login/index', {msg: 'invalid username or password'});
		}
	});
	

});

// Export (mandatory)
module.exports = router;