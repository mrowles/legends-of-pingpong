var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', function (err) {
  console.error('Mongodb failed to start', err);
});

db.once('open', function () {
  console.log('Mongodb started');
});

mongoose.connect('mongodb://localhost/lop-dev');
