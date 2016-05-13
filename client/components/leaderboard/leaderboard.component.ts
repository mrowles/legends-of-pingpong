import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES}  from '@angular/router-deprecated';
import {Http, HTTP_PROVIDERS, Headers, Response} from '@angular/http';

import {Player} from 'model/player/player.model';

@Component({
  providers: [ROUTER_DIRECTIVES, HTTP_PROVIDERS],
  selector: 'leaderboard',
  templateUrl: 'public/js/components/leaderboard/leaderboard.html',
})

export class LeaderboardComponent implements OnInit {

  private getResponse: Response;
  private players: Player[];

  constructor(private http: Http){
  }

  public ngOnInit(): void {
    let headers: Headers = new Headers();

    headers.append('Content-Type', 'application/json');
    this.http.get('/api/player/leaderboard')
      .subscribe(
      (response: Response) => this.players = response.json(),
      (response: Response) => this.getResponse = response.json()
    );
  }
}
