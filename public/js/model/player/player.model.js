"use strict";
var playerStats_model_1 = require('model/player/playerStats.model');
var Player = (function () {
    function Player(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.playerStats = new playerStats_model_1.PlayerStats();
        this.playerStats.win = 0;
        this.playerStats.loss = 0;
        this.playerStats.forfeit = 0;
        this.playerStats.for = 0;
        this.playerStats.against = 0;
    }
    return Player;
}());
exports.Player = Player;
