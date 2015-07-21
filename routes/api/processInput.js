var express = require('express');
var router = express.Router();
var AlchemyAPI = require('../../modules/alchemyapi');

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("user input: " + req.body.userInput);
  var alchemyapi = new AlchemyAPI();

  alchemyapi.entities('text', req.body.userInput,{ 'sentiment':1 }, function(response) {
    res.set('Content-Type', 'application/json')
		res.send(JSON.stringify(response,null,4));
	});

  //res.render('index', { title: 'Jasons Express Page' });
});

module.exports = router;
