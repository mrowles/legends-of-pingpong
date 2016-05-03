import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {AddPlayerComponent} from 'js/components/addPlayer/addPlayer.component';
import {HomepageComponent} from 'js/components/homepage/homepage.component';
import {CreateMatchPage} from 'js/components/createMatch/createMatch.component';
import {MatchPage} from 'js/components/matchPage/matchPage.component';

@Component({
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
  ],
  selector: 'lopp-app',
  templateUrl: 'js/app.html',
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
  title = 'LOAD GODAMMIT';

  public ngOnInit(): void {
    console.log('TEST');
  }
}
