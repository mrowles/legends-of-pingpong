var mongoose = require('mongoose');
var validators = require('./validators');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
  id: Number,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: [validators.email, 'Please fill a valid email address'],
    index: {
      unique: true
    }
  }
});

var Player = mongoose.model('player', playerSchema);

module.exports = Player;
