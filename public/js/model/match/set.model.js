"use strict";
var Set = (function () {
    function Set(score, won) {
        this.score = score;
        this.won = won;
    }
    Set.prototype.getScore = function () {
        return this.score;
    };
    Set.prototype.setWon = function (won) {
        this.won = won;
    };
    Set.prototype.isWon = function () {
        return this.won;
    };
    return Set;
}());
exports.Set = Set;
