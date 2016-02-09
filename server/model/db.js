var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function () {
  console.log('Mongoose db started');
});

mongoose.connect('mongodb://localhost/lop-dev');
