"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var addPlayer_component_1 = require('components/addPlayer/addPlayer.component');
var homepage_component_1 = require('components/homepage/homepage.component');
var createMatch_component_1 = require('components/createMatch/createMatch.component');
var matchPage_component_1 = require('components/matchPage/matchPage.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
            ],
            selector: 'lopp-app',
            templateUrl: 'public/js/app.html'
        }),
        router_deprecated_1.RouteConfig([
            {
                component: homepage_component_1.HomepageComponent,
                name: 'Home',
                path: '/',
                useAsDefault: true
            }, {
                component: addPlayer_component_1.AddPlayerComponent,
                name: 'PlayerAdd',
                path: '/players/add'
            }, {
                component: createMatch_component_1.CreateMatchPage,
                name: 'CreateMatch',
                path: '/createMatch'
            }, {
                component: matchPage_component_1.MatchPage,
                name: 'MatchPage',
                path: '/match'
            },
        ])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
