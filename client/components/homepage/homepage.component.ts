import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {LeaderboardComponent} from 'components/leaderboard/leaderboard.component';

@Component({
  directives: [ROUTER_DIRECTIVES, LeaderboardComponent],
  templateUrl: 'public/js/components/homepage/homepage.html',
})

export class HomepageComponent {

  public ngOnInit(): void {
    console.log('HOMEPAGE COMPONENT');
  }
}
