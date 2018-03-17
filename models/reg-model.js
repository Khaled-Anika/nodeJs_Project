var db = require('./db');
module.exports = {
	getAll:function(callback){
		var sql = "SELECT * FROM customer";
		db.getData(sql, null, function (results) {
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO customer VALUES (null, ?, ?, ?, ?, ?, ?, ?)";
		var param = [user.name, user.email, user.username, user.password, user.gender, user.dob, user.blood];
		db.getData(sql, param, function (results) {
			callback(results);
		});
	}
};
