//var promise = require('promise');
var medicineModel = require.main.require('./models/medicine-model');

exports.list = function(req, res){
  req.getConnection(function(err,connection){
       
     connection.query('SELECT * FROM medicine',function(err,rows){
            
        if(err)
           console.log("Error Selecting : %s ",err );
     	else{
     		console.log('list');
     		//userModel.getAll(function(result){
            res.render('medicine_list_buy',{page_title:"medicines - Node.js", data:rows, name: req.session.loggedUser.username});
           		//});
     		}
         });
       
    });
  
};

exports.buy = function(req, res){
    
  var id = req.params.id;
    
  req.getConnection(function(err,connection){
       
     connection.query('SELECT * FROM medicine WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     		else{
     			console.log('retrieve');
     			//userModel.getAll(function(result){
            	res.render('med_buying_info',{page_title:"Edit medicine - Node.js",data:rows,name: req.session.loggedUser.username});
            	//});
               }
         });
                 
    }); 
};

exports.buy_save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
   // var name = req.session.loggedUser.username ;
    var buy_quantity = input.quantity;
	var itemId = req.param.id;
	//var quantity = req.param.quantity;
	//var quan = req.body.quantity;
    
    req.getConnection(function (err, connection) {
        /*var user = {

            username : req.session.loggedUser.username ,
            buy_count : input.quantity
        
        };*/
        var med = {
            username : req.session.loggedUser.username ,
            med_name    : input.med_name,
            buy_count : input.quantity
        
        };
        /*var q ={
        	quantity : req.body.quantity
        };
        */
        var query = 
		connection.query('SELECT * FROM medicine WHERE id= ? ' , [itemId] , function(err, selectedItem)
		 {
        	if (err) throw err;

        	//var quan ={totalQuan: selectedItem};
			if (req.body.quantity - buy_quantity >= 0) {
	         connection.query("INSERT INTO buy set ? ", med, function(err, rows)
	         {
	  
	          if (err)
	              console.log("Error inserting : %s ",err );
	         
              console.log(req.session.loggedUser.quantity);
	           connection.query('UPDATE medicine SET quantity=? WHERE id=?', [req.body.quantity - buy_quantity, itemId], function(err, inventory)
	            {
	              	if (err) throw err;
	                   // Runs the prompt again, so the user can keep shopping.
                   	else{
			          	console.log('bought');
			        	res.redirect('/medicine_list_buy');
                        //res.render('user_home',{msg: 'buying successfull!!!'});
	          		}
				});
	        });
	    }
       // console.log(query.sql); get raw query
    });
});
};