var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var playerSchema = new Schema({
    id: Number,
    email: Number,
    name: {
        first: String,
        last: String
    }
});
var Player = mongoose.model('Player', playerSchema);