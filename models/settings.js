exports.list = function(req, res){
 /*req.getConnection(function(err,connection){
       
    connection.query('SELECT * FROM customer',function(err,rows){*/
            
        /*if(err)
           console.log("Error Selecting : %s ",err );*/
     
            res.render('settings',{page_title:"medicines - Node.js",name: req.session.loggedUser.username});
                           
     /*   });
       
   });
  */
};

exports.edit_pro = function(req, res){
    
  var name = req.session.loggedUser.username;
    
  req.getConnection(function(err,connection){
       
     connection.query('SELECT * FROM customer WHERE username = ?',[name], function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('edit_profile',{page_title:"Edit medicine - Node.js", data:rows ,name: req.session.loggedUser.username});
                           
         });
                 
    }); 
};
/*Save the customer*/
/*Save edited customer*/
exports.pro_save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var name = req.session.loggedUser.username;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            name: input.name,
            email: input.email,
            username: input.username,
            gender: input.gender,
            dob: input.dob        
        };
        
        var user = {
          username : input.username
        }
        connection.query("UPDATE customer set ? WHERE username = ? ",[data,name], function(err, rows)
        {
          connection.query("UPDATE login set ? WHERE username = ? ",[user,name], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/settings');
          
        });
      });
    });
};

exports.edit_pass = function(req, res){
    
  var name = req.session.loggedUser.username;
    
  req.getConnection(function(err,connection){
       
     connection.query('SELECT password FROM customer WHERE username = ?',[name],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('change_pass',{page_title:"Edit medicine - Node.js",data:rows,name: req.session.loggedUser.username});
                           
         });
                 
    }); 
};
/*Save the customer*/
/*Save edited customer*/
exports.pass_save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var name = req.session.loggedUser.username;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            password: input.new_password
        
        };
        
        connection.query("UPDATE customer set ? WHERE username = ? ",[data,name], function(err, rows)
        {
          connection.query("UPDATE login set ? WHERE username = ? ",[data,name], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/settings');
          
        });
      });
    
    });
};