var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');

var medicineModel = require.main.require('./models/medicine-model');

router.get('/', function(req, res){
	medicineModel.getById(function(result){
		res.render('delete_medicine', {medicines: result});
		//res.json(result);
	});
});

module.exports = router;