var db = require('./db');

module.exports = {
		getAll:function(user, callback){
		var sql = "SELECT * FROM login WHERE username=? AND password=?";
		var param = [user.username, user.password];
		db.getData(sql, param ,function(result){
			if(result == null || result.length == 0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}

		});
	},
		getRole: function(user, callback){
		var sql = "SELECT role FROM login WHERE username=? AND password=?";
		var param = [user.role];
		db.getData(sql, param ,function(result){
			if(result == null || result.length == 0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}

		});
	}
};