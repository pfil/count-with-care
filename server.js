//server.js

//BASE SETUP

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

var port = process.env.PORT || 1292;

var router = express.Router();

router.get('/', function(req, res) {
  res.json({message: 'this is a message'});
});


app.use('/api', router);

app.listen(port);
console.log('Listening on port' + port);




