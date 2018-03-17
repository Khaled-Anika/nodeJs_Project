exports.list = function(req, res){
    
  var name = req.session.loggedUser.username;
    
  req.getConnection(function(err,connection){
       
     connection.query('SELECT * FROM customer WHERE username = ?',[name],function(err,rows)
        {
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('profile',{page_title:"Edit customer - Node.js", data:rows, name: req.session.loggedUser.username});
                           
         });
                 
    }); 
};