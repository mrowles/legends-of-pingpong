System.register(['@angular/core', '@angular/router-deprecated', '@angular/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, http_1;
    var LeaderboardComponent;
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
            }],
        execute: function() {
            LeaderboardComponent = (function () {
                function LeaderboardComponent(http) {
                    this.http = http;
                }
                LeaderboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this.http.get('/api/player/leaderboard')
                        .subscribe(function (response) { return _this.players = response.json(); }, function (response) { return _this.getResponse = response.json(); });
                };
                LeaderboardComponent = __decorate([
                    core_1.Component({
                        providers: [router_deprecated_1.ROUTER_DIRECTIVES, http_1.HTTP_PROVIDERS],
                        selector: 'leaderboard',
                        templateUrl: 'public/js/components/leaderboard/leaderboard.html',
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LeaderboardComponent);
                return LeaderboardComponent;
            })();
            exports_1("LeaderboardComponent", LeaderboardComponent);
        }
    }
});
//# sourceMappingURL=leaderboard.component.js.map