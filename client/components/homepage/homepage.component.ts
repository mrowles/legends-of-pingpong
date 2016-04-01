import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {LeaderboardComponent} from '../leaderboard/leaderboard.component';

@Component({
  directives: [ROUTER_DIRECTIVES, LeaderboardComponent],
  templateUrl: '/client/components/homepage/homepage.html',
})

export class HomepageComponent {
}
