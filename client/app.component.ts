import {Component}         from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AddPlayerComponent} from '../client/components/addPlayer/addPlayer.component';
import {HomepageComponent} from '../client/components/homepage/homepage.component';
import {CreateMatchPage} from '../client/components/createMatch/createMatch.component';
import {MatchPage} from '../client/components/matchPage/matchPage.component';

@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'lopp-app',
  templateUrl: './client/app.html',
})

@RouteConfig([
  {
    component: HomepageComponent,
    name: 'Home',
    path: '/',
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
}
