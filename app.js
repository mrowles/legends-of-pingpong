var express = require('express');
var users = require('./server/routes/users');
var app = express();
var db = require('./server/model/db');
var players = require('./server/routes/players');
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static(__dirname + '/'));

app.use('/player', players);

app.listen(8765, function () {
  console.log('Legends of Pong app listening on port 8765!');
});
