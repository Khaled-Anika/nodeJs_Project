var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');

var medicineModel = require.main.require('./models/medicine-model');

router.get('/', function(req, res){
	medicineModel.getById(function(result){
		res.render('update_medicine', {medicine: result});
		//res.json(result);
	});
});

/*router.get('/:id', function(req, res){
	var data = {
		id: req.body.id
	};
	res.render('update_medicine', data);
});*/


module.exports = router;