"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var matchedPlayers_component_1 = require('components/matchedPlayers/matchedPlayers.component');
require('rxjs/Rx');
var MatchPage = (function () {
    function MatchPage(playerService, matchService, http, router) {
        this.isMatchFinished = false;
        this.playerService = playerService;
        this.matchService = matchService;
        this.match = this.matchService.getMatch();
        this.http = http;
        this.router = router;
    }
    MatchPage.prototype.checkMatchFinished = function () {
        if (this.match.getOpponent(0).getWon() || this.match.getOpponent(1).getWon()) {
            this.isMatchFinished = true;
        }
    };
    MatchPage.prototype.setScoreUpdated = function (setIndex) {
        var playerOneScore = this.match.getOpponent(0).getSet(setIndex).getScore();
        var playerTwoScore = this.match.getOpponent(1).getSet(setIndex).getScore();
        // don't do win unless scores appropriate
        if ((playerOneScore + playerTwoScore) < 11) {
            return;
        }
        // have to win by 2 at tie break
        if (playerOneScore >= 10 && playerTwoScore >= 10) {
            if (playerOneScore >= playerTwoScore && playerOneScore - playerTwoScore < 2) {
                return;
            }
            else if (playerTwoScore >= playerOneScore && playerTwoScore - playerOneScore < 2) {
                return;
            }
        }
        // set who won the set
        if (playerOneScore > playerTwoScore) {
            this.match.getOpponent(0).getSet(setIndex).setWon(true);
            this.match.getOpponent(1).getSet(setIndex).setWon(false);
        }
        else {
            this.match.getOpponent(0).getSet(setIndex).setWon(false);
            this.match.getOpponent(1).getSet(setIndex).setWon(true);
        }
        this.playerOneWins = this.match.getOpponent(0).getWins();
        this.playerTwoWins = this.match.getOpponent(1).getWins();
        if ((this.playerOneWins + this.playerTwoWins) === 3) {
            if (this.playerOneWins >= 2) {
                this.match.getOpponent(0).setWon(true);
                this.match.getOpponent(1).setWon(false);
            }
            else {
                this.match.getOpponent(0).setWon(false);
                this.match.getOpponent(1).setWon(true);
            }
        }
        this.checkMatchFinished();
    };
    MatchPage.prototype.onSubmit = function () {
        var _this = this;
        var json = JSON.stringify(this.match);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('/api/match', json, {
            headers: headers
        }).subscribe(function (response) { return _this.onSuccess(); }, function (response) { return _this.postResponse = response.json(); });
    };
    MatchPage.prototype.onSuccess = function () {
        this.router.navigate(['Home']);
        console.log('SUCCESS');
    };
    MatchPage = __decorate([
        core_1.Component({
            directives: [matchedPlayers_component_1.MatchedPlayersComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS],
            templateUrl: 'public/js/components/matchPage/matchPage.html'
        })
    ], MatchPage);
    return MatchPage;
}());
exports.MatchPage = MatchPage;
