System.register(['@angular/core', '@angular/http', '@angular/router-deprecated', 'js/model/error/error', 'js/model/player/player.model', 'js/service/player.service', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_deprecated_1, error_1, player_model_1, player_service_1;
    var AddPlayerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (error_1_1) {
                error_1 = error_1_1;
            },
            function (player_model_1_1) {
                player_model_1 = player_model_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            AddPlayerComponent = (function () {
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
                        headers: headers,
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
                        templateUrl: '/js/components/addPlayer/addPlayer.html',
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_deprecated_1.Router, (typeof (_a = typeof player_service_1.PlayerService !== 'undefined' && player_service_1.PlayerService) === 'function' && _a) || Object])
                ], AddPlayerComponent);
                return AddPlayerComponent;
                var _a;
            })();
            exports_1("AddPlayerComponent", AddPlayerComponent);
        }
    }
});
//# sourceMappingURL=addPlayer.component.js.map