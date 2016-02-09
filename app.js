var express = require('express');
var users = require('./server/routes/users');
var app = express();
var db = require('./server/model/db');
var players = require('./server/routes/players');


app.use('/', express.static(__dirname + '/'));

app.use('/players', players);

app.get('/api/users', function (req, res) {
    res.json({
        "name": "Kelson",
        "email": "kelson@gmail.com"
    });
});

app.listen(8765, function () {
    console.log('Legends of Pong app listening on port 3000!');
});
