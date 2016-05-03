"use strict";
var PlayerService = (function () {
    function PlayerService() {
    }
    PlayerService.prototype.getLastAddedPlayer = function () {
        return this.player;
    };
    PlayerService.prototype.setLastAddedPlayer = function (player) {
        this.player = player;
    };
    PlayerService.prototype.clearLastAddedPlayer = function () {
        this.player = undefined;
    };
    return PlayerService;
}());
exports.PlayerService = PlayerService;
