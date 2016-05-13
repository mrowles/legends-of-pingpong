"use strict";
var set_model_1 = require('model/match/set.model');
var Opponent = (function () {
    function Opponent(player) {
        this.player = player;
        this.sets = [new set_model_1.Set(0, false), new set_model_1.Set(0, false), new set_model_1.Set(0, false)];
        this.won = false;
    }
    Opponent.prototype.getPlayer = function () {
        return this.player;
    };
    Opponent.prototype.setPlayer = function (player) {
        this.player = player;
    };
    Opponent.prototype.getSet = function (index) {
        return this.sets[index];
    };
    Opponent.prototype.getWon = function () {
        return this.won;
    };
    Opponent.prototype.setWon = function (won) {
        this.won = won;
    };
    Opponent.prototype.getWins = function () {
        var numberOfWins = 0;
        for (var _i = 0, _a = this.sets; _i < _a.length; _i++) {
            var set = _a[_i];
            if (set.isWon()) {
                numberOfWins++;
            }
        }
        return numberOfWins;
    };
    return Opponent;
}());
exports.Opponent = Opponent;
