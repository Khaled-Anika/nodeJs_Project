exports.list = function(req, res){
  req.getConnection(function(err,connection){
       
     connection.query('SELECT * FROM medicine',function(err,rows)     {
            
        if(err)
           console.log("Error Selecting : %s ",err );
     
            res.render('medicines',{page_title:"medicines - Node.js",data:rows,name: req.session.loggedUser.username});
                           
         });
       
    });
  
};
exports.add = function(req, res){
  res.render('add_medicine',{page_title:"Add medicines-Node.js"});
};
exports.edit = function(req, res){
    
  var id = req.params.id;
    
  req.getConnection(function(err,connection){
       
     connection.query('SELECT * FROM medicine WHERE id = ?',[id],function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('update_medicine',{page_title:"Edit medicine - Node.js",data:rows,name: req.session.loggedUser.username});
                           
         });
                 
    }); 
};
/*Save the customer*/
exports.save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            med_name    : input.med_name,
            indication : input.indication,
            generic   : input.generic,
            price   : input.price,
            quantity : input.quantity
        
        };
        
        var query = connection.query("INSERT INTO medicine set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
             
         
          res.redirect('/medicines');
          
        });
        
       // console.log(query.sql); get raw query
    
    });
};/*Save edited customer*/
exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            med_name    : input.med_name,
            indication : input.indication,
            generic   : input.generic,
            price   : input.price,
            quantity : input.quantity
        
        };
        
        connection.query("UPDATE medicine set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/medicines');
          
        });
    
    });
};

exports.delete_customer = function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM medicine  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/medicines');
             
        });
        
     });
};