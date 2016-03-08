var express = require('express');
var path = require('path');
var db = require('./server/model/db');
var bodyParser = require('body-parser');

var index = require('./server/routes/index');
var players = require('./server/routes/players');
var matches = require('./server/routes/matches');

var app = express();

app.set('views', path.join(__dirname, '/'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));

app.use('/api/player', players);
app.use('/api/match', matches);

app.use('/*', index);

var server = app.listen(8765, function () {
  console.log('Legends of Pong app listening on port 8765!');
});

module.exports = app;
