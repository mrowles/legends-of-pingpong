import {Component, OnInit} from 'angular2/core'
import {NgForm} from 'angular2/common';
import {BaseRequestOptions, Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Player} from '../../model/player/player.model';

import 'rxjs/Rx';

@Component({
  selector: 'select-players-form',
  providers: [HTTP_PROVIDERS, ROUTER_DIRECTIVES],
  templateUrl: '/client/components/selectPlayers/selectPlayers.html'
})
export class SelectPlayersComponent implements OnInit {
  model = new Player(1, '', '');
  submitted = false;
  response = {};
  playerList = [];
  http:Http;
  selectedPlayers = [];

  constructor(http: Http) {
    this.http = http;
  }

  ngOnInit() {
    this.http.get('/api/player/all').map(res => res.json())
      .subscribe(
        res => this.playerList = res
      );
  }

  onSubmit() {
    console.log('OnSubmit');
    console.log('Player List', this.playerList);
  }
}
