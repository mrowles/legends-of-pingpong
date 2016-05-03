import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {LeaderboardComponent} from '../leaderboard/leaderboard.component';

@Component({
  directives: [ROUTER_DIRECTIVES, LeaderboardComponent],
  templateUrl: 'js/components/homepage/homepage.html',
})

export class HomepageComponent {

  public ngOnInit(): void {
    console.log('HOMEPAGE COMPONENT');
  }
}
