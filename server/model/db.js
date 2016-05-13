var mongoose = require('mongoose');
var db = mongoose.connection;

var env = process.env.MONGODB_URI;

db.on('error', function (err) {
  console.error('Mongodb failed to connect', err);
});

db.once('open', function () {
  console.log('Mongodb connected');
});

mongoose.connect(env);
