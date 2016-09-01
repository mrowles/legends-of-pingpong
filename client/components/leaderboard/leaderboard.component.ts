import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES}  from '@angular/router-deprecated';
import {Http, HTTP_PROVIDERS, Headers, Response} from '@angular/http';

import {Player} from '../../model/player/player.model';

@Component({
  providers: [ROUTER_DIRECTIVES, HTTP_PROVIDERS],
  selector: 'leaderboard',
  template: require('./leaderboard.html'),
})

export class LeaderboardComponent implements OnInit {

  private getResponse: Response;
  private players: Player[];

  constructor(private http: Http) {
  }

  public ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): void {
    this.http.get('/api/player/leaderboard')
      .subscribe(
        (response: Response) => this.players = response.json(),
        (response: Response) => this.getResponse = response.json()
      );
  }

  calculatePercent(player: Player): number {
    let matchWon: number = player.playerStats.matchWon;
    let matchLost: number = player.playerStats.matchLost;
    let matchTotal: number = matchWon + matchLost;

    if (matchWon === 0) {
      return 0.0;
    }

    return matchWon / matchTotal;
  }
}
