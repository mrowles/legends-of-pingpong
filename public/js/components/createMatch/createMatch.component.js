System.register(['@angular/core', '@angular/router-deprecated', 'js/components/selectPlayers/selectPlayers.component', 'js/components/matchedPlayers/matchedPlayers.component', 'js/service/player.service', 'js/service/match.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, selectPlayers_component_1, matchedPlayers_component_1, player_service_1, match_service_1;
    var CreateMatchPage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (selectPlayers_component_1_1) {
                selectPlayers_component_1 = selectPlayers_component_1_1;
            },
            function (matchedPlayers_component_1_1) {
                matchedPlayers_component_1 = matchedPlayers_component_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            },
            function (match_service_1_1) {
                match_service_1 = match_service_1_1;
            }],
        execute: function() {
            CreateMatchPage = (function () {
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
                        directives: [selectPlayers_component_1.SelectPlayersComponent, matchedPlayers_component_1.MatchedPlayersComponent, router_deprecated_1.ROUTER_DIRECTIVES],
                        templateUrl: 'js/components/createMatch/createMatch.html',
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof player_service_1.PlayerService !== 'undefined' && player_service_1.PlayerService) === 'function' && _a) || Object, (typeof (_b = typeof match_service_1.MatchService !== 'undefined' && match_service_1.MatchService) === 'function' && _b) || Object])
                ], CreateMatchPage);
                return CreateMatchPage;
                var _a, _b;
            })();
            exports_1("CreateMatchPage", CreateMatchPage);
        }
    }
});
//# sourceMappingURL=createMatch.component.js.map