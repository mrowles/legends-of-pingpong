/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {PlayerService} from "./service/player.service";
import {MatchService} from "./service/match.service";

bootstrap(AppComponent, [ROUTER_PROVIDERS, PlayerService, MatchService]);
