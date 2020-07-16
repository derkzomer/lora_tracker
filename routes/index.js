var express = require('express')
var router = express.Router()
var db = require('../js/databaseHandler')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/transmission', function(req, res, next) {

	db.recordTransmission(req.body, function(err, result){
		(result) ? res.end() : console.log(err)
	})

})

module.exports = router