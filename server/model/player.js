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
  },
  playerStats: {
    matchWon: {
      type: Number,
      default: 0
    },
    matchLost: {
      type: Number,
      default: 0
    },
    setsWon: {
      type: Number,
      default: 0
    },
    setsLost: {
      type: Number,
      default: 0
    },
    pointsFor: {
      type: Number,
      default: 0
    },
    pointsAgainst: {
      type: Number,
      default: 0
    }
  }
});

var Player = mongoose.model('player', playerSchema);

module.exports = Player;
