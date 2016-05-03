"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
require('rxjs/Rx');
var SelectPlayersComponent = (function () {
    function SelectPlayersComponent(http, matchService) {
        this.playerList = [];
        this.http = http;
        this.matchService = matchService;
    }
    SelectPlayersComponent.prototype.addPlayerToMatch = function (player) {
        this.matchService.addOpponent(player);
    };
    SelectPlayersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/player/all').map(function (response) { return response.json(); })
            .subscribe(function (playerList) { return _this.playerList = playerList; });
    };
    SelectPlayersComponent.prototype.onSubmit = function () {
        console.log('OnSubmit');
        console.log('Player List', this.playerList);
    };
    SelectPlayersComponent = __decorate([
        core_1.Component({
            providers: [http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_DIRECTIVES],
            selector: 'select-players-form',
            templateUrl: 'js/components/selectPlayers/selectPlayers.html'
        })
    ], SelectPlayersComponent);
    return SelectPlayersComponent;
}());
exports.SelectPlayersComponent = SelectPlayersComponent;
