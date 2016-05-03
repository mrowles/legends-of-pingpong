import {Component, OnInit} from '@angular/core';
import {Http, HTTP_PROVIDERS, Response} from '@angular/http';
import {ROUTER_DIRECTIVES}  from '@angular/router-deprecated';

import {Player} from 'js/model/player/player.model';
import {MatchService} from 'js/service/match.service';

import 'rxjs/Rx';

@Component({
  providers: [HTTP_PROVIDERS, ROUTER_DIRECTIVES],
  selector: 'select-players-form',
  templateUrl: 'js/components/selectPlayers/selectPlayers.html',
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
    this.matchService.addOpponent(player);
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
