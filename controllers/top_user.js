exports.top_buy = function(req, res){
  req.getConnection(function(err,connection){
       
     connection.query('SELECT * FROM buy ORDER BY buy_count DESC',function(err,rows)     {
            
        if(err)
           console.log("Error Selecting : %s ",err );
     		
     		console.log('top user got');
            res.render('top_user',{page_title:"medicines - Node.js",data:rows});
                           
         });
       
    });
  
};