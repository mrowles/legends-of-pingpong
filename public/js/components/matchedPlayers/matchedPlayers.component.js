System.register(['@angular/core', 'service/match.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, match_service_1;
    var MatchedPlayersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (match_service_1_1) {
                match_service_1 = match_service_1_1;
            }],
        execute: function() {
            MatchedPlayersComponent = (function () {
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
                        templateUrl: 'public/js/components/matchedPlayers/matchedPlayers.html',
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof match_service_1.MatchService !== 'undefined' && match_service_1.MatchService) === 'function' && _a) || Object])
                ], MatchedPlayersComponent);
                return MatchedPlayersComponent;
                var _a;
            })();
            exports_1("MatchedPlayersComponent", MatchedPlayersComponent);
        }
    }
});
//# sourceMappingURL=matchedPlayers.component.js.map