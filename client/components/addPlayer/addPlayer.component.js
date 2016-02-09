System.register(['angular2/core', 'angular2/http', '../../model/player/player.model'], function(exports_1) {
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
    var AddPlayerComponent;
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
            }],
        execute: function() {
            AddPlayerComponent = (function () {
                function AddPlayerComponent(http) {
                    this.model = new player_model_1.Player(1, 'John', 'john@gmail.com');
                    this.submitted = false;
                    this.response = {};
                    this.http = http;
                }
                AddPlayerComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.http.get('/players/all')
                        .subscribe(function (response) { return _this.response = response; });
                    this.submitted = true;
                };
                Object.defineProperty(AddPlayerComponent.prototype, "diagnostic", {
                    get: function () {
                        console.log(2, this.response);
                        return JSON.stringify(this.response);
                    },
                    enumerable: true,
                    configurable: true
                });
                AddPlayerComponent = __decorate([
                    core_1.Component({
                        selector: 'add-player-form',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                        templateUrl: '/client/components/addPlayer/addPlayer.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AddPlayerComponent);
                return AddPlayerComponent;
            })();
            exports_1("AddPlayerComponent", AddPlayerComponent);
        }
    }
});
//# sourceMappingURL=addPlayer.component.js.map