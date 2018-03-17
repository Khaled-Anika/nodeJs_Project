var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');

var medicineModel = require.main.require('./models/medicine-model');

router.get('/', function(req, res){
	medicineModel.getAll(function(result){
		res.render('medicine_list_buy', {name: req.session.loggedUser.username, medicineList: result});
		//res.json(result);
	});
});

module.exports = router;