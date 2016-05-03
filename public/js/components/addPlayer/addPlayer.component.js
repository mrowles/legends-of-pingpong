"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var error_1 = require('../../model/error/error');
var http_1 = require('@angular/http');
var player_model_1 = require('../../model/player/player.model');
require('rxjs/Rx');
var AddPlayerComponent = (function () {
    function AddPlayerComponent(http, router, playerService) {
        this.model = new player_model_1.Player(1, '', '');
        this.error = new error_1.Error('');
        this.http = http;
        this.router = router;
        this.playerService = playerService;
    }
    AddPlayerComponent.prototype.onSubmit = function () {
        var _this = this;
        var json = JSON.stringify(this.model);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('/api/player', json, {
            headers: headers
        }).subscribe(function (response) { return _this.onSuccess(); }, function (response) { return _this.onError(response); });
    };
    AddPlayerComponent.prototype.onSuccess = function () {
        this.playerService.setLastAddedPlayer(this.model);
        this.router.navigate(['CreateMatch']);
    };
    AddPlayerComponent.prototype.onError = function (response) {
        this.error.message = JSON.stringify(response.json().errors);
    };
    AddPlayerComponent = __decorate([
        core_1.Component({
            providers: [http_1.HTTP_PROVIDERS],
            selector: 'add-player-form',
            templateUrl: '/client/components/addPlayer/addPlayer.html'
        })
    ], AddPlayerComponent);
    return AddPlayerComponent;
}());
exports.AddPlayerComponent = AddPlayerComponent;
