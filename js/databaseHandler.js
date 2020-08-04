var mysql = require('mysql')
var config = require('../js/config')

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: config.db_password,
	database: 'lora'
})

var recordTransmission = function(data, callback){

	var sql = "INSERT INTO test_transmissions (uuid,unix_epoch,millis,repeat_signal,firstIncomingRssi,firstIncomingSnr,firstIncomingFreqErr,secondIncomingRssi,secondIncomingSnr,secondIncomingFreqErr,thirdIncomingRssi,thirdIncomingSnr,thirdIncomingFreqErr,ts) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,NOW())"

	console.log(data)

	d = [
		data['arg_0'],
		data['arg_1'],
		data['arg_2'],
		data['arg_3'],
		data['arg_4'],
		data['arg_5'],
		data['arg_6'],
		data['arg_7'],
		data['arg_8'],
		data['arg_9'],
		data['arg_10'],
		data['arg_11'],
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
