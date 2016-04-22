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

app.use(express.static('./public'));
app.use(express.static('./client'));
app.use('/*', index);

var port = process.env.PORT || 8765;

app.listen(port);
app.on('error', onError);
app.on('listening', onListening);

function onListening() {
  console.log('Legends of Pong app listening on port ' + port + '!');
}

function onError(err) {
  console.error('Failed to listen on port ' + port, err);
}

module.exports = app;
