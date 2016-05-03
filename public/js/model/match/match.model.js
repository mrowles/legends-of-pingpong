"use strict";
var Match = (function () {
    function Match(opponent) {
        this.opponent = opponent;
        this.won = false;
        this.currentOpponentNumber = 0;
    }
    Match.prototype.addOpponent = function (opponent) {
        if (this.currentOpponentNumber === 2) {
            console.log('Cannot add more than two players');
            return;
        }
        if (this.containsPlayer(0, opponent) || this.containsPlayer(1, opponent)) {
            console.log('Cannot add same player twice');
            return;
        }
        this.opponent[this.currentOpponentNumber] = opponent;
        this.resetCurrentOpponentNumber();
    };
    Match.prototype.getOpponent = function (index) {
        return this.opponent[index];
    };
    Match.prototype.removeOpponent = function (opponentNumber) {
        this.opponent[opponentNumber] = undefined;
        this.resetCurrentOpponentNumber();
    };
    Match.prototype.containsPlayer = function (playerNumber, opponent) {
        if (this.opponent[playerNumber] !== undefined && this.opponent[playerNumber].getPlayer() === opponent.getPlayer()) {
            return true;
        }
        return false;
    };
    Match.prototype.resetCurrentOpponentNumber = function () {
        if (this.opponent[0] === undefined) {
            this.currentOpponentNumber = 0;
        }
        else if (this.opponent[1] === undefined) {
            this.currentOpponentNumber = 1;
        }
        else {
            this.currentOpponentNumber = 2;
        }
    };
    return Match;
}());
exports.Match = Match;
