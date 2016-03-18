var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error('Mongodb failed to start'));
db.once('open', function () {
  console.log('Mongodb started');
});

mongoose.connect('mongodb://localhost/lop-dev');
