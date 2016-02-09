import {Component}         from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AddPlayerComponent} from '../client/components/addPlayer/addPlayer.component';
import {HomepageComponent} from '../client/components/homepage/homepage.component';
import {SelectPlayersComponent} from '../client/components/selectPlayers/selectPlayers.component';

@Component({
  selector: 'lopp-app',
  templateUrl: './client/app.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomepageComponent
  }, {
    path: '/players/add',
    name: 'PlayerAdd',
    component: AddPlayerComponent
  }, {
    path: '/players',
    name: 'Players',
    component: SelectPlayersComponent
  }
])
export class AppComponent {
}
