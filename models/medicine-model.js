var db = require('./db');
module.exports = {
	getAll: function(callback){
		var sql = "SELECT * FROM medicine";
		db.getData(sql, null, function (results) {
			callback(results);
		});
	},
	getById: function(medicine, callback){
		var sql = "SELECT * FROM medicine WHERE id = ?";
		var param = [medicine.id];
		db.getData(sql, param, function (results) {
			if(results == null || results.length == 0)
			{
				callback(false);
			}
			else
			{
				callback(true);
			}

		});
	},
	insert: function(medicine, callback){
		var sql = "INSERT INTO medicine VALUES (null, ?, ?, ?, ?, ?)";
		var param = [medicine.med_name, medicine.indication, medicine.generic, medicine.price, medicine.quantity];
		db.getData(sql, param, function (results) {
			callback(results);
		});
	},
	top_meds: function(med, callback){
		var sql = "SELECT * FROM medicine_sell ORDER BY sell_count DESC";
		var param = [med.med_name,med.sell_count];
		db.getData(sql, param, function (results) {
			if(results == null || results.length == 0)
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
