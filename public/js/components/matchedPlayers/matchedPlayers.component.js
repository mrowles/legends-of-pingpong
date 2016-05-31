"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MatchedPlayersComponent = (function () {
    function MatchedPlayersComponent(matchService) {
        this.matchService = matchService;
        this.match = this.matchService.getMatch();
    }
    MatchedPlayersComponent.prototype.removeOpponent = function (opponentNumber) {
        this.match.removeOpponent(opponentNumber);
    };
    MatchedPlayersComponent = __decorate([
        core_1.Component({
            selector: 'matched-players',
            templateUrl: 'public/js/components/matchedPlayers/matchedPlayers.html'
        })
    ], MatchedPlayersComponent);
    return MatchedPlayersComponent;
}());
exports.MatchedPlayersComponent = MatchedPlayersComponent;
