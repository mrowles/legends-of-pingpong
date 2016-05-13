System.register(['@angular/core', '@angular/router-deprecated', '@angular/http', 'js/service/player.service', 'js/service/match.service', 'js/components/matchedPlayers/matchedPlayers.component', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, http_1, player_service_1, match_service_1, matchedPlayers_component_1;
    var MatchPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            },
            function (match_service_1_1) {
                match_service_1 = match_service_1_1;
            },
            function (matchedPlayers_component_1_1) {
                matchedPlayers_component_1 = matchedPlayers_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            MatchPage = (function () {
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
                        headers: headers,
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
                        templateUrl: 'js/components/matchPage/matchPage.html',
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof player_service_1.PlayerService !== 'undefined' && player_service_1.PlayerService) === 'function' && _a) || Object, (typeof (_b = typeof match_service_1.MatchService !== 'undefined' && match_service_1.MatchService) === 'function' && _b) || Object, http_1.Http, router_deprecated_1.Router])
                ], MatchPage);
                return MatchPage;
                var _a, _b;
            })();
            exports_1("MatchPage", MatchPage);
        }
    }
});
//# sourceMappingURL=matchPage.component.js.map