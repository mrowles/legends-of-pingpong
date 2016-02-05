var express = require('express');
var app = express();

app.use('', express.static(__dirname + '/'));

app.get('/api/users', function (req, res) {
    res.json({
        "name": "Kelson",
        "email": "kelson@gmail.com"
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});