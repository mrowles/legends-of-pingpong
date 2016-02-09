System.register(['angular2/core', 'angular2/http', '../../model/player/player.model', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, player_model_1;
    var SelectPlayersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (player_model_1_1) {
                player_model_1 = player_model_1_1;
            },
            function (_1) {}],
        execute: function() {
            SelectPlayersComponent = (function () {
                function SelectPlayersComponent(http) {
                    this.model = new player_model_1.Player(1, '', '');
                    this.submitted = false;
                    this.response = {};
                    this.playerList = [];
                    this.selectedPlayers = [];
                    this.http = http;
                }
                SelectPlayersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.http.get('/player/all').map(function (res) { return res.json(); })
                        .subscribe(function (res) { return _this.playerList = res; });
                };
                SelectPlayersComponent.prototype.onSubmit = function () {
                    console.log('OnSubmit');
                    console.log('Player List', this.playerList);
                };
                SelectPlayersComponent = __decorate([
                    core_1.Component({
                        selector: 'select-players-form',
                        providers: [http_1.HTTP_PROVIDERS],
                        templateUrl: '/client/components/selectPlayers/selectPlayers.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SelectPlayersComponent);
                return SelectPlayersComponent;
            })();
            exports_1("SelectPlayersComponent", SelectPlayersComponent);
        }
    }
});
//# sourceMappingURL=selectPlayers.component.js.map