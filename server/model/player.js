var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
  id: Number,
  email: String,
  firstname: String,
  lastname: String

});

var Player = mongoose.model('player', playerSchema);

module.exports = Player;
