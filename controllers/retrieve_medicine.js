var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');

var medicineModel = require.main.require('./models/medicine-model');

router.get('/', function(req, res){
	medicineModel.getAll(function(result){
		res.render('retrieve_medicine', {medicineList: result});
		//res.json(result);
	});
});

module.exports = router;