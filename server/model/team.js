var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
  id: Number,
  name: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  players: [{
    type: Schema.ObjectId,
    ref: 'Player',
    required: true
  }]
});

var Team = mongoose.model('team', teamSchema);

module.exports = Team;
