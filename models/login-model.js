var db = require('./db');
module.exports = {
	getAll:function(callback){
		var sql = "SELECT * FROM login";
		db.getData(sql, null, function (results) {
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO login VALUES (null, ?, ?, ?)";
		var param = [user.username, user.password,user.role];
		db.getData(sql, param, function (results) {
			callback(results);
		});
	}
};