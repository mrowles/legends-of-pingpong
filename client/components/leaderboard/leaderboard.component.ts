import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  providers: [ROUTER_DIRECTIVES],
  selector: 'leaderboard',
  templateUrl: '/client/components/leaderboard/leaderboard.html',
})

export class LeaderboardComponent {
}
