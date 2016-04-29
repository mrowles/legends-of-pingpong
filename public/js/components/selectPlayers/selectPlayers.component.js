System.register(['angular2/core', 'angular2/http', 'angular2/router', '../../service/match.service', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, match_service_1;
    var SelectPlayersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (match_service_1_1) {
                match_service_1 = match_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            SelectPlayersComponent = (function () {
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
                        providers: [http_1.HTTP_PROVIDERS, router_1.ROUTER_DIRECTIVES],
                        selector: 'select-players-form',
                        templateUrl: '/client/components/selectPlayers/selectPlayers.html',
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, match_service_1.MatchService])
                ], SelectPlayersComponent);
                return SelectPlayersComponent;
            }());
            exports_1("SelectPlayersComponent", SelectPlayersComponent);
        }
    }
});
//# sourceMappingURL=selectPlayers.component.js.map