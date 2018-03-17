/*var express = require('express');
var router = express.Router();
var asyncValidator = require('async-validator');

var medicineModel = require.main.require('./models/medicine-model');

router.get('/', function(req, res){
	medicineModel.top_meds(function(result){
		res.render('top_medicine', {name: req.session.loggedUser.username, medicineList: result});
		//res.json(result);
	});
});

module.exports = router;*/

exports.top_buy = function(req, res){
  req.getConnection(function(err,connection){
       
     connection.query('SELECT * FROM buy ORDER BY buy_count DESC',function(err,rows)     {
            
        if(err)
           console.log("Error Selecting : %s ",err );
     		
     		console.log('top medicine got');
            res.render('top_medicine',{page_title:"medicines - Node.js",data:rows});
                           
         });
       
    });
  
};