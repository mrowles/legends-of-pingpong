import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Player} from '../../model/player/player.model';
import {MatchService} from '../../service/match.service';
import {Response} from 'angular2/http';
import 'rxjs/Rx';

@Component({
  providers: [HTTP_PROVIDERS, ROUTER_DIRECTIVES],
  selector: 'select-players-form',
  templateUrl: '/client/components/selectPlayers/selectPlayers.html',
})

export class SelectPlayersComponent implements OnInit {
  private playerList: Array<Player> = [];
  private http: Http;
  private matchService: MatchService;

  constructor(http: Http, matchService: MatchService) {
    this.http = http;
    this.matchService = matchService;
  }

  public addPlayerToMatch(player: Player): void {
    this.matchService.addPlayer(player);
  }

  public ngOnInit(): void {
    this.http.get('/api/player/all').map((response: Response) => response.json())
      .subscribe(
        (playerList: Array<Player>) => this.playerList = playerList
      );
  }

  public onSubmit(): void {
    console.log('OnSubmit');
    console.log('Player List', this.playerList);
  }
}
