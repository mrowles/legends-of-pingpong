var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var matchSchema = new Schema({
  id: Number,
  opponent: [{
    player: {
      type: Schema.ObjectId,
      ref: 'Player',
      required: true
    },
    won: {
      type: Boolean,
      required: true
    },
    sets: [{
      score: {
        type: Number,
        required: true
      },
      won: {
        type: Boolean,
        required: true
      }
    }]
  }]
});

var Match = mongoose.model('match', matchSchema);

module.exports = Match;
