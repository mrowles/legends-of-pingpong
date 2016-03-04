import {Component}         from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AddPlayerComponent} from '../client/components/addPlayer/addPlayer.component';
import {HomepageComponent} from '../client/components/homepage/homepage.component';
import {NewMatchPage} from '../client/components/newMatch/newMatch.component';

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
    path: '/newMatch',
    name: 'StartNewMatch',
    component: NewMatchPage
  }
])
export class AppComponent {
}
