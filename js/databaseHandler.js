var mysql = require('mysql')
var config = require('../js/config')

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: config.db_password,
	database: 'lora'
})

var recordTransmission = function(data, callback){

	var sql = "INSERT INTO test_transmissions (uuid,unix_epoch,millis,repeat_signal,ts) VALUES (?,?,?,?,NOW())"

	console.log(data)

	d = [
		data['arg0'],
		data['arg1'],
		data['arg2'],
		data['arg3']
	]

	console.log(d)

	connection.query(sql, d, function(err, rows, fields) {
		if (!err) {
			console.log(rows)
			if (rows.length === 0) {
				callback(null, null)
			} else {
				callback(null, rows)
			}
		} else {
			console.log(err)
			callback(err, null)
		}
	})

}

module.exports = {
	recordTransmission: recordTransmission
}
