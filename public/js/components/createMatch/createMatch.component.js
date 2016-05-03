"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var selectPlayers_component_1 = require('../selectPlayers/selectPlayers.component');
var router_1 = require('@angular/router');
var matchedPlayers_component_1 = require('../matchedPlayers/matchedPlayers.component');
var CreateMatchPage = (function () {
    function CreateMatchPage(playerService, matchService) {
        this.playerService = playerService;
        this.matchService = matchService;
    }
    CreateMatchPage.prototype.ngOnInit = function () {
        console.log('CREATE MATCH');
        this.lastAddedPlayer = this.playerService.getLastAddedPlayer();
        this.playerService.clearLastAddedPlayer();
    };
    CreateMatchPage = __decorate([
        core_1.Component({
            directives: [selectPlayers_component_1.SelectPlayersComponent, matchedPlayers_component_1.MatchedPlayersComponent, router_1.ROUTER_DIRECTIVES],
            templateUrl: './createMatch.html'
        })
    ], CreateMatchPage);
    return CreateMatchPage;
}());
exports.CreateMatchPage = CreateMatchPage;
