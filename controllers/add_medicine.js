// Declaration
var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');

var medicineModel = require.main.require('./models/medicine-model');

// Request Handler
router.get('/', function(req, res){
	 res.render('add_medicine',{msg: []});
});

router.post('/', function(req, res){
	var medicine = {
		med_name: req.body.med_name,
		indication: req.body.indication,
		generic: req.body.generic,
		price: req.body.price,
		quantity: req.body.quantity
	};
	
/*	var userLogin = {
		userName: req.body.userName,
		password: req.body.password,
		role: 'customer'
	};*/


medicineModel.insert(medicine, function(result){
	//console.log("okay reg");
	//if(valid)
	{
		res.render('add_medicine',{msg: 'adding medicine is successful'});
	}
	/*else
	{
		res.render('add_medicine',{msg: 'could not add medicine !!!'});
	}*/
});

});


// Export (mandatory)
module.exports = router;