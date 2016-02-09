var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
});

mongoose.connect('mongodb://localhost/double-dragon-dev');