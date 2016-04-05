import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {Response} from 'angular2/http';
import {Player} from '../../model/player/player.model';

@Component({
  providers: [ROUTER_DIRECTIVES, HTTP_PROVIDERS],
  selector: 'leaderboard',
  templateUrl: '/client/components/leaderboard/leaderboard.html',
})

export class LeaderboardComponent implements OnInit {

  private getResponse: Response;
  private players: Player[];

  constructor(private http: Http){
  }

  public ngOnInit(): void {
    let headers: Headers = new Headers();

    headers.append('Content-Type', 'application/json');
    this.http.get('/api/player/all')
      .subscribe(
      (response: Response) => this.players = response.json(),
      (response: Response) => this.getResponse = response.json()
    );
  }
}
