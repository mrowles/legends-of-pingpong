var mongoose = require('mongoose');
var playerSchema = new mongoose.Schema({
    _id: Number,
    email: Number,
    name: {
        first: String,
        last: String
    }
});