"use strict";
var match_model_1 = require('model/match/match.model');
var opponent_model_1 = require('model/match/opponent.model');
var MatchService = (function () {
    function MatchService() {
        this.match = new match_model_1.Match([]);
    }
    MatchService.prototype.getMatch = function () {
        return this.match;
    };
    MatchService.prototype.addOpponent = function (player) {
        var opponent = new opponent_model_1.Opponent(player);
        this.match.addOpponent(opponent);
    };
    MatchService.prototype.isMatchReady = function () {
        return this.match.getOpponent(0) !== undefined && this.match.getOpponent(1) !== undefined;
    };
    return MatchService;
}());
exports.MatchService = MatchService;
