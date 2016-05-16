"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('app.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var player_service_1 = require('service/player.service');
var match_service_1 = require('service/match.service');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [player_service_1.PlayerService, match_service_1.MatchService, router_deprecated_1.ROUTER_PROVIDERS]);
