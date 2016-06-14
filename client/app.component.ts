import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {AddPlayerComponent} from './components/addPlayer/addPlayer.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {CreateMatchPage} from './components/createMatch/createMatch.component';
import {MatchPage} from './components/matchPage/matchPage.component';
import {PlayerService} from "./service/player.service";
import {MatchService} from "./service/match.service";

// Stylesheets
require('./index.scss');

@Component({
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    PlayerService,
    MatchService
  ],
  selector: 'lopp-app',
  template: require('./app.html'),
})

@RouteConfig([
  {
    component: HomepageComponent,
    name: 'Home',
    path: '/',
    useAsDefault: true,
  }, {
    component: AddPlayerComponent,
    name: 'PlayerAdd',
    path: '/players/add',
  }, {
    component: CreateMatchPage,
    name: 'CreateMatch',
    path: '/createMatch',
  }, {
    component: MatchPage,
    name: 'MatchPage',
    path: '/match',
  },
])

export class AppComponent {
  private playerService: PlayerService;
  private matchService: MatchService;


  //REVISIT
  constructor(playerService: PlayerService, matchService: MatchService) {
    this.playerService = playerService;
    this.matchService = matchService;
  }
}
