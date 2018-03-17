var express = require('express');
var router = express.Router();
var dbconfig = require('../models/dbConfig');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);

var medicineModel = require.main.require('./models/medicine-model');

// Request Handler
router.get('/', function(req, res){
	medicineModel.getAll(function(result){
    console.log('getSearch');
		res.render('search', {medicineList: result});
		//res.json(result);
	});
});

/*router.get('/',function(req,res){
	res.render('search');
});
*/
router.get('/search',function(req,res){
  console.log('prevSearch');
	connection.query('SELECT * from medicine where med_name like "%'+req.query.key+'%"', function(err, rows, fields) {
	if (err) throw err;
    var data=[];
    console.log(rows);
    for(i=0;i<rows.length;i++)
      {
      	console.log(rows[i]);
        data.push(rows[i]);
      }
      res.end(JSON.stringify(data));
	});
});

// Export (mandatory)
module.exports = router;