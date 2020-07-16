var mysql = require('mysql')
var config = require('../js/config')

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: config.db_password,
	database: 'lora'
})

var recordTransmission = function(data, callback){

	var sql = "INSERT INTO transmissions (s_t,ms_t,s_r,ms_r,rssi,snr,freqErr,ts) VALUES (?,?,?,?,?,?,?,NOW())"

	// s_t,ms_t,s_r,ms_r,rssi,snr,freqErr

	d = [
		data['dt'].split(',')[0],
		data['dt'].split(',')[1],
		data['rs'],
		data['rms'],
		data['rssi'],
		data['snr'],
		data['freqErr']
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
